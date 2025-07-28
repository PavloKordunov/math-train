'use client'

import Image from 'next/image'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosRocket } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaCalculator } from 'react-icons/fa'
import { useCallback, useEffect, useState } from 'react'
import { useUser } from '@/hooks/useUser'
import Select from 'react-select'
import { X } from 'lucide-react'
import { title } from 'process'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        backgroundColor: '#2563EB',
    },
}))

const GroupCard = ({ group, setGroups, students }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [tests, setTests] = useState<any[]>([])
    const [groupPerformance, setGroupPerformance] = useState<any>()
    const [activeTests, setActiveTests] = useState<any>()
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState<any>(null)
    const [endTime, setEndTime] = useState<any>(null)
    const [formData, setFormData] = useState({
        title: group.title,
    })
    const [selectedStudents, setSelectedStudents] = useState<any>([])

    useEffect(() => {
        const initialStudents = group.students.map((student: any) => ({
            value: student.id,
            label: student.name,
        }))
        setSelectedStudents(initialStudents)
    }, [group.students])

    const calculateGroupProgress = (studentScores: any[]) => {
        if (!studentScores || studentScores.length === 0) return 0

        const totalPercentage = studentScores.reduce((sum, scoreEntry) => {
            if (scoreEntry.maxScore === 0) return sum
            const percentage = (scoreEntry.score / scoreEntry.maxScore) * 100
            return sum + percentage
        }, 0)

        const averagePercentage = totalPercentage / studentScores.length

        return Math.round(averagePercentage)
    }

    const progress = calculateGroupProgress(groupPerformance)

    const assignTest = async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/test/${selectedTest}/group/assign`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        testId: selectedTest,
                        students: group.students,
                        endTime: endTime,
                    }),
                }
            )
            const data = await res.json()
            console.log(data)
            setIsAssignModalOpen(false)
            toast.success(`Тест призначено для групи: ${group.title}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

    useEffect(() => {
        const getAllGroupData = async () => {
            try {
                const [testsRes, groupsRes] = await Promise.all([
                    fetch(`${API_URL}/api/test/teacher/${user?.id}`),
                    fetch(`${API_URL}/api/group/card/${group.id}`),
                ])

                if (!testsRes.ok || !groupsRes.ok) {
                    throw new Error('Failed to fetch data')
                }

                const [testsData, groupsData] = await Promise.all([
                    testsRes.json(),
                    groupsRes.json(),
                ])

                console.log(groupsData)

                setActiveTests(groupsData.assignedTest.data)
                setGroupPerformance(groupsData.groupPerfomence.data)
                setTests(testsData.data)
            } catch (error) {
                console.error('Error loading group data:', error)
            }
        }

        getAllGroupData()
    }, [])

    const handleUpdate = async () => {
        const groupData = {
            title: formData.title,
            teacherId: user?.id,
            students: selectedStudents.map((s: any) => s.value),
        }

        try {
            const res = await fetch(`${API_URL}/api/group/${group.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: groupData.title,
                    students: groupData.students,
                }),
            })

            if (!res.ok) {
                setIsUpdateModalOpen(false)
                toast.error('Помилка: тест не оновлено')
                return
            }

            const data = await res.json()
            setGroups((prev: any) =>
                prev.map((st: any) =>
                    st.id === group.id
                        ? { ...st, title: data.title, students: data.students }
                        : st
                )
            )
            setIsUpdateModalOpen(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await fetch(`${API_URL}/api/group/${group.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await res.json()
            setGroups((prev: any) =>
                prev.filter((st: any) => st.id !== group.id)
            )
            setIsDeleteModalOpen(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const formatDateForInput = useCallback((isoString: string) => {
        if (!isoString) return ''
        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''
        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }, [])

    function formatDateToUkrainian(dateString: string): string {
        const date = new Date(dateString)
        const day = date.getDate()
        const monthIndex = date.getMonth()
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')

        const monthsGenitive = [
            'січня',
            'лютого',
            'березня',
            'квітня',
            'травня',
            'червня',
            'липня',
            'серпня',
            'вересня',
            'жовтня',
            'листопада',
            'грудня',
        ]

        return `${day} ${monthsGenitive[monthIndex]} ${hours}:${minutes}`
    }

    return (
        <>
            <Toaster position="bottom-center" />
            <Link
                href={``}
                className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center space-y-4"
            >
                <div className="w-fit h-fit p-5 rounded-full bg-cyan-500">
                    <FaCalculator size={56} color="white" />
                </div>

                <div className="text-center w-full">
                    <h2 className="font-bold text-2xl text-gray-800">
                        Група: {group.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {group.students.length} учнів
                    </p>

                    {/* <div className="flex items-center justify-center mt-2 gap-2">
                        <span
                            className={clsx(
                                'w-3 h-3 rounded-full',
                                isOnline ? 'bg-green-500' : 'bg-orange-400'
                            )}
                        />
                        <p className="text-sm font-medium text-gray-600">
                            {isOnline
                                ? 'Активний'
                                : `Останній вхід: ${
                                      lastActivity
                                          ? formatDateToUkrainian(lastActivity)
                                          : ''
                                  }`}
                        </p>
                    </div> */}
                </div>

                <div className="w-full bg-[#F8F8FF] rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                        <p>Прогрес</p>
                        <p>{progress}%</p>
                    </div>
                    <BorderLinearProgress
                        variant="determinate"
                        value={progress}
                    />

                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                        <li>✅ {groupPerformance?.length} Пройдених тести</li>
                        <li>📚 {activeTests?.length} Активні</li>
                    </ul>

                    <div className="flex items-center mt-3 text-sm text-gray-600">
                        <IoCalendarOutline size={18} className="mr-2" />
                        <p>
                            Останній тест:{' '}
                            {Array.isArray(groupPerformance) &&
                            activeTests.length > 0
                                ? activeTests[activeTests.length - 1].test.title
                                : 'Немає тестів'}
                            ,{' '}
                            <span className="text-gray-500">
                                {Array.isArray(activeTests) &&
                                activeTests.length > 0
                                    ? formatDateToUkrainian(
                                          activeTests[activeTests.length - 1]
                                              .assignedAt
                                      )
                                    : ''}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsAssignModalOpen(true)
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
                    >
                        <IoIosRocket size={18} /> Призначити тест
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsUpdateModalOpen(true)
                        }}
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-xl transition-all"
                    >
                        <MdEdit size={18} /> Редагувати
                    </button>
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault()
                        setIsDeleteModalOpen(true)
                    }}
                    className="mt-3 w-full flex items-center justify-center gap-2 border border-red-300 hover:bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-xl transition-all"
                >
                    <MdDelete size={18} /> Видалити
                </button>
            </Link>

            {isAssignModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4">
                    <div className="bg-[#F0F4F8] w-full max-w-xl p-6 rounded-2xl flex items-center gap-3 relative">
                        <div className="flex justify-center md:w-1/3">
                            <div className="w-fit h-fit p-8 rounded-full bg-cyan-500">
                                <FaCalculator size={100} color="white" />
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {group.title}
                            </h2>
                            <div className="mt-4">
                                <Select
                                    options={tests.map((t: any) => ({
                                        value: t.id,
                                        label: t.title,
                                    }))}
                                    onChange={(selected: any) =>
                                        setSelectedTest(selected?.value)
                                    }
                                    isSearchable
                                    placeholder="Виберіть тест..."
                                    noOptionsMessage={() =>
                                        'Тестів не знайдено'
                                    }
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    components={{
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
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mt-2">
                                    Крайній термін проходження
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formatDateForInput(endTime)}
                                    onChange={(e) => {
                                        const isoDate = new Date(
                                            e.target.value
                                        ).toISOString()
                                        setEndTime(isoDate)
                                    }}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    onClick={() => setIsAssignModalOpen(false)}
                                    className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px]  transition"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={assignTest}
                                    className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md  transition"
                                >
                                    Назначити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 z-10000">
                        <div>
                            <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                                Оновити Групу
                            </h1>
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
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
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
                                noOptionsMessage={() => 'Студентів не знайдено'}
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
                                    {selectedStudents.map((student: any) => (
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
                                    ))}
                                </div>
                            )}
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={() => setIsUpdateModalOpen(false)}
                                    className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px]  transition"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={handleUpdate}
                                    className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md  transition"
                                >
                                    Оновити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Ви впенені що хочете видалити групу
                        </h1>
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupCard
