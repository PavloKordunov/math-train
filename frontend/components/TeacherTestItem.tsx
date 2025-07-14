'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import Select from 'react-select'

const TeacherTestItem = ({ students, test }: { students: any; test: any }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [studentName, setStudentName] = useState('')
    const [filtredStudents, setFilteredStudents] = useState<any[]>([])
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [endTime, setEndTime] = useState<any>(null)
    const [selectedStudent, setSelectedStudent] = useState<any>(null)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    useEffect(() => {
        const filtered = students.filter((student: any) =>
            student.name.toLowerCase().includes(studentName.toLowerCase())
        )
        setFilteredStudents(filtered)
    }, [studentName, students])

    useEffect(() => {
        console.log(selectedStudent)
    }, [selectedStudent])

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

    const assignTest = async () => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}/assign`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: test.id,
                    studentId: selectedStudent.value,
                    endTime: endTime,
                }),
            })
            const data = await res.json()
            toggleModal()
            toast.success(`Тест призначено для ${selectedStudent.label}`)
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

    const deleteTest = async () => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await res.json()
            toast.success('Тест видалено')
        } catch (error) {
            console.error(error)
            toast.error('Помилка при видаленні')
        }
    }

    return (
        <div className="w-full max-w-5xl mx-auto mb-6">
            <Toaster position="bottom-center" />

            <div className="flex flex-col md:flex-row bg-[#FFECE7] shadow-md rounded-lg overflow-hidden">
                <div className="p-6 flex justify-center items-center bg-[#FFECE7] md:w-1/4">
                    <Image
                        src="/mathItemImg.png"
                        alt="Math"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col justify-between p-6 gap-4 md:w-3/4 bg-white border-l-2 border-[#CDC8C8]">
                    <div>
                        <p className="font-bold text-lg uppercase mb-4">
                            Тест: {test.title} —{' '}
                            {formatDateToUkrainian(test.endTime)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href={`/view-test/${test.id}`}
                                className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-semibold uppercase text-center"
                            >
                                Переглянути
                            </Link>
                            <button
                                onClick={toggleModal}
                                className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 font-semibold uppercase"
                            >
                                Назначити
                            </button>
                        </div>
                    </div>

                    <button
                        className="text-gray-500 hover:text-red-600 self-end"
                        onClick={deleteTest}
                    >
                        <MdDelete size={24} />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4">
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
                                <Select
                                    options={students.map((s: any) => ({
                                        value: s.id,
                                        label: s.name,
                                    }))}
                                    onChange={(selected) =>
                                        setSelectedStudent(selected)
                                    }
                                    isSearchable
                                    placeholder="Пошук студента..."
                                    noOptionsMessage={() =>
                                        'Студентів не знайдено'
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
                                        // SingleValue: ({ data }: any) => (
                                        //     <div className="flex items-center">
                                        //         <span className="font-medium">
                                        //             {data.label}
                                        //         </span>
                                        //     </div>
                                        // ),
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
        </div>
    )
}

export default TeacherTestItem
