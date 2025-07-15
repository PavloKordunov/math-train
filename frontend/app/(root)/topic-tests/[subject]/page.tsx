'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { useParams } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'
import TopicTesets from '@/components/TopicTests'

const TopicTestPage = () => {
    const params = useParams()
    const subjectName = params?.subject as string
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [topics, setTopics] = useState<any[]>([])
    const [students, setStudents] = useState<any[]>([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [studentName, setStudentName] = useState('')
    const [filtredStudents, setFilteredStudents] = useState<any[]>([])

    const [selectedTest, setSelectedTest] = useState<any>(null)

    useEffect(() => {
        const getaAlltopicsBySubject = async () => {
            try {
                const res = await fetch(`${API_URL}/api/topic/${subjectName}`)
                const data = await res.json()
                setTopics(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getaAlltopicsBySubject()
    }, [subjectName])

    useEffect(() => {
        const getAllStudents = async () => {
            try {
                const res = await fetch(`${API_URL}/api/student`)

                const data = await res.json()
                console.log(data)

                setStudents(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudents()
    }, [])

    const assignTest = async (student: any) => {
        try {
            const res = await fetch(
                `${API_URL}/api/test/${selectedTest.id}/assign`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        testId: selectedTest.id,
                        studentId: student.id,
                    }),
                }
            )

            const data = await res.json()
            setSelectedTest(null)
            console.log(data)
            toast.success(`Тест призначено для ${student.name}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    useEffect(() => {
        const filtered = students.filter((student: any) =>
            student.name.toLowerCase().includes(studentName.toLowerCase())
        )
        setFilteredStudents(filtered)
    }, [studentName, students])

    return (
        <div className="flex flex-col items-center">
            <Toaster position="bottom-center" />
            <div className="max-w-[1280px] w-full">
                <h1 className="text-[40px] font-semibold mb-10">
                    Математика: завдання за темами
                </h1>
                <TopicTesets
                    topics={topics}
                    toggleModal={toggleModal}
                    setSelectedTest={setSelectedTest}
                />
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center">
                    <div className="bg-[#F0F4F8] px-10 py-6 rounded-[31px] w-fit">
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-[28px] text-black font-semibold mr-12">
                                Виберіть студента
                            </p>
                            <FaTimes
                                size={24}
                                color="#000"
                                onClick={() => {
                                    toggleModal()
                                    setSelectedTest(null)
                                }}
                            />
                        </div>
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-2 text-black bg-[#fff] border-none rounded-[10px] mb-3 focus:outline-none"
                            placeholder="Введіть ім'я студента"
                            value={studentName}
                            onChange={(e: any) =>
                                setStudentName(e.target.value)
                            }
                        />
                        <div className="max-h-60 overflow-y-auto">
                            {filtredStudents.length > 0 ? (
                                filtredStudents.map((student) => (
                                    <div
                                        key={student.id}
                                        className="text-black py-2 px-4 rounded-md bg-white mb-2"
                                        onClick={() => {
                                            assignTest(student)
                                            toggleModal()
                                        }}
                                    >
                                        {student.name}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">
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

export default TopicTestPage
