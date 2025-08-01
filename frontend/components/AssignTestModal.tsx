'use client'

import Select from 'react-select'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const AssignTestModal = ({ test, students, student, toggleModal }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [endTime, setEndTime] = useState<any>(null)
    const [selectedStudent, setSelectedStudent] = useState<any>(null)

    useEffect(() => {
        if (student) {
            setSelectedStudent({
                value: student.id,
                label: student.name,
            })
        }
    }, [student])

    const assignTest = async () => {
        try {
            const studentId = student ? student.id : selectedStudent?.value
            if (!studentId) {
                toast.error('Виберіть студента')
                return
            }

            const res = await fetch(`${API_URL}/api/test/${test.id}/assign`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: test.id,
                    studentId,
                    endTime,
                }),
            })

            if (!res.ok) throw new Error('Помилка сервера')

            toggleModal()
            toast.success(
                `Тест призначено для ${
                    student ? student.name : selectedStudent.label
                }`
            )
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

    const formatDateForInput = useCallback((isoString: string) => {
        if (!isoString) return ''
        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''
        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }, [])

    return (
        <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center px-4">
            <Toaster position="bottom-center" />
            <div className="bg-[#F0F4F8] w-full max-w-xl p-6 rounded-2xl flex items-center gap-3 relative">
                <div className="flex justify-center md:w-1/3">
                    <Image
                        src="/mathItemImg.png"
                        alt="Math"
                        width={160}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {test.title}
                    </h2>

                    <div className="flex gap-4">
                        <p className="text-lg font-medium text-gray-700">
                            Кількість завдань: {test.tasks.length}
                        </p>
                        <p className="text-lg font-medium text-gray-700">
                            Час: {test.timeLimit} хв
                        </p>
                    </div>

                    <div className="mt-4">
                        {student ? (
                            <div className="w-full border border-gray-300 rounded-xl px-4 py-2">
                                <p className="font-medium">{student.name}</p>
                            </div>
                        ) : (
                            <Select
                                options={students?.map((s: any) => ({
                                    value: s.id,
                                    label: s.name,
                                }))}
                                onChange={setSelectedStudent}
                                value={selectedStudent}
                                isSearchable
                                placeholder="Пошук студента..."
                                noOptionsMessage={() => 'Студентів не знайдено'}
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
                                    control: (base) => ({
                                        ...base,
                                        borderColor: '#CDC8C8',
                                        borderRadius: '0.5rem',
                                        padding: '0.25rem',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            borderColor: '#9CA3AF',
                                        },
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        border: '1px solid #CDC8C8',
                                        borderRadius: '0.5rem',
                                        boxShadow:
                                            '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    }),
                                    option: (base, { isFocused }) => ({
                                        ...base,
                                        backgroundColor: isFocused
                                            ? '#FFECE7'
                                            : 'white',
                                        color: '#1F2937',
                                    }),
                                }}
                            />
                        )}
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
                            onClick={toggleModal}
                            className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px] transition"
                        >
                            Скасувати
                        </button>
                        <button
                            onClick={assignTest}
                            className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md transition"
                        >
                            Призначити
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignTestModal
