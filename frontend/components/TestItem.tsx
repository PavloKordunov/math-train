'use client'

import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const TestItem = ({ test }: { test: any }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const { user } = useUser()
    const [notEndedTest, setNotEndedTest] = useState<any>()

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

    useEffect(() => {
        const notEndedTestLC = localStorage.getItem('time-left')
        if (notEndedTestLC) {
            const parsedNotEndedTest = JSON.parse(notEndedTestLC)
            setNotEndedTest(parsedNotEndedTest)
        }
    }, [])

    return (
        <div className="w-full max-w-5xl mx-auto mb-6">
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
                        <p className="font-bold text-lg uppercase mb-4">
                            Тест: {test.title} —{' '}
                            {formatDateToUkrainian(test.endTime)}
                        </p>
                        {user?.status === 'Student' && (
                            <button
                                className="bg-[#CA193A] px-4 py-2 w-fit text-white rounded-md font-semibold uppercase"
                                onClick={toggleModal}
                            >
                                Перейти до тесту
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center">
                    <Toaster position="bottom-center" />
                    <div className="bg-[#F0F4F8] px-10 py-6 rounded-[31px] w-fit">
                        <h1 className="font-bold text-[24px] uppercase">
                            Тест, {test.test.title}, час завершення:{' '}
                            {formatDateToUkrainian(test.test.endTime)}
                        </h1>
                        <p className="mb-10 font-medium text-[18px]">
                            Тест обмежений часом на {test.test.timeLimit} хвилин
                        </p>
                        <div className="flex gap-4 items-center justify-end">
                            <button
                                className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase"
                                onClick={toggleModal}
                            >
                                Скасувати
                            </button>
                            {notEndedTest &&
                            notEndedTest?.testId !== test.test.id ? (
                                <button
                                    className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase"
                                    onClick={() => {
                                        toast.error(
                                            'Ви не завершили роботу над попереднім тестом'
                                        )
                                    }}
                                >
                                    Розпочати тестування
                                </button>
                            ) : (
                                <Link
                                    href={`/test/${test.test.id}`}
                                    className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase"
                                >
                                    {notEndedTest?.testId !== test.test.id
                                        ? `Розпочати тестування`
                                        : `Продовжити тестування`}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestItem
