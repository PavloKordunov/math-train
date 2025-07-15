'use client'

import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import { Toaster, toast } from 'react-hot-toast'

const TestResults = ({ test, student }: { test: any; student: any }) => {
    const { user } = useUser()

    function formatDateToUkrainian(dateString: string): string {
        const date = new Date(dateString)
        const day = date.getDate()
        const monthIndex = date.getMonth()
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')

        const monthsGenitive = [
            'січня',
            'лютого',
            'березня',
            'квітня',
            'травня',
            'червня',
            'липня',
            'серпня',
            'вересня',
            'жовтня',
            'листопада',
            'грудня',
        ]

        return `${day} ${monthsGenitive[monthIndex]} ${hours}:${minutes}`
    }

    const onErrorClick = () => {
        toast.error('У вас немає доступу до перегляду тесту')
    }

    return (
        <div className="w-full max-w-5xl mx-auto mb-6">
            <Toaster position="bottom-center" />
            <div className="flex flex-col md:flex-row bg-[#FFECE7] shadow-md rounded-lg overflow-hidden">
                <div className="p-6 flex justify-center items-center bg-[#FFECE7] md:w-1/4">
                    <Image
                        src="/mathItemImg.png"
                        alt="Math"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col justify-between p-6 gap-4 md:w-3/4 bg-white border-l-2 border-[#CDC8C8]">
                    <div>
                        <p className="font-bold text-[18px] uppercase mb-6">
                            {test?.testName}, Здано:{' '}
                            {formatDateToUkrainian(test?.createdAt)}, Оцінка:{' '}
                            {test.score}/{test.maxScore}
                        </p>
                        {user?.status === 'Student' &&
                        student?.viewAccess === false ? (
                            <div
                                onClick={onErrorClick}
                                className="bg-[#CA193A] px-4 py-2 text-white w-fit rounded-md font-semibold uppercase cursor-pointer"
                            >
                                Переглянути тест
                            </div>
                        ) : (
                            <Link
                                href={`/perfomence/${test.id}`}
                                className="bg-[#CA193A] px-4 py-2 w-fit text-white rounded-md font-semibold uppercase"
                            >
                                Переглянути тест
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestResults
