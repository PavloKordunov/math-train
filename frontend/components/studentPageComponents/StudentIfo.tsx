'use client'

import Image from 'next/image'
import { use } from 'react'

const StudentInfo = ({ studentPromise }: any) => {
    const student: any = use(studentPromise)
    return (
        <div className="flex items-center mb-6 gap-4">
            <div className="relative w-16 h-16 md:w-25 md:h-25">
                <Image
                    src="/person.png"
                    alt="Avatar"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="flex-col h-fit items-center">
                <p className="font-semibold text-[20px]/8 md:text-[28px]/10">
                    {student?.name}
                </p>
                <p className="text-gray-400 text-[16px] md:text-[20px]">
                    {student?.email}
                </p>
            </div>
        </div>
    )
}

export default StudentInfo
