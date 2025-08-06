'use client'

import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import { use, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Select from 'react-select'

const StudentActions = ({ studentPromise, studentId }: any) => {
    const student: any = use(studentPromise)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tests, setTests] = useState<any[]>([])
    const { user } = useUser()

    const [selectedTest, setSelectedTest] = useState<any>(null)
    const [endTime, setEndTime] = useState<any>(null)

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
            setIsModalOpen(false)
            toast.success(`Тест призначено для ${student.name}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

    useEffect(() => {
        const getAllTest = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/teacher/${user?.id}`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()
                setTests(data.data)
            } catch (error) {
                console.error('Error fetching tests:', error)
                return []
            }
        }
        getAllTest()
    }, [])

    const changeStudentAccess = async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/student/access/${studentId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            const data = await res.json()
            console.log(data)
            toast.success('Успішно! доступ студента було змінено')
        } catch (error) {
            console.log(error)
            toast.error('Сталась помилка доступ студента не було змінено')
        }
    }

    const formatDateForInput = useCallback((isoString: string) => {
        if (!isoString) return ''
        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''
        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }, [])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            {user?.status === 'Teacher' && (
                <>
                    <div className="flex items-center gap-6 mb-4">
                        <button
                            className="border border-gray-400 text-[14px] sm:text-[18px] text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase"
                            onClick={changeStudentAccess}
                        >
                            {' '}
                            {student?.viewAccess
                                ? 'Забрати повний доступ'
                                : 'Надати повний доступ'}
                        </button>
                        <button
                            className="bg-rose-600 text-[14px] sm:text-[18px] text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase"
                            onClick={toggleModal}
                        >
                            Назначити тест
                        </button>
                    </div>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4 py-4 overflow-y-auto">
                            <div className="bg-[#F0F4F8] w-full max-w-xl p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 relative max-h-[90vh] overflow-y-auto">
                                <div className="flex justify-center items-center md:w-1/3">
                                    <Image
                                        src="/person.png"
                                        alt="student"
                                        width={160}
                                        height={100}
                                        className="object-contain w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white shadow-md"
                                    />
                                </div>

                                <div className="w-full md:w-2/3 space-y-4">
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
                                        {student.name}
                                    </h2>

                                    <div className="space-y-4">
                                        <div>
                                            <Select
                                                options={tests.map(
                                                    (t: any) => ({
                                                        value: t.id,
                                                        label: t.title,
                                                    })
                                                )}
                                                onChange={(selected) =>
                                                    setSelectedTest(
                                                        selected?.value
                                                    )
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
                                                            className={`p-2 md:p-3 ${
                                                                isFocused
                                                                    ? 'bg-[#FFECE7]'
                                                                    : 'bg-white'
                                                            } hover:bg-[#FFECE7] cursor-pointer`}
                                                        >
                                                            <p className="font-medium text-sm md:text-base">
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
                                                        minHeight: '44px',
                                                        '&:hover': {
                                                            borderColor:
                                                                '#9CA3AF',
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
                                                        backgroundColor:
                                                            isFocused
                                                                ? '#FFECE7'
                                                                : 'white',
                                                        color: '#1F2937',
                                                        fontSize: '0.875rem',
                                                    }),
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-gray-700 font-medium text-sm md:text-base">
                                                Крайній термін проходження
                                            </label>
                                            <input
                                                type="datetime-local"
                                                value={formatDateForInput(
                                                    endTime
                                                )}
                                                onChange={(e) => {
                                                    const isoDate = new Date(
                                                        e.target.value
                                                    ).toISOString()
                                                    setEndTime(isoDate)
                                                }}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm md:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col-reverse md:flex-row justify-end gap-3 md:gap-4 pt-2">
                                        <button
                                            onClick={() =>
                                                setIsModalOpen(false)
                                            }
                                            className="px-4 py-2 md:px-6 md:py-3 rounded-xl border border-gray-300 text-black font-semibold text-sm md:text-base transition hover:bg-gray-100"
                                        >
                                            Скасувати
                                        </button>
                                        <button
                                            onClick={assignTest}
                                            className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-red-500 text-white font-semibold text-sm md:text-base shadow-md transition hover:bg-red-600"
                                        >
                                            Призначити
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default StudentActions
