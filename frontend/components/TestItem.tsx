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

    useEffect(() => {
        console.log('TestItem:', test)
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

                <div className="flex flex-col justify-between p-6 gap-4 md:w-3/4 bg-white md:border-l-2 md:border-[#CDC8C8]">
                    <div>
                        <p className="font-bold text-lg uppercase mb-4">
                            Тест: {test.test.title} —{' '}
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
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4">
                    <Toaster position="bottom-center" />
                    <div className="bg-[#F0F4F8] px-6 py-6 sm:px-10 sm:py-8 rounded-2xl sm:rounded-[31px] w-full max-w-md sm:max-w-xl">
                        <div className="space-y-4">
                            <h1 className="font-bold text-lg sm:text-2xl uppercase text-center sm:text-left">
                                Тест: {test.test.title}
                            </h1>

                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-gray-700 font-medium mb-2">
                                    <span className="font-semibold">
                                        Час завершення:
                                    </span>{' '}
                                    {formatDateToUkrainian(test.endTime)}
                                </p>
                                <p className="text-gray-700 font-medium">
                                    <span className="font-semibold">
                                        Обмеження часу:
                                    </span>{' '}
                                    {test.test.timeLimit} хвилин
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                <button
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-semibold transition-colors text-sm sm:text-base"
                                    onClick={toggleModal}
                                >
                                    Скасувати
                                </button>

                                {notEndedTest &&
                                notEndedTest?.testId !== test.test.id ? (
                                    <button
                                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition-colors text-sm sm:text-base"
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
                                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition-colors text-center text-sm sm:text-base"
                                    >
                                        {notEndedTest?.testId !== test.test.id
                                            ? 'Розпочати тестування'
                                            : 'Продовжити тестування'}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestItem
