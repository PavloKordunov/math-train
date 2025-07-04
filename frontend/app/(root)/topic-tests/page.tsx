'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Link from 'next/link'
import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

const TopicTestPage = () => {
    const [isOpenTopic, setIsOpenTopic] = useState(false)

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-[1280px] w-full">
                <h1 className="text-[40px] font-semibold mb-10">
                    Математика: завдання за темами
                </h1>
                <h2 className="text-[28px] font-semibold mb-6">
                    1. Алгебра і початки аналізу{' '}
                </h2>
                <div className="max-w-[1280px]">
                    <div
                        className="flex justify-between items-center mb-4 cursor-pointer"
                        onClick={() => setIsOpenTopic(!isOpenTopic)}
                    >
                        <h3 className="text-[24px] font-semibold">
                            1.1 Числа і вирази
                        </h3>
                        <FiChevronRight
                            className={`transform transition-transform duration-300 ${
                                isOpenTopic ? 'rotate-90' : ''
                            }`}
                            size={36}
                        />
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpenTopic
                                ? 'max-h-[500px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="pb-4">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-[20px] font-medium">
                                    Дійсні числа (83)
                                </p>
                                <div className="flex gap-4 items-center">
                                    <div style={{ width: 50, height: 50 }}>
                                        <CircularProgressbar
                                            value={21}
                                            text={`${21}%`}
                                            styles={buildStyles({
                                                textSize: '28px',
                                                pathColor: '#d0002d',
                                                textColor: '#000',
                                                trailColor: '#eee',
                                            })}
                                        />
                                    </div>
                                    <Link
                                        href=""
                                        className="bg-[#CA193A] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                    >
                                        Почати
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-[20px] font-medium">
                                    Відношення та пропорції. Відсотки. Текстові
                                    задачі (86)
                                </p>
                                <div className="flex items-center gap-4">
                                    <div style={{ width: 50, height: 50 }}>
                                        <CircularProgressbar
                                            value={21}
                                            text={`${21}%`}
                                            styles={buildStyles({
                                                textSize: '28px',
                                                pathColor: '#d0002d',
                                                textColor: '#000',
                                                trailColor: '#eee',
                                            })}
                                        />
                                    </div>
                                    <Link
                                        href=""
                                        className="bg-[#CA193A] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                    >
                                        Почати
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#CDC8C8] h-[1px] w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default TopicTestPage
