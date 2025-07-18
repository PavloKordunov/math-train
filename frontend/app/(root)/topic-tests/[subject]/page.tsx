'use client'

import 'react-circular-progressbar/dist/styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import TopicTesets from '@/components/TopicTests'
import AssignTestModal from '@/components/AssignTestModal'

const TopicTestPage = () => {
    const params = useParams()
    const subjectName = params?.subject as string
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [topics, setTopics] = useState<any[]>([])
    const [students, setStudents] = useState<any[]>([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState<any>(null)

    useEffect(() => {
        const getaAlltopicsBySubject = async () => {
            try {
                const res = await fetch(`${API_URL}/api/topic/${subjectName}`)
                const data = await res.json()
                setTopics(data.data)
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

                setStudents(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudents()
    }, [])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="flex flex-col items-center">
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
                <AssignTestModal
                    test={selectedTest}
                    students={students}
                    toggleModal={toggleModal}
                />
            )}
        </div>
    )
}

export default TopicTestPage
