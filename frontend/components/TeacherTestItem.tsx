'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'

const TeacherTestItem = ({ students, test }: { students: any; test: any }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [studentName, setStudentName] = useState('')
    const [filtredStudents, setFilteredStudents] = useState<any[]>([])
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    useEffect(() => {
        const filtered = students.filter((student: any) =>
            student.name.toLowerCase().includes(studentName.toLowerCase())
        )
        setFilteredStudents(filtered)
    }, [studentName, students])

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

    const assignTest = async (student: any) => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}/assign`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: test.id,
                    studentId: student.id,
                }),
            })
            const data = await res.json()
            toast.success(`Тест призначено для ${student.name}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

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
                    <div className="bg-[#F0F4F8] w-full max-w-md p-6 rounded-2xl relative">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-black">
                                Виберіть студента
                            </h2>
                            <button onClick={toggleModal}>
                                <FaTimes size={22} className="text-black" />
                            </button>
                        </div>

                        <input
                            type="text"
                            className="w-full h-12 px-4 mb-4 text-black bg-white rounded-lg focus:outline-none"
                            placeholder="Введіть ім'я студента"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />

                        <div className="max-h-60 overflow-y-auto space-y-2">
                            {filtredStudents.length > 0 ? (
                                filtredStudents.map((student) => (
                                    <div
                                        key={student.id}
                                        className="bg-white py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer text-black"
                                        onClick={() => {
                                            assignTest(student)
                                            toggleModal()
                                        }}
                                    >
                                        {student.name}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">
                                    Студента не знайдено
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeacherTestItem
