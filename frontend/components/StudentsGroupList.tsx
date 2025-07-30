'use client'

import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#4f46e5',
    },
}))

const StudentsGroupList = ({ students }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [studentPerformances, setStudentPerformances] = useState<
        Record<string, any[]>
    >({})
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const fetchAllStudentPerformances = async () => {
            try {
                setLoading(true)
                const performances: Record<string, any[]> = {}

                await Promise.all(
                    students.map(async (student: any) => {
                        const res = await fetch(
                            `${API_URL}/api/perfomence/one/student/${student.id}`
                        )
                        const data = await res.json()
                        performances[student.id] = data.data
                    })
                )

                setStudentPerformances(performances)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchAllStudentPerformances()
    }, [students, API_URL])

    const calculateProgress = (performance: any[]) => {
        const perfArr = Array.isArray(performance) ? performance : []
        if (perfArr.length === 0) return 0

        const totalPercentage = perfArr.reduce((sum, test) => {
            if (test.maxScore === 0) return sum
            const percentage = (test.score / test.maxScore) * 100
            return sum + percentage
        }, 0)

        const averagePercentage = totalPercentage / perfArr.length

        return Math.round(averagePercentage)
    }

    const getProgressColor = (progress: number) => {
        if (progress < 30) return 'text-red-600'
        if (progress < 70) return 'text-yellow-500'
        return 'text-green-600'
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                    Список студентів
                </h3>
                <p className="text-sm text-gray-500">
                    Всього студентів: {students.length}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Студент
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Прогрес
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Останній тест
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Результат
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((student: any) => {
                            const performance =
                                studentPerformances[student.id] || []
                            const progress = calculateProgress(performance)
                            const lastTest =
                                performance.length > 0
                                    ? performance[performance.length - 1]
                                    : null

                            return (
                                <tr
                                    key={student.id}
                                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() =>
                                        router.push(`/student/${student.id}`)
                                    }
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <span className="text-indigo-600 font-medium">
                                                    {student.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {student.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {student.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-full mr-4">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={progress}
                                                />
                                            </div>
                                            <span
                                                className={`text-sm font-medium ${getProgressColor(
                                                    progress
                                                )}`}
                                            >
                                                {progress}%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {lastTest
                                                ? lastTest.testName
                                                : 'Немає даних'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {lastTest ? (
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${
                                                    lastTest.score /
                                                        lastTest.maxScore >=
                                                    0.7
                                                        ? 'bg-green-100 text-green-800'
                                                        : lastTest.score /
                                                              lastTest.maxScore >=
                                                          0.4
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {lastTest.score}/
                                                {lastTest.maxScore}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-500">
                                                —
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentsGroupList
