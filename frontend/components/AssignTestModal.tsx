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
        <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center px-4 py-4 overflow-y-auto">
            <Toaster position="bottom-center" />
            <div className="bg-[#F0F4F8] w-full max-w-xl p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 relative max-h-[90vh] overflow-y-auto">
                <div className="flex justify-center md:w-1/3">
                    <Image
                        src="/mathItemImg.png"
                        alt="Math"
                        width={160}
                        height={100}
                        className="object-contain w-32 h-auto md:w-40"
                    />
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {test.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <p className="text-base md:text-lg font-medium text-gray-700">
                            Завдань: {test.tasks.length}
                        </p>
                        <p className="text-base md:text-lg font-medium text-gray-700">
                            Час: {test.timeLimit} хв
                        </p>
                    </div>

                    <div className="mt-2 w-full">
                        {student ? (
                            <div className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white">
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
                                    control: (base) => ({
                                        ...base,
                                        borderColor: '#CDC8C8',
                                        borderRadius: '0.5rem',
                                        padding: '0.25rem',
                                        boxShadow: 'none',
                                        minHeight: '44px',
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
                                        fontSize: '0.875rem',
                                        padding: '8px 12px',
                                    }),
                                    input: (base) => ({
                                        ...base,
                                        fontSize: '0.875rem',
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        fontSize: '0.875rem',
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        fontSize: '0.875rem',
                                    }),
                                }}
                            />
                        )}
                    </div>

                    <div className="space-y-1">
                        <label className="block text-gray-700 font-medium text-sm md:text-base">
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
                            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm md:text-base"
                        />
                    </div>

                    <div className="flex flex-col-reverse md:flex-row justify-end gap-2 md:gap-4 mt-4">
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-[16px] border border-gray-300 text-black font-semibold text-sm md:text-[16px] transition"
                        >
                            Скасувати
                        </button>
                        <button
                            onClick={assignTest}
                            className="px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-[16px] bg-red-500 text-white font-semibold text-sm md:text-[16px] shadow-md transition"
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
