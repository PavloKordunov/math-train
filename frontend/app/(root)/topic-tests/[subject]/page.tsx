'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { useParams } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'

const TopicTestPage = () => {
    const params = useParams()
    const subjectName = params?.subject as string
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [topics, setTopics] = useState<any[]>([])
    const [openSubTopicId, setOpenSubTopicId] = useState<string | null>(null)
    const [tests, setTests] = useState<any[]>([])
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

    const getTestBySubTopicId = async (subtopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/test/topic/${subtopicId}`)
            const data = await res.json()
            console.log(data)
            setTests(data)
        } catch (error) {
            console.log(error)
        }
    }

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

    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
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
                {topics &&
                    topics.map((topic, topicNum) => (
                        <div key={topic.id}>
                            <h2 className="text-[28px] font-semibold mb-6">
                                {topicNum + 1}. {topic.name}
                            </h2>
                            {topic.subTopics &&
                                topic.subTopics.map(
                                    (subTopic: any, subTopicNum: any) => (
                                        <div
                                            className="max-w-[1280px]"
                                            key={subTopic.id}
                                        >
                                            <div
                                                className="flex justify-between items-center mb-4 cursor-pointer"
                                                onClick={() => {
                                                    handleOpenSubTopic(
                                                        subTopic.id
                                                    )
                                                    getTestBySubTopicId(
                                                        subTopic.id
                                                    )
                                                }}
                                            >
                                                <h3 className="text-[24px] font-semibold">
                                                    {topicNum + 1}.
                                                    {subTopicNum + 1}.{' '}
                                                    {subTopic.name}
                                                </h3>
                                                <FiChevronRight
                                                    className={`transform transition-transform duration-300 ${
                                                        openSubTopicId ===
                                                        subTopic.id
                                                            ? 'rotate-90'
                                                            : ''
                                                    }`}
                                                    size={36}
                                                />
                                            </div>
                                            <div
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                    openSubTopicId ===
                                                    subTopic.id
                                                        ? 'max-h-[500px] opacity-100'
                                                        : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                {tests &&
                                                    tests.map((test) => (
                                                        <div
                                                            key={test.id}
                                                            className="flex items-center justify-between mb-4"
                                                        >
                                                            <p className="text-[20px] font-medium">
                                                                {test.title} (
                                                                {
                                                                    test.tasks
                                                                        .length
                                                                }
                                                                )
                                                            </p>
                                                            <div className="flex gap-4 items-center">
                                                                <div
                                                                    style={{
                                                                        width: 50,
                                                                        height: 50,
                                                                    }}
                                                                >
                                                                    <CircularProgressbar
                                                                        value={
                                                                            21
                                                                        }
                                                                        text={`${21}%`}
                                                                        styles={buildStyles(
                                                                            {
                                                                                textSize:
                                                                                    '28px',
                                                                                pathColor:
                                                                                    '#d0002d',
                                                                                textColor:
                                                                                    '#000',
                                                                                trailColor:
                                                                                    '#eee',
                                                                            }
                                                                        )}
                                                                    />
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        toggleModal()
                                                                        setSelectedTest(
                                                                            test
                                                                        )
                                                                    }}
                                                                    className="bg-[#CA193A] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                                                >
                                                                    Назначити
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="bg-[#CDC8C8] h-[1px] mb-1 w-full"></div>
                                        </div>
                                    )
                                )}
                        </div>
                    ))}
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
