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
        <div className="flex items-stretch w-fit h-fit mb-8">
            <div className="px-20 py-8 bg-[#FFECE7]">
                <Image src="/mathItemImg.png" alt="" width={100} height={100} />
            </div>
            <div className="px-10 border-[2px] border-[#CDC8C8] border-l-0 flex items-center justify-between min-w-[900px] gap-10">
                <p className="font-bold text-[18px] uppercase">
                    Тест, {test.test.title}, час завершення:{' '}
                    {formatDateToUkrainian(test.test.endTime)}
                </p>
                {user?.status === 'Student' && (
                    <button
                        className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase"
                        onClick={toggleModal}
                    >
                        Перейти до тесту
                    </button>
                )}
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
