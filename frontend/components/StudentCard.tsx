'use client'

import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosRocket } from 'react-icons/io'
import { MdEdit, MdDelete } from 'react-icons/md'
import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast'
import { useUser } from '@/hooks/useUser'

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

const StudentCard = ({ student, setStudents }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const isActive = false
    const { user } = useUser()
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false)
    const [studentData, setStudentData] = useState<any>({
        name: student.name,
        email: student.email,
    })
    const [selectedTest, setSelectedTest] = useState<any>(null)
    const [endTime, setEndTime] = useState<any>(null)
    const [tests, setTests] = useState<any[]>([])
    const [studentPerformance, setStudentPerformance] = useState<any>()
    const [activeTests, setActiveTests] = useState<any>()

    const assignTest = async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/test/${selectedTest}/assign`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        testId: selectedTest,
                        studentId: student.id,
                        endTime: endTime,
                    }),
                }
            )
            const data = await res.json()
            console.log(data)
            setIsAssignModalOpen(false)
            toast.success(`Тест призначено для ${student.name}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }
    const [isOnline, setIsOnline] = useState()
    const [lastActivity, setLastActivity] = useState('')

    useEffect(() => {
        const getTests = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/teacher/${user?.id}`
                )
                const data = await res.json()
                setTests(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getUserOnline = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/student/${student.id}/status`
                )
                const data = await res.json()
                console.log('ONLINE: ', data)
                setIsOnline(data.isOnline)
                setLastActivity(data.lastActivity)
            } catch (error) {
                console.log(error)
            }
        }

        const getAllStudentPerfomenceById = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/perfomence/one/student/${student.id}`
                )
                const data = await res.json()

                console.log(data)
                setStudentPerformance(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getAssignedTests = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/assign/student/${student.id}`
                )

                const data = await res.json()
                setActiveTests(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudentPerfomenceById()
        getUserOnline()
        getAssignedTests()
        getTests()
    }, [])

    const formatDateForInput = useCallback((isoString: string) => {
        if (!isoString) return ''
        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''
        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }, [])

    const handleUpdate = async () => {
        try {
            const res = await fetch(`${API_URL}/api/student/${student.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: studentData.email,
                    name: studentData.name,
                }),
            })

            const data = await res.json()
            setStudents((prev: any) =>
                prev.map((st: any) =>
                    st.id === student.id
                        ? { ...st, name: data.name, email: data.email }
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
            const res = await fetch(`${API_URL}/api/student/${student.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await res.json()
            setStudents((prev: any) =>
                prev.filter((st: any) => st.id !== student.id)
            )
            setIsDeleteModalOpen(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

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

    const calculateProgress = (performance: any[]) => {
        if (!performance || performance.length === 0) return 0

        const totalPercentage = performance.reduce((sum, test) => {
            if (test.maxScore === 0) return sum
            const percentage = (test.score / test.maxScore) * 100
            return sum + percentage
        }, 0)

        const averagePercentage = totalPercentage / performance.length

        return Math.round(averagePercentage)
    }

    const progress = calculateProgress(studentPerformance)

    return (
        <>
            <Toaster position="bottom-center" />
            <Link
                href={`/student/${student.id}`}
                className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center space-y-4"
            >
                <Image
                    src="/person.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                />

                <div className="text-center w-full">
                    <h2 className="font-bold text-2xl text-gray-800">
                        {student.name}
                    </h2>
                    <p className="text-sm text-gray-500">{student.email}</p>

                    <div className="flex items-center justify-center mt-2 gap-2">
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
                    </div>
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
                        <li>✅ {studentPerformance?.length} Пройдених тести</li>
                        <li>📚 {activeTests?.length} Активні</li>
                    </ul>

                    <div className="flex items-center mt-3 text-sm text-gray-600">
                        <IoCalendarOutline size={18} className="mr-2" />
                        <p>
                            Останній тест:{' '}
                            {Array.isArray(studentPerformance) &&
                            studentPerformance.length > 0
                                ? studentPerformance[
                                      studentPerformance.length - 1
                                  ].testName
                                : 'Немає тестів'}
                            ,{' '}
                            <span className="text-gray-500">
                                {Array.isArray(studentPerformance) &&
                                studentPerformance.length > 0
                                    ? formatDateToUkrainian(
                                          studentPerformance[
                                              studentPerformance.length - 1
                                          ].createdAt
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
                            <Image
                                src="/person.png"
                                alt="student"
                                width={160}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {student.name}
                            </h2>
                            <div className="mt-4">
                                <Select
                                    options={tests.map((t: any) => ({
                                        value: t.id,
                                        label: t.title,
                                    }))}
                                    onChange={(selected) =>
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
                    <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10000">
                        <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                            Оновити Учня
                        </h1>

                        <div className="space-y-6">
                            <div className="text-left">
                                <label className="text-sm text-[#000] font-medium mb-1 block">
                                    🧑‍💼 Ім'я
                                </label>
                                <input
                                    type="text"
                                    value={studentData.name}
                                    onChange={(e) =>
                                        setStudentData((prev: any) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                                    placeholder="Введіть ім'я учня"
                                />
                            </div>
                            <div className="text-left">
                                <label className="text-sm text-[#000] font-medium mb-1 block">
                                    {' '}
                                    📧 E-mail
                                </label>
                                <input
                                    type="email"
                                    value={studentData.email}
                                    onChange={(e) =>
                                        setStudentData((prev: any) => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                    className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="flex justify-end gap-4">
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
                            Ви впенені що хочете видалити учня
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

export default StudentCard
