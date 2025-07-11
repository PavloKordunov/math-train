'use client'

import AddStudent from '@/components/teacherComponents/AddStudent'
import TeacherTestItem from '@/components/TeacherTestItem'
import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const TeacherPage = () => {
    const { user } = useUser()
    const [tests, setTests] = useState<any[]>([])
    const [students, setStudents] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user?.id) return

        const fetchData = async () => {
            try {
                setLoading(true)

                const [testsRes, studentsRes] = await Promise.all([
                    fetch(`${API_URL}/api/test/teacher/${user.id}`, {
                        cache: 'no-store',
                    }),
                    fetch(`${API_URL}/api/student/teacher/${user.id}`, {
                        cache: 'no-store',
                    }),
                ])

                const testsData = await testsRes.json()
                const studentsData = await studentsRes.json()

                setTests(testsData)
                setStudents(studentsData)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [user?.id])

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#CA193A" size={50} />
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#CA193A" size={50} />
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto flex flex-col py-2 px-4">
            <div className="w-full py-6 md:py-10 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                    👩‍🏫 Кабінет викладача
                </h1>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/create-test"
                        className="bg-[#CA193A] px-4 py-2 text-white text-sm sm:text-lg rounded-md font-semibold uppercase"
                    >
                        Додати тест
                    </Link>
                    <AddStudent />
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Створені тести
            </h2>

            <div>
                {tests.length > 0 ? (
                    tests.map((test) => (
                        <TeacherTestItem
                            key={test.id}
                            test={test}
                            students={students}
                        />
                    ))
                ) : (
                    <p>Поки що немає тестів</p>
                )}
            </div>
        </div>
    )
}

export default TeacherPage
