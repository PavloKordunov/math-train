'use client'

import Image from "next/image"
import { use } from "react"

const StudentInfo = ({studentPromise}: any) => {

    const student: any = use(studentPromise)
    return (
        <div className="flex items-center mb-6">
            <Image src='/person.png' alt='' width={100} height={100} className="mr-8" />
            <div className="flex-col h-fit items-center">
                <p className="font-semibold text-[28px]/10">{student?.name}</p>
                <p className="text-gray-400 text-[20px]">{student?.email}</p>
            </div>
        </div>
    )
}

export default StudentInfo