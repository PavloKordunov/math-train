'use client'

import TestResults from '@/components/TestResults'
import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'

const StudentPerfomence = () => {
    const [test, setTest] = useState<any | null>([])
    const [student, setStudent] = useState<any | null>([])
    const { user } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        const getAllStudentPerfomence = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/perfomence/one/student/${user?.id}`
                )
                const data = await res.json()

                console.log(data)
                setTest(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getStudent = async () => {
            try {
                const res = await fetch(`${API_URL}/api/student/${user?.id}`)
                const data = await res.json()

                console.log(data)
                setStudent(data)
            } catch (error) {
                console.log(error)
            }
        }

        getStudent()
        getAllStudentPerfomence()
    }, [])

    return (
        <div className="py-12">
            {test.length > 0 ? (
                test.map((test: any) => (
                    <TestResults key={test.id} test={test} student={student} />
                ))
            ) : (
                <p>Поки що немає зданих тестів</p>
            )}
        </div>
    )
}

export default StudentPerfomence
