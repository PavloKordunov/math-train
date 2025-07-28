'use client'

import StudentsList from '@/components/teacher-performance/StudentList'
import { useUser } from '@/hooks/useUser'
import { Suspense, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const TeacherPerformance = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [students, setStudents] = useState<any>([])

    useEffect(() => {
        const getAllStudentsByTeacherID = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/student/teacher/${user?.id}`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()
                console.log(data.data)
                setStudents(data.data)
            } catch (error) {
                console.error('Error fetching students:', error)
                return []
            }
        }

        getAllStudentsByTeacherID()
    }, [])

    return (
        <div>
            <Suspense fallback={<ClipLoader color="#36d7b7" size={40} />}>
                <StudentsList initialStudents={students} />
            </Suspense>
        </div>
    )
}

export default TeacherPerformance
