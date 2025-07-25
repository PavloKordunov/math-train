'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/uk'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState, useEffect } from 'react'
import {
    ArrowLeft,
    ArrowRight,
    X,
    Infinity as InfinityIcon,
    Check,
    Move,
    Trash2,
    Undo,
    Edit,
} from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'
import { useUser } from '@/hooks/useUser'

moment.locale('uk')
const localizer = momentLocalizer(moment)

type EventStatus = 'default' | 'completed' | 'postponed' | 'canceled'

interface CalendarEvent {
    id: string
    originalId: string
    title: string
    start: Date
    end: Date
    status: EventStatus
    teacherId?: string
    dayOfWeek?: number
    hours?: number
    minutes?: number
    duration?: number
    weeks?: number
    exceptionDetails?: {
        status: string
        newDate?: string
        note?: string
    }
}

const generateWeeklyEvents = (scheduleItem: any): CalendarEvent[] => {
    const events: CalendarEvent[] = []
    const startDate = moment()
        .startOf('week')
        .add(scheduleItem.dayOfWeek, 'days')
        .hour(scheduleItem.hours)
        .minute(scheduleItem.minutes)
        .second(0)
        .millisecond(0)

    const repeatCount = scheduleItem.weeks ?? 52
    const scheduleExceptions = scheduleItem.exceptions || {}

    for (let i = 0; i < repeatCount; i++) {
        const start = startDate.clone().add(i, 'weeks')
        const end = start.clone().add(scheduleItem.duration, 'minutes')
        const dateKey = start.format('YYYY-MM-DD')
        const exception = scheduleExceptions[dateKey]

        const status: EventStatus = exception?.status
            ? (exception.status.toLowerCase() as EventStatus)
            : 'default'

        events.push({
            id: `${scheduleItem.id}-${dateKey}`,
            originalId: scheduleItem.id,
            title: scheduleItem.title,
            start: start.toDate(),
            end: end.toDate(),
            status: status,
            teacherId: scheduleItem.teacherId,
            dayOfWeek: scheduleItem.dayOfWeek,
            hours: scheduleItem.hours,
            minutes: scheduleItem.minutes,
            duration: scheduleItem.duration,
            weeks: scheduleItem.weeks,
            ...(exception && { exceptionDetails: exception }),
        })
    }
    return events
}

const getEventColorClassName = (status: EventStatus) => {
    switch (status) {
        case 'completed':
            return 'event-status-completed'
        case 'postponed':
            return 'event-status-postponed'
        case 'canceled':
            return 'event-status-canceled'
        default:
            return 'event-status-default'
    }
}

const getEventColor = (status: EventStatus) => {
    switch (status) {
        case 'completed':
            return '#4ade80'
        case 'postponed':
            return '#fbbf24'
        case 'canceled':
            return '#f87171'
        default:
            return '#c1b6d6'
    }
}

