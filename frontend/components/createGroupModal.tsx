'use client'

import { useUser } from '@/hooks/useUser'
import Select from 'react-select'
import { X, Plus } from 'lucide-react'
import moment from 'moment'
import { useState } from 'react'

const CreateGroupModal = ({ toggleModal, students, setGroups }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [formData, setFormData] = useState({
        title: '',
        newSchedule: {
            dayOfWeek: 0,
            startTime: '10:00',
            duration: 60,
        },
    })
    const [selectedStudents, setSelectedStudents] = useState<any>([])
    const [schedules, setSchedules] = useState<any[]>([])

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

    const addSchedule = () => {
        if (!formData.newSchedule.startTime) return

        setSchedules([
            ...schedules,
            {
                ...formData.newSchedule,
                id: Date.now(),
            },
        ])
        setFormData({
            ...formData,
            newSchedule: {
                dayOfWeek: 0,
                startTime: '10:00',
                duration: 60,
            },
        })
    }

    const removeSchedule = (id: number) => {
        setSchedules(schedules.filter((s) => s.id !== id))
    }

    const createGroup = async () => {
        if (!user?.id || !formData.title) return

        const groupData = {
            title: formData.title,
            teacherId: user.id,
            students: selectedStudents.map((s: any) => s.value),
            // schedules: schedules.map((s) => ({
            //     dayOfWeek: s.dayOfWeek,
            //     startTime: s.startTime,
            //     duration: s.duration,
            // })),
        }

        try {
            const res = await fetch(`${API_URL}/api/group`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(groupData),
            })

            if (res.ok) {
                toggleModal()
            }

            const data = await res.json
            console.log(data)

            setGroups((prev: any) => [...prev, data])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4"
            onClick={toggleModal}
        >
            <div
                className="bg-white w-full max-w-xl p-6 rounded-2xl flex flex-col gap-6 relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={toggleModal}
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-gray-800">
                    Створіть групу
                </h2>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">
                            Основні дані
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Назва групи{' '}
                                    <span className="text-red-500">*</span>
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
                                    placeholder="Наприклад: Математика-НМТ"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Додайте учнів
                                </label>
                                <Select
                                    isMulti
                                    options={students?.map((s: any) => ({
                                        value: s.id,
                                        label: s.name,
                                    }))}
                                    value={selectedStudents}
                                    onChange={setSelectedStudents}
                                    isSearchable
                                    placeholder="Пошук студента..."
                                    noOptionsMessage={() =>
                                        'Студентів не знайдено'
                                    }
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    hideSelectedOptions={true}
                                    controlShouldRenderValue={false}
                                    components={{
                                        MultiValueContainer: () => null,
                                        ClearIndicator: undefined,
                                        Option: ({
                                            innerRef,
                                            innerProps,
                                            data,
                                            isFocused,
                                        }: any) => (
                                            <div
                                                ref={innerRef}
                                                {...innerProps}
                                                className={`p-3 ${
                                                    isFocused
                                                        ? 'bg-[#FFECE7]'
                                                        : 'bg-white'
                                                } hover:bg-[#FFECE7] cursor-pointer`}
                                            >
                                                <p className="font-medium">
                                                    {data.label}
                                                </p>
                                            </div>
                                        ),
                                    }}
                                    styles={{
                                        control: (base: any) => ({
                                            ...base,
                                            borderColor: '#CDC8C8',
                                            borderRadius: '0.5rem',
                                            padding: '0.25rem',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                borderColor: '#9CA3AF',
                                            },
                                        }),
                                        menu: (base: any) => ({
                                            ...base,
                                            border: '1px solid #CDC8C8',
                                            borderRadius: '0.5rem',
                                            boxShadow:
                                                '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        }),
                                        option: (
                                            base: any,
                                            { isFocused }: any
                                        ) => ({
                                            ...base,
                                            backgroundColor: isFocused
                                                ? '#FFECE7'
                                                : 'white',
                                            color: '#1F2937',
                                        }),
                                    }}
                                />
                                {selectedStudents.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {selectedStudents.map(
                                            (student: any) => (
                                                <div
                                                    key={student.value}
                                                    className="flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-sm"
                                                >
                                                    <span>{student.label}</span>
                                                    <button
                                                        onClick={() =>
                                                            setSelectedStudents(
                                                                selectedStudents.filter(
                                                                    (s: any) =>
                                                                        s.value !==
                                                                        student.value
                                                                )
                                                            )
                                                        }
                                                        className="text-gray-400 hover:text-red-500 ml-1"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">
                            Розклад занять
                        </h3>

                        {schedules.length > 0 && (
                            <div className="mb-4 space-y-2">
                                {schedules.map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
                                    >
                                        <div>
                                            <span className="font-medium">
                                                {weekDays[schedule.dayOfWeek]}
                                            </span>
                                            <span className="mx-2 text-gray-400">
                                                |
                                            </span>
                                            <span>{schedule.startTime}</span>
                                            <span className="mx-2 text-gray-400">
                                                |
                                            </span>
                                            <span>
                                                {
                                                    durationOptions.find(
                                                        (d) =>
                                                            d.value ===
                                                            schedule.duration
                                                    )?.label
                                                }
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                removeSchedule(schedule.id)
                                            }
                                            className="text-gray-400 hover:text-red-500"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200">
                            <div className="grid grid-cols-7 gap-1.5">
                                {weekDays.map((day, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`py-2 text-sm rounded-lg border transition-colors ${
                                            formData.newSchedule.dayOfWeek ===
                                            index
                                                ? 'bg-[#c1b6d6] text-white border-[#c1b6d6]'
                                                : 'bg-white border-gray-300 hover:bg-gray-100'
                                        }`}
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                newSchedule: {
                                                    ...formData.newSchedule,
                                                    dayOfWeek: index,
                                                },
                                            })
                                        }
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Час початку
                                    </label>
                                    <input
                                        type="time"
                                        value={formData.newSchedule.startTime}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                newSchedule: {
                                                    ...formData.newSchedule,
                                                    startTime: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                        step="300"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Тривалість
                                    </label>
                                    <select
                                        value={formData.newSchedule.duration}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                newSchedule: {
                                                    ...formData.newSchedule,
                                                    duration: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        }
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
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

                            <button
                                onClick={addSchedule}
                                className="flex items-center justify-center gap-2 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                            >
                                <Plus size={16} />
                                Додати розклад
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        className="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                        onClick={toggleModal}
                    >
                        Скасувати
                    </button>
                    <button
                        className="px-5 py-2.5 text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition"
                        onClick={createGroup}
                    >
                        Створити групу
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateGroupModal
