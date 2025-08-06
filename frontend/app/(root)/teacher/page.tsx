'use client'

import AddStudent from '@/components/teacherComponents/AddStudent'
import TeacherTestItem from '@/components/TeacherTestItem'
import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import EmptyState from '@/components/EmptyState'
import {
    MdAssignment,
    MdEdit,
    MdLibraryBooks,
    MdOutlineAssignment,
    MdPeople,
    MdSchool,
} from 'react-icons/md'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const TeacherPage = () => {
    const { user } = useUser()
    const [tests, setTests] = useState<any[]>([])
    const [students, setStudents] = useState<any[]>([])
    const [assignTests, setAssignTests] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!user?.id) return

        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch(
                    `${API_URL}/api/teacher/main/${user.id}`
                )

                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }

                const data = await res.json()

                console.log(data)

                setTests(data.tests)
                setStudents(data.students)
                setAssignTests(data.assignedTestCount)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(
                    'Не вдалося завантажити дані. Спробуйте оновити сторінку.'
                )
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (!user || loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#3B82F6" size={50} />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-6 bg-red-50 rounded-lg max-w-md mx-4">
                    <p className="text-red-500 font-medium">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Спробувати знову
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
            <header className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <MdSchool className="text-blue-600 text-2xl sm:text-3xl" />
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Кабінет викладача
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                    Керуйте тестами та студентами зручним способом
                </p>
            </header>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <Link
                    href="/create-test"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 text-white rounded-lg font-medium transition shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                    <MdEdit size={18} />
                    <span>Створити тест</span>
                </Link>

                <AddStudent />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                            <MdPeople className="text-blue-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Студентів
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {students.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-yellow-100 p-2 sm:p-3 rounded-full">
                            <MdLibraryBooks className="text-yellow-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Тестів
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {tests.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                            <MdOutlineAssignment className="text-green-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Призначено
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {assignTests}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Створені тести
                </h2>

                {tests.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                        {tests.map((test) => (
                            <TeacherTestItem
                                key={test.id}
                                test={test}
                                students={students}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        icon={
                            <MdAssignment size={40} className="text-gray-400" />
                        }
                        title="Немає тестів"
                        description="Створіть свій перший тест"
                        action={
                            <Link
                                href="/create-test"
                                className="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                            >
                                <MdEdit className="mr-2" />
                                Створити тест
                            </Link>
                        }
                    />
                )}
            </section>
        </div>
    )
}

export default TeacherPage