const BigCalendar = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [view, setView] = useState<View>(Views.WEEK)
    const [date, setDate] = useState(moment().startOf('week').toDate())
    const [openModal, setOpenModal] = useState(false)
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
    const [openEventPanel, setOpenEventPanel] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
        null
    )
    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        dayOfWeek: 0,
        startTime: '10:00',
        duration: 60,
        repeatCount: 4,
        repeatIndefinitely: false,
    })
    const [openEditModal, setOpenEditModal] = useState(false)
    const [editingSchedule, setEditingSchedule] = useState<any>(null)

    useEffect(() => {
        const getSchedule = async () => {
            if (!user?.id) return
            try {
                const res = await fetch(`${API_URL}/api/schedule/${user.id}`)
                if (!res.ok) {
                    throw new Error('Failed to fetch schedule data')
                }
                const data = await res.json()

                const events = data.flatMap((item: any) =>
                    generateWeeklyEvents(item)
                )
                setCalendarEvents(events)
            } catch (error) {
                console.error('Помилка завантаження розкладу:', error)
                toast.error('Помилка завантаження розкладу')
            }
        }

        getSchedule()
    }, [API_URL, user?.id])

    const createEvent = async () => {
        if (!user?.id || !formData.title) {
            toast.error("Будь ласка, заповніть всі обов'язкові поля.")
            return
        }

        const [hours, minutes] = formData.startTime.split(':').map(Number)
        const eventData = {
            title: formData.title,
            dayOfWeek: formData.dayOfWeek,
            hours,
            minutes,
            duration: formData.duration,
            weeks: formData.repeatIndefinitely
                ? undefined
                : formData.repeatCount,
            teacherId: user.id,
        }
        try {
            const res = await fetch(`${API_URL}/api/schedule`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData),
            })

            if (!res.ok) {
                const errorData = await res.json()
                toast.error(
                    errorData.message || 'Помилка при створенні заняття'
                )
                return
            }

            const newScheduleItem = await res.json()
            const newEvents = generateWeeklyEvents(newScheduleItem)

            setCalendarEvents((prev) => [...prev, ...newEvents])
            setOpenModal(false)
            toast.success(`Розклад успішно створено!`)
            setFormData({
                title: '',
                dayOfWeek: 0,
                startTime: '10:00',
                duration: 60,
                repeatCount: 4,
                repeatIndefinitely: false,
            })
        } catch (error) {
            console.error(error)
            toast.error('Помилка при створенні заняття')
        }
    }

    const handleEditSchedule = (scheduleId: string) => {
        const schedule = calendarEvents.find((e) => e.originalId === scheduleId)
        if (schedule) {
            setEditingSchedule({
                id: schedule.originalId,
                title: schedule.title,
                dayOfWeek: schedule.dayOfWeek,
                startTime: `${String(schedule.hours).padStart(2, '0')}:${String(
                    schedule.minutes
                ).padStart(2, '0')}`,
                duration: schedule.duration,
                repeatCount: schedule.weeks || 4,
                repeatIndefinitely: !schedule.weeks,
            })
            setOpenEditModal(true)
        }
    }

    const updateSchedule = async () => {
        if (!editingSchedule) return

        const [hours, minutes] = editingSchedule.startTime
            .split(':')
            .map(Number)
        const updateData = {
            title: editingSchedule.title,
            dayOfWeek: editingSchedule.dayOfWeek,
            hours,
            minutes,
            duration: editingSchedule.duration,
            weeks: editingSchedule.repeatIndefinitely
                ? undefined
                : editingSchedule.repeatCount,
        }

        try {
            const res = await fetch(
                `${API_URL}/api/schedule/${editingSchedule.id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updateData),
                }
            )

            if (!res.ok) {
                throw new Error('Помилка при оновленні розкладу')
            }

            setCalendarEvents((prevEvents) => {
                const filteredEvents = prevEvents.filter(
                    (e) => e.originalId !== editingSchedule.id
                )

                const newEvents = generateWeeklyEvents({
                    id: editingSchedule.id,
                    title: editingSchedule.title,
                    dayOfWeek: editingSchedule.dayOfWeek,
                    hours,
                    minutes,
                    duration: editingSchedule.duration,
                    weeks: editingSchedule.repeatIndefinitely
                        ? undefined
                        : editingSchedule.repeatCount,
                    teacherId: user?.id,
                    exceptions: prevEvents
                        .filter(
                            (e) =>
                                e.originalId === editingSchedule.id &&
                                e.exceptionDetails
                        )
                        .reduce((acc, event) => {
                            const dateKey = moment(event.start).format(
                                'YYYY-MM-DD'
                            )
                            return { ...acc, [dateKey]: event.exceptionDetails }
                        }, {}),
                })

                return [...filteredEvents, ...newEvents]
            })

            setOpenEditModal(false)
            toast.success('Розклад успішно оновлено!')
        } catch (error) {
            console.error(error)
            toast.error('Помилка при оновленні розкладу')
        }
    }

    const updateEventStatus = async (status: EventStatus) => {
        if (!selectedEvent || !selectedEvent.originalId) {
            toast.error('Немає вибраного заняття або ID розкладу.')
            return
        }

        const formattedDate = moment(selectedEvent.start).format('YYYY-MM-DD')
        const exceptionPayload = {
            date: formattedDate,
            status: status.toUpperCase(),
            // newDate: '...', // Додайте, якщо потрібно для postponed
            // note: '...',    // Додайте, якщо потрібно
        }

        try {
            const res = await fetch(
                `${API_URL}/api/schedule/${selectedEvent.originalId}/exception`,
                {
                    method: 'PATCH', // Використовуємо PATCH
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(exceptionPayload),
                }
            )

            if (!res.ok) {
                const errorData = await res.json()
                toast.error(
                    errorData.message || 'Помилка при оновленні статусу заняття'
                )
                return
            }

            setCalendarEvents((prevEvents) =>
                prevEvents.map((event) =>
                    event.id === selectedEvent.id
                        ? {
                              ...event,
                              status: status,
                              exceptionDetails: exceptionPayload,
                          }
                        : event
                )
            )
            setSelectedEvent((prev) =>
                prev
                    ? {
                          ...prev,
                          status: status,
                          exceptionDetails: exceptionPayload,
                      }
                    : null
            )
            toast.success(`Статус заняття змінено на "${status}"`)
            setOpenEventPanel(false)
        } catch (error) {
            console.error(error)
            toast.error('Помилка при оновленні статусу заняття')
        }
    }

    const deleteSchedule = async () => {
        if (!selectedEvent || !selectedEvent.originalId) {
            toast.error('Неможливо видалити: не знайдено ID розкладу.')
            return
        }

        try {
            const res = await fetch(
                `${API_URL}/api/schedule/${selectedEvent.originalId}`,
                {
                    method: 'DELETE',
                }
            )

            if (!res.ok) {
                const errorData = await res.json()
                toast.error(
                    errorData.message || 'Помилка при видаленні розкладу'
                )
                return
            }

            setCalendarEvents((prev) =>
                prev.filter(
                    (event) => event.originalId !== selectedEvent.originalId
                )
            )
            setOpenEventPanel(false)
            toast.success(`Розклад та всі його заняття видалено`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка при видаленні розкладу')
        }
    }

    const handleEventClick = (event: CalendarEvent) => {
        setSelectedEvent(event)
        setOpenEventPanel(true)
        setIsEditing(false)
    }

    const handleNavigate = (direction: 'NEXT' | 'PREV') => {
        const newDate =
            direction === 'NEXT'
                ? moment(date).add(1, 'week').toDate()
                : moment(date).subtract(1, 'week').toDate()
        setDate(newDate)
    }

    const formattedRange = `${moment(date).format('D MMM')} – ${moment(date)
        .clone()
        .add(6, 'days')
        .format('D MMM')}`

    const weekDays = Array.from({ length: 7 }, (_, i) =>
        moment().startOf('week').add(i, 'days').format('ddd')
    )

    const durationOptions = [
        { value: 30, label: '30 хвилин' },
        { value: 45, label: '45 хвилин' },
        { value: 60, label: '1 година' },
        { value: 90, label: '1.5 години' },
        { value: 120, label: '2 години' },
    ]

    const repeatOptions = [
        { value: 1, label: '1 тиждень' },
        { value: 2, label: '2 тижні' },
        { value: 4, label: '1 місяць' },
        { value: 8, label: '2 місяці' },
        { value: 12, label: '3 місяці' },
        { value: 24, label: '6 місяців' },
        { value: 52, label: '1 рік' },
    ]

    const eventStyleGetter = (event: CalendarEvent) => {
        const statusClassName = getEventColorClassName(event.status) // Отримуємо назву класу на основі статусу
        return {
            className: `rbc-event ${statusClassName}`,
            style: {
                borderRadius: '4px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block',
            },
        }
    }

    return (
        <div className="relative">
            <div className="flex items-center gap-2 absolute top-4">
                <button
                    onClick={() => handleNavigate('PREV')}
                    className="bg-gray-100 hover:bg-gray-200 text-sm px-2 py-1 rounded"
                >
                    <ArrowLeft size={16} />
                </button>
                <span className="font-semibold text-base">
                    {formattedRange}
                </span>
                <button
                    onClick={() => handleNavigate('NEXT')}
                    className="bg-gray-100 hover:bg-gray-200 text-sm px-2 py-1 rounded"
                >
                    <ArrowRight size={16} />
                </button>
            </div>

            <button
                className="absolute top-2 right-40 bg-[#c1b6d6] text-white px-4 py-2 rounded hover:bg-[#a895c9] transition"
                onClick={() => setOpenModal(true)}
            >
                Додати заняття
            </button>

            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={['week', 'day']}
                view={view}
                date={date}
                onNavigate={setDate}
                onSelectEvent={handleEventClick}
                onView={setView}
                style={{ height: 'calc(100vh - 160px)' }}
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 22, 0, 0)}
                eventPropGetter={eventStyleGetter}
            />
            {openModal && (
                <div
                    className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4"
                    onClick={() => setOpenModal(false)}
                >
                    <Toaster position="bottom-center" />
                    <div
                        className="bg-[#F0F4F8] w-full max-w-xl p-6 rounded-2xl flex flex-col gap-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setOpenModal(false)}
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-center">
                            Додати нове заняття
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block mb-2 font-medium">
                                    Назва заняття *
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            title: e.target.value,
                                        })
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                    placeholder="Наприклад: Математика з Іваном"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    День тижня *
                                </label>
                                <div className="grid grid-cols-7 gap-2">
                                    {weekDays.map((day, index) => (
                                        <button
                                            key={index}
                                            className={`py-2 px-1 rounded-lg border transition-colors ${
                                                formData.dayOfWeek === index
                                                    ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                                    : 'bg-white border-gray-300 hover:bg-gray-50'
                                            }`}
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    dayOfWeek: index,
                                                })
                                            }
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Час початку *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            value={formData.startTime}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    startTime: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                            step="300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Тривалість *
                                    </label>
                                    <select
                                        value={formData.duration}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                duration: parseInt(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                    >
                                        {durationOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Повторювати
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <select
                                            value={formData.repeatCount}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    repeatCount: parseInt(
                                                        e.target.value
                                                    ),
                                                    repeatIndefinitely: false,
                                                })
                                            }
                                            disabled={
                                                formData.repeatIndefinitely
                                            }
                                            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent ${
                                                formData.repeatIndefinitely
                                                    ? 'opacity-50'
                                                    : ''
                                            }`}
                                        >
                                            {repeatOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    repeatIndefinitely:
                                                        !formData.repeatIndefinitely,
                                                })
                                            }
                                            className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${
                                                formData.repeatIndefinitely
                                                    ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                                    : 'bg-white border-gray-300'
                                            }`}
                                        >
                                            <InfinityIcon size={18} />
                                            <span>Без обмежень</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                onClick={() => setOpenModal(false)}
                            >
                                Скасувати
                            </button>
                            <button
                                className="px-6 py-3 text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition"
                                onClick={createEvent}
                            >
                                Додати заняття
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {openEventPanel && selectedEvent && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-end px-4">
                    <div
                        className="bg-white w-full max-w-md h-full p-6 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">
                                Деталі заняття
                            </h2>
                            <button
                                onClick={() => {
                                    setOpenEventPanel(false)
                                    setIsEditing(false)
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div
                                className="p-4 rounded-lg"
                                style={{
                                    backgroundColor: getEventColor(
                                        selectedEvent.status
                                    ),
                                    color: 'white',
                                }}
                            >
                                <h3 className="text-xl font-bold">
                                    {selectedEvent.title}
                                </h3>
                                <p className="mt-2">
                                    {moment(selectedEvent.start).format(
                                        'dddd, D MMMM YYYY'
                                    )}
                                </p>
                                <p>
                                    {moment(selectedEvent.start).format(
                                        'HH:mm'
                                    )}{' '}
                                    -{' '}
                                    {moment(selectedEvent.end).format('HH:mm')}
                                </p>
                                {selectedEvent.exceptionDetails && (
                                    <p className="mt-2 text-sm italic">
                                        Статус:{' '}
                                        {selectedEvent.status === 'completed'
                                            ? 'Проведене'
                                            : selectedEvent.status ===
                                              'postponed'
                                            ? 'Перенесене'
                                            : selectedEvent.status ===
                                              'canceled'
                                            ? 'Скасоване'
                                            : ''}
                                        {selectedEvent.exceptionDetails.note &&
                                            ` (${selectedEvent.exceptionDetails.note})`}
                                        {selectedEvent.exceptionDetails
                                            .newDate &&
                                            ` -> ${moment(
                                                selectedEvent.exceptionDetails
                                                    .newDate
                                            ).format('D MMM HH:mm')}`}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold">
                                    Змінити статус заняття:
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() =>
                                            updateEventStatus('completed')
                                        }
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                                            selectedEvent.status === 'completed'
                                                ? 'bg-green-100 border-green-500 text-green-700'
                                                : 'bg-white border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Check size={18} />
                                        <span>Проведене</span>
                                    </button>
                                    <button
                                        onClick={() =>
                                            updateEventStatus('postponed')
                                        }
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                                            selectedEvent.status === 'postponed'
                                                ? 'bg-yellow-100 border-yellow-500 text-yellow-700'
                                                : 'bg-white border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Move size={18} />
                                        <span>Перенесене</span>
                                    </button>
                                    <button
                                        onClick={() =>
                                            updateEventStatus('canceled')
                                        }
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                                            selectedEvent.status === 'canceled'
                                                ? 'bg-red-100 border-red-500 text-red-700'
                                                : 'bg-white border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <X size={18} />
                                        <span>Скасоване</span>
                                    </button>
                                    <button
                                        onClick={() =>
                                            updateEventStatus('default')
                                        }
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                                            selectedEvent.status === 'default'
                                                ? 'bg-purple-100 border-purple-500 text-purple-700'
                                                : 'bg-white border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Undo size={18} />
                                        <span>Заплановане</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pt-6 border-t border-gray-200">
                            <button
                                onClick={() =>
                                    handleEditSchedule(selectedEvent.originalId)
                                }
                                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition mr-2"
                            >
                                <Edit size={18} />
                                <span>Редагувати розклад</span>
                            </button>
                            <button
                                onClick={deleteSchedule}
                                className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                            >
                                <Trash2 size={18} />
                                <span>Видалити розклад</span>
                            </button>
                        </div>
                        {openEditModal && editingSchedule && (
                            <div
                                className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4"
                                onClick={() => setOpenEditModal(false)}
                            >
                                <div
                                    className="bg-[#F0F4F8] w-full max-w-xl p-6 rounded-2xl flex flex-col gap-6 relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                        onClick={() => setOpenEditModal(false)}
                                    >
                                        <X size={24} />
                                    </button>
                                    <h2 className="text-2xl font-bold text-center">
                                        Редагувати розклад
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block mb-2 font-medium">
                                                Назва заняття *
                                            </label>
                                            <input
                                                type="text"
                                                value={editingSchedule.title}
                                                onChange={(e) =>
                                                    setEditingSchedule({
                                                        ...editingSchedule,
                                                        title: e.target.value,
                                                    })
                                                }
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 font-medium">
                                                День тижня *
                                            </label>
                                            <div className="grid grid-cols-7 gap-2">
                                                {weekDays.map((day, index) => (
                                                    <button
                                                        key={index}
                                                        className={`py-2 px-1 rounded-lg border transition-colors ${
                                                            editingSchedule.dayOfWeek ===
                                                            index
                                                                ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                                                : 'bg-white border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                        onClick={() =>
                                                            setEditingSchedule({
                                                                ...editingSchedule,
                                                                dayOfWeek:
                                                                    index,
                                                            })
                                                        }
                                                    >
                                                        {day}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block mb-2 font-medium">
                                                    Час початку *
                                                </label>
                                                <input
                                                    type="time"
                                                    value={
                                                        editingSchedule.startTime
                                                    }
                                                    onChange={(e) =>
                                                        setEditingSchedule({
                                                            ...editingSchedule,
                                                            startTime:
                                                                e.target.value,
                                                        })
                                                    }
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                                    step="300"
                                                />
                                            </div>

                                            <div>
                                                <label className="block mb-2 font-medium">
                                                    Тривалість *
                                                </label>
                                                <select
                                                    value={
                                                        editingSchedule.duration
                                                    }
                                                    onChange={(e) =>
                                                        setEditingSchedule({
                                                            ...editingSchedule,
                                                            duration: parseInt(
                                                                e.target.value
                                                            ),
                                                        })
                                                    }
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                                >
                                                    {durationOptions.map(
                                                        (option) => (
                                                            <option
                                                                key={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                            >
                                                                {option.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block mb-2 font-medium">
                                                Повторювати
                                            </label>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1">
                                                    <select
                                                        value={
                                                            editingSchedule.repeatCount
                                                        }
                                                        onChange={(e) =>
                                                            setEditingSchedule({
                                                                ...editingSchedule,
                                                                repeatCount:
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    ),
                                                                repeatIndefinitely:
                                                                    false,
                                                            })
                                                        }
                                                        disabled={
                                                            editingSchedule.repeatIndefinitely
                                                        }
                                                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent ${
                                                            editingSchedule.repeatIndefinitely
                                                                ? 'opacity-50'
                                                                : ''
                                                        }`}
                                                    >
                                                        {repeatOptions.map(
                                                            (option) => (
                                                                <option
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    value={
                                                                        option.value
                                                                    }
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setEditingSchedule({
                                                                ...editingSchedule,
                                                                repeatIndefinitely:
                                                                    !editingSchedule.repeatIndefinitely,
                                                            })
                                                        }
                                                        className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${
                                                            editingSchedule.repeatIndefinitely
                                                                ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                                                : 'bg-white border-gray-300'
                                                        }`}
                                                    >
                                                        <InfinityIcon
                                                            size={18}
                                                        />
                                                        <span>
                                                            Без обмежень
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button
                                            className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                            onClick={() =>
                                                setOpenEditModal(false)
                                            }
                                        >
                                            Скасувати
                                        </button>
                                        <button
                                            className="px-6 py-3 text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition"
                                            onClick={updateSchedule}
                                        >
                                            Оновити розклад
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BigCalendar
