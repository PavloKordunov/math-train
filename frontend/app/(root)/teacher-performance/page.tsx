'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"

const TeacherPerformance = () => {

    const [studentsList, setStudentsList] = useState<any | null>([])
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        const getAllStudents = async() => {
            try {
                const res = await fetch(`${API_URL}/api/student`)
                const data = await res.json()

                setStudentsList(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudents()
    }, [])

    return (
        <div>
            <div className="flex relative w-fit mb-10">
                <input type="text" className="w-100 text-[20px] px-6 py-2 bg-[#F2F2F8] shadow-md rounded-2xl" />
                <button className="absolute right-4 top-3">
                    <FaSearch size={20} />
                </button>
            </div>
            {studentsList.map((student: any) => (
                <Link key={student.id} href={`/student/${student.id}`} className="flex w-fit p-2 px-4 bg-[#F2F2F8] items-center shadow-md rounded-2xl">
                    <Image src='/person.png' alt='' width={60} height={60} className="mr-8" />
                    <div className="flex-col h-fit items-center">
                        <p className="font-semibold text-[20px]/6">{student.name}</p>
                        <p className="text-gray-400">{student.email}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default TeacherPerformance