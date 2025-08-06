'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/uk'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState, useEffect, useCallback, useMemo } from 'react'
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

const BigCalendar = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [view, setView] = useState<View>(Views.WEEK)
    const [date, setDate] = useState(moment().startOf('week').toDate())
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
        null
    )

    // Modal states
    const [openModal, setOpenModal] = useState(false)
    const [openEventPanel, setOpenEventPanel] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)

    // Form states
    const [formData, setFormData] = useState({
        title: '',
        dayOfWeek: 0,
        startTime: '10:00',
        duration: 60,
        repeatCount: 4,
        repeatIndefinitely: false,
    })
    const [editingSchedule, setEditingSchedule] = useState<any>(null)

    // Memoized constants
    const formattedRange = useMemo(
        () =>
            `${moment(date).format('D MMM')} – ${moment(date)
                .add(6, 'days')
                .format('D MMM')}`,
        [date]
    )

    const weekDays = useMemo(
        () =>
            Array.from({ length: 7 }, (_, i) =>
                moment().startOf('week').add(i, 'days').format('ddd')
            ),
        []
    )

    const durationOptions = useMemo(
        () => [
            { value: 30, label: '30 хвилин' },
            { value: 45, label: '45 хвилин' },
            { value: 60, label: '1 година' },
            { value: 90, label: '1.5 години' },
            { value: 120, label: '2 години' },
        ],
        []
    )

    const repeatOptions = useMemo(
        () => [
            { value: 1, label: '1 тиждень' },
            { value: 2, label: '2 тижні' },
            { value: 4, label: '1 місяць' },
            { value: 8, label: '2 місяці' },
            { value: 12, label: '3 місяці' },
            { value: 24, label: '6 місяців' },
            { value: 52, label: '1 рік' },
        ],
        []
    )

    // Event generation
    const generateWeeklyEvents = useCallback(
        (scheduleItem: any): CalendarEvent[] => {
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
                    status,
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
        },
        []
    )

    // Data fetching
    useEffect(() => {
        const getSchedule = async () => {
            if (!user?.id) return

            try {
                const res = await fetch(`${API_URL}/api/schedule/${user.id}`)
                if (!res.ok) throw new Error('Failed to fetch schedule data')

                const data = await res.json()
                const events = data.flatMap(generateWeeklyEvents)
                setCalendarEvents(events)
            } catch (error) {
                console.error('Помилка завантаження розкладу:', error)
                toast.error('Помилка завантаження розкладу')
            }
        }

        getSchedule()
    }, [API_URL, user?.id, generateWeeklyEvents])

    // Event handlers
    const handleNavigate = useCallback((direction: 'NEXT' | 'PREV') => {
        setDate((prev) =>
            moment(prev)
                .add(direction === 'NEXT' ? 1 : -1, 'week')
                .toDate()
        )
    }, [])

    const handleEventClick = useCallback((event: CalendarEvent) => {
        setSelectedEvent(event)
        setOpenEventPanel(true)
    }, [])

    // Event styling
    const eventStyleGetter = useCallback((event: CalendarEvent) => {
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

        return {
            style: {
                backgroundColor: getEventColor(event.status),
                borderRadius: '4px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block',
            },
        }
    }, [])

    // API operations
    const createEvent = useCallback(async () => {
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
            setCalendarEvents((prev) => [
                ...prev,
                ...generateWeeklyEvents(newScheduleItem),
            ])
            setOpenModal(false)
            toast.success('Розклад успішно створено!')
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
    }, [API_URL, formData, generateWeeklyEvents, user?.id])

    const updateEventStatus = useCallback(
        async (status: EventStatus) => {
            if (!selectedEvent?.originalId) {
                toast.error('Немає вибраного заняття або ID розкладу.')
                return
            }

            const formattedDate = moment(selectedEvent.start).format(
                'YYYY-MM-DD'
            )
            const exceptionPayload = {
                date: formattedDate,
                status: status.toUpperCase(),
            }

            try {
                const res = await fetch(
                    `${API_URL}/api/schedule/${selectedEvent.originalId}/exception`,
                    {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(exceptionPayload),
                    }
                )

                if (!res.ok) {
                    const errorData = await res.json()
                    toast.error(
                        errorData.message ||
                            'Помилка при оновленні статусу заняття'
                    )
                    return
                }

                setCalendarEvents((prev) =>
                    prev.map((event) =>
                        event.id === selectedEvent.id
                            ? {
                                  ...event,
                                  status,
                                  exceptionDetails: exceptionPayload,
                              }
                            : event
                    )
                )

                setSelectedEvent((prev) =>
                    prev
                        ? {
                              ...prev,
                              status,
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
        },
        [API_URL, selectedEvent]
    )

    const deleteSchedule = useCallback(async () => {
        if (!selectedEvent?.originalId) {
            toast.error('Неможливо видалити: не знайдено ID розкладу.')
            return
        }

        try {
            const res = await fetch(
                `${API_URL}/api/schedule/${selectedEvent.originalId}`,
                { method: 'DELETE' }
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
            toast.success('Розклад та всі його заняття видалено')
        } catch (error) {
            console.error(error)
            toast.error('Помилка при видаленні розкладу')
        }
    }, [API_URL, selectedEvent])

    const handleEditSchedule = useCallback(
        (scheduleId: string) => {
            const schedule = calendarEvents.find(
                (e) => e.originalId === scheduleId
            )
            if (schedule) {
                setEditingSchedule({
                    id: schedule.originalId,
                    title: schedule.title,
                    dayOfWeek: schedule.dayOfWeek,
                    startTime: `${String(schedule.hours).padStart(
                        2,
                        '0'
                    )}:${String(schedule.minutes).padStart(2, '0')}`,
                    duration: schedule.duration,
                    repeatCount: schedule.weeks || 4,
                    repeatIndefinitely: !schedule.weeks,
                })
                setOpenEditModal(true)
            }
        },
        [calendarEvents]
    )

    const updateSchedule = useCallback(async () => {
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

            if (!res.ok) throw new Error('Помилка при оновленні розкладу')

            setCalendarEvents((prev) => {
                const filteredEvents = prev.filter(
                    (e) => e.originalId !== editingSchedule.id
                )

                const newEvents = generateWeeklyEvents({
                    id: editingSchedule.id,
                    ...updateData,
                    teacherId: user?.id,
                    exceptions: prev
                        .filter(
                            (e) =>
                                e.originalId === editingSchedule.id &&
                                e.exceptionDetails
                        )
                        .reduce(
                            (acc, event) => ({
                                ...acc,
                                [moment(event.start).format('YYYY-MM-DD')]:
                                    event.exceptionDetails,
                            }),
                            {}
                        ),
                })

                return [...filteredEvents, ...newEvents]
            })

            setOpenEditModal(false)
            toast.success('Розклад успішно оновлено!')
        } catch (error) {
            console.error(error)
            toast.error('Помилка при оновленні розкладу')
        }
    }, [API_URL, editingSchedule, generateWeeklyEvents, user?.id])

    return (
        <div className="relative h-full">
            <Toaster position="bottom-center" />

            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4 p-2 sm:p-0">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleNavigate('PREV')}
                        className="p-1 sm:p-2 bg-gray-100 hover:bg-gray-200 rounded"
                    >
                        <ArrowLeft
                            size={18}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                    </button>
                    <span className="font-semibold text-sm sm:text-base">
                        {formattedRange}
                    </span>
                    <button
                        onClick={() => handleNavigate('NEXT')}
                        className="p-1 sm:p-2 bg-gray-100 hover:bg-gray-200 rounded"
                    >
                        <ArrowRight
                            size={18}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                    </button>
                </div>

                <button
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c1b6d6] text-white text-xs sm:text-sm rounded hover:bg-[#a895c9] transition"
                    onClick={() => setOpenModal(true)}
                >
                    Додати заняття
                </button>
            </div>

            {/* Main Calendar */}
            <div className="overflow-hidden">
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
                    style={{
                        height: 'calc(100vh - 180px)',
                        minHeight: '500px',
                    }}
                    min={new Date(2025, 1, 0, 8, 0, 0)}
                    max={new Date(2025, 1, 0, 22, 0, 0)}
                    eventPropGetter={eventStyleGetter}
                    messages={{
                        today: 'Сьогодні',
                        previous: 'Назад',
                        next: 'Далі',
                        month: 'Місяць',
                        week: 'Тиждень',
                        day: 'День',
                        agenda: 'Розклад',
                        date: 'Дата',
                        time: 'Час',
                        event: 'Подія',
                        noEventsInRange: 'Немає подій у цьому діапазоні.',
                    }}
                />
            </div>

            {openModal && (
                <Modal onClose={() => setOpenModal(false)}>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        Додати нове заняття
                    </h2>

                    <EventForm
                        formData={formData}
                        setFormData={setFormData}
                        weekDays={weekDays}
                        durationOptions={durationOptions}
                        repeatOptions={repeatOptions}
                    />

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            className="px-4 py-2 text-sm sm:text-base text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            onClick={() => setOpenModal(false)}
                        >
                            Скасувати
                        </button>
                        <button
                            className="px-4 py-2 text-sm sm:text-base text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition"
                            onClick={createEvent}
                        >
                            Додати
                        </button>
                    </div>
                </Modal>
            )}

            {/* Event Details Panel */}
            {openEventPanel && selectedEvent && (
                <SidePanel onClose={() => setOpenEventPanel(false)}>
                    <EventDetails
                        event={selectedEvent}
                        onStatusChange={updateEventStatus}
                        onEdit={() =>
                            handleEditSchedule(selectedEvent.originalId)
                        }
                        onDelete={deleteSchedule}
                    />

                    {openEditModal && editingSchedule && (
                        <Modal onClose={() => setOpenEditModal(false)}>
                            <EditScheduleForm
                                schedule={editingSchedule}
                                setSchedule={setEditingSchedule}
                                weekDays={weekDays}
                                durationOptions={durationOptions}
                                repeatOptions={repeatOptions}
                                onSave={updateSchedule}
                                onCancel={() => setOpenEditModal(false)}
                            />
                        </Modal>
                    )}
                </SidePanel>
            )}
        </div>
    )
}

// Reusable Modal Component
const Modal = ({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) => (
    <div
        className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4"
        onClick={onClose}
    >
        <div
            className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="p-4 sm:p-6">{children}</div>
        </div>
    </div>
)

const SidePanel = ({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) => (
    <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-end">
        <div
            className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="p-4 sm:p-6">{children}</div>
        </div>
    </div>
)
const EventForm = ({
    formData,
    setFormData,
    weekDays,
    durationOptions,
    repeatOptions,
}: {
    formData: any
    setFormData: React.Dispatch<React.SetStateAction<any>>
    weekDays: string[]
    durationOptions: { value: number; label: string }[]
    repeatOptions: { value: number; label: string }[]
}) => (
    <div className="space-y-4">
        <div>
            <label className="block mb-1 text-sm sm:text-base font-medium">
                Назва заняття *
            </label>
            <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6]"
                placeholder="Наприклад: Математика"
            />
        </div>

        <div>
            <label className="block mb-1 text-sm sm:text-base font-medium">
                День тижня *
            </label>
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {weekDays.map((day, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`py-1 sm:py-2 px-1 text-xs sm:text-sm rounded border transition-colors ${
                            formData.dayOfWeek === index
                                ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                : 'bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() =>
                            setFormData({ ...formData, dayOfWeek: index })
                        }
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block mb-1 text-sm sm:text-base font-medium">
                    Час початку *
                </label>
                <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) =>
                        setFormData({ ...formData, startTime: e.target.value })
                    }
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6]"
                    step="300"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm sm:text-base font-medium">
                    Тривалість *
                </label>
                <select
                    value={formData.duration}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            duration: parseInt(e.target.value),
                        })
                    }
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6]"
                >
                    {durationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div>
            <label className="block mb-1 text-sm sm:text-base font-medium">
                Повторювати
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <select
                        value={formData.repeatCount}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                repeatCount: parseInt(e.target.value),
                                repeatIndefinitely: false,
                            })
                        }
                        disabled={formData.repeatIndefinitely}
                        className={`w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] ${
                            formData.repeatIndefinitely ? 'opacity-50' : ''
                        }`}
                    >
                        {repeatOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            repeatIndefinitely: !formData.repeatIndefinitely,
                        })
                    }
                    className={`flex items-center justify-center gap-1 px-3 py-2 sm:py-3 rounded border ${
                        formData.repeatIndefinitely
                            ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                            : 'bg-white border-gray-300'
                    }`}
                >
                    <InfinityIcon size={16} className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">Без обмежень</span>
                </button>
            </div>
        </div>
    </div>
)

// Event Details Component
const EventDetails = ({
    event,
    onStatusChange,
    onEdit,
    onDelete,
}: {
    event: CalendarEvent
    onStatusChange: (status: EventStatus) => void
    onEdit: () => void
    onDelete: () => void
}) => {
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

    return (
        <>
            <div className="mb-6">
                <div
                    className="p-3 sm:p-4 rounded-lg text-white"
                    style={{ backgroundColor: getEventColor(event.status) }}
                >
                    <h3 className="text-lg sm:text-xl font-bold">
                        {event.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                        {moment(event.start).format('dddd, D MMMM YYYY')}
                    </p>
                    <p className="text-sm sm:text-base">
                        {moment(event.start).format('HH:mm')} -{' '}
                        {moment(event.end).format('HH:mm')}
                    </p>
                    {event.exceptionDetails && (
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm italic">
                            Статус:{' '}
                            {
                                {
                                    completed: 'Проведене',
                                    postponed: 'Перенесене',
                                    canceled: 'Скасоване',
                                    default: 'Заплановане',
                                }[event.status]
                            }
                            {event.exceptionDetails.note &&
                                ` (${event.exceptionDetails.note})`}
                            {event.exceptionDetails.newDate &&
                                ` -> ${moment(
                                    event.exceptionDetails.newDate
                                ).format('D MMM HH:mm')}`}
                        </p>
                    )}
                </div>
            </div>

            <div className="mb-6">
                <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                    Змінити статус заняття:
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <StatusButton
                        icon={<Check size={16} />}
                        label="Проведене"
                        active={event.status === 'completed'}
                        onClick={() => onStatusChange('completed')}
                        color="green"
                    />
                    <StatusButton
                        icon={<Move size={16} />}
                        label="Перенесене"
                        active={event.status === 'postponed'}
                        onClick={() => onStatusChange('postponed')}
                        color="yellow"
                    />
                    <StatusButton
                        icon={<X size={16} />}
                        label="Скасоване"
                        active={event.status === 'canceled'}
                        onClick={() => onStatusChange('canceled')}
                        color="red"
                    />
                    <StatusButton
                        icon={<Undo size={16} />}
                        label="Заплановане"
                        active={event.status === 'default'}
                        onClick={() => onStatusChange('default')}
                        color="purple"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-200">
                <button
                    onClick={onEdit}
                    className="flex items-center justify-center gap-1 px-3 py-2 text-sm sm:text-base text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                    <Edit size={16} className="w-4 h-4" />
                    <span>Редагувати</span>
                </button>
                <button
                    onClick={onDelete}
                    className="flex items-center justify-center gap-1 px-3 py-2 text-sm sm:text-base text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                    <Trash2 size={16} className="w-4 h-4" />
                    <span>Видалити</span>
                </button>
            </div>
        </>
    )
}

// Status Button Component
const StatusButton = ({
    icon,
    label,
    active,
    onClick,
    color,
}: {
    icon: React.ReactNode
    label: string
    active: boolean
    onClick: () => void
    color: 'green' | 'yellow' | 'red' | 'purple'
}) => {
    const colors = {
        green: {
            bg: 'bg-green-100',
            border: 'border-green-500',
            text: 'text-green-700',
            hover: 'hover:bg-green-50',
        },
        yellow: {
            bg: 'bg-yellow-100',
            border: 'border-yellow-500',
            text: 'text-yellow-700',
            hover: 'hover:bg-yellow-50',
        },
        red: {
            bg: 'bg-red-100',
            border: 'border-red-500',
            text: 'text-red-700',
            hover: 'hover:bg-red-50',
        },
        purple: {
            bg: 'bg-purple-100',
            border: 'border-purple-500',
            text: 'text-purple-700',
            hover: 'hover:bg-purple-50',
        },
    }

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 rounded-lg border text-xs sm:text-sm ${
                active
                    ? `${colors[color].bg} ${colors[color].border} ${colors[color].text}`
                    : `bg-white border-gray-300 ${colors[color].hover}`
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}

// Edit Schedule Form Component
const EditScheduleForm = ({
    schedule,
    setSchedule,
    weekDays,
    durationOptions,
    repeatOptions,
    onSave,
    onCancel,
}: {
    schedule: any
    setSchedule: React.Dispatch<React.SetStateAction<any>>
    weekDays: string[]
    durationOptions: { value: number; label: string }[]
    repeatOptions: { value: number; label: string }[]
    onSave: () => void
    onCancel: () => void
}) => (
    <>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Редагувати розклад
        </h2>

        <EventForm
            formData={schedule}
            setFormData={setSchedule}
            weekDays={weekDays}
            durationOptions={durationOptions}
            repeatOptions={repeatOptions}
        />

        <div className="flex justify-end gap-3 mt-6">
            <button
                className="px-4 py-2 text-sm sm:text-base text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                onClick={onCancel}
            >
                Скасувати
            </button>
            <button
                className="px-4 py-2 text-sm sm:text-base text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition"
                onClick={onSave}
            >
                Зберегти
            </button>
        </div>
    </>
)

export default BigCalendar
