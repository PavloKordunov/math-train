import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const TimeTracker = ({
    test,
    handleEndTest,
    answers,
    testResult,
    endedTest,
    setEndedTest,
    isMobile = false,
    timeLeft,
    setTimeLeft,
    setShowAnswerModal,
    showAnswerModal,
}: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [notProvidedAnsw, setNotProvidedAnsw] = useState<any>([])
    const [showTime, setShowTime] = useState(true)
    const timeLeftFromStorage = localStorage.getItem('time-left')

    const handleSetNotProvidedAnsw = () => {
        setNotProvidedAnsw([])
        let answersNotProvided: any = []
        test?.tasks?.map((task: any) => {
            const hasAnswer = answers.find(
                (answ: any) => answ.taskId === task.id
            )
            if (!hasAnswer) {
                answersNotProvided.push(task)
            }
        })
        setNotProvidedAnsw(answersNotProvided)
    }

    useEffect(() => {
        if (test !== null && !timeLeftFromStorage) {
            setTimeLeft(test?.timeLimit * 60 || 0)
        }
    }, [test])

    // useEffect(() => {
    //     if (!endedTest) {
    //         const interval = setInterval(() => {
    //             setTimeLeft((prev: any) => prev - 1)
    //         }, 1000)
    //         if (timeLeft === 1) {
    //             setShowAnswerModal(true)
    //             handleEndTest()
    //         }

    //         return () => clearInterval(interval)
    //     }
    // }, [timeLeft, endedTest])

    const formatTime = (seconds: number) => {
        const safeSeconds = Math.max(0, seconds)
        const min = Math.floor(safeSeconds / 60)
        const sec = safeSeconds % 60
        return `${min}:${sec < 10 ? '0' : ''}${sec}`
    }

    const toggleTime = () => {
        setShowTime(!showTime)
    }

    useEffect(() => {
        if (timeLeftFromStorage) {
            const parsedTimeLeft = JSON.parse(timeLeftFromStorage)
            setTimeLeft(parsedTimeLeft.timeLeft)
        }
    }, [])

    useEffect(() => {
        if (!endedTest) {
            const timer = setTimeout(() => {
                if (timeLeft > 0) {
                    localStorage.setItem(
                        'time-left',
                        JSON.stringify({ timeLeft, testId: test.id })
                    )
                }
            }, 1000)

            return () => clearTimeout(timer)
        }
        localStorage.removeItem('time-left')
    }, [timeLeft, endedTest])

    useEffect(() => {
        handleSetNotProvidedAnsw()
    }, [isOpen, answers])

    return (
        <div className="w-full bg-[#E3E2E2] shadow-md flex items-start">
            <div className="self-stretch bg-rose-600 w-1 md:w-2"></div>
            <div className="w-full px-2 md:px-15">
                {!isMobile && (
                    <p className="mb-2 md:mb-6 mt-1 md:mt-4 text-black font-medium text-xs md:text-sm lg:text-[18px]">
                        {test.title} обмежений у часі. Таймер праворуч показує,
                        скільки хвилин залишилося до кінця роботи. Вибравши
                        відповідь на завдання, не забудьте натиснути на
                        "Зберегти відповідь" для кожного завдання.
                    </p>
                )}

                <div className="flex gap-1 md:gap-6 items-center justify-end mb-1 md:mb-6">
                    {!isMobile && (
                        <button
                            className="bg-rose-600 text-white px-2 md:px-3 py-1 rounded-lg md:rounded-[21px] hover:bg-rose-700 font-semibold text-xs md:text-sm lg:text-base"
                            onClick={() => {
                                setIsOpen(true)
                            }}
                        >
                            Завершити тест
                        </button>
                    )}
                    <div className="flex gap-1 md:gap-2 items-center">
                        <p className="text-rose-600 text-sm md:text-base">
                            {showTime && `${formatTime(timeLeft)}`}
                        </p>
                        <div
                            onClick={toggleTime}
                            className="p-1 bg-rose-600 hover:bg-rose-700 rounded"
                        >
                            {showTime ? (
                                <FiEyeOff size={14} color="white" />
                            ) : (
                                <FiEye size={14} color="white" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4">
                    <div className="bg-[#FFF] p-4 md:p-6 rounded-md w-full max-w-md md:max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-4 md:p-10 w-full">
                            <h2 className="font-semibold text-lg md:text-[22px]">
                                Ви впевнені, що бажаєте завершити тест?
                            </h2>
                            <p className="text-sm md:text-[18px] mb-4">
                                Переконайтеся, що Ви зберегли всі відповіді.
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                                <button
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium w-full md:w-auto"
                                    onClick={() => {
                                        setEndedTest(true)
                                        handleEndTest()
                                        setIsOpen(false)
                                        setShowAnswerModal(true)
                                    }}
                                >
                                    Так, завершити
                                </button>
                                <button
                                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 font-medium w-full md:w-auto mt-2 md:mt-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Ні, повернутися
                                </button>
                            </div>
                        </div>
                        {notProvidedAnsw.length > 0 && (
                            <div className="bg-gray-200 border-3 border-red-600 p-3 md:p-4 px-4 md:px-10 w-full mt-3">
                                <p className="font-semibold text-lg md:text-[22px]">
                                    Не завершені завдання:
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {notProvidedAnsw.map((answ: any) => (
                                        <span
                                            className="bg-white px-2 py-1 rounded text-sm"
                                            key={`${answ.id}-${answ.number}`}
                                        >
                                            {answ.number}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {showAnswerModal && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4">
                    <div className="bg-[#FFF] p-4 md:p-6 rounded-md w-full max-w-md md:max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-4 md:p-10 w-full">
                            <h2 className="font-semibold text-lg md:text-[22px]">
                                Тест завершено
                            </h2>
                            <p className="text-sm md:text-[18px] mb-4">
                                {(() => {
                                    const percentage =
                                        testResult.totalScore /
                                        testResult.maxScore

                                    if (percentage === 1) {
                                        return 'Ідеальний результат! 💯'
                                    } else if (percentage >= 0.8) {
                                        return 'Відмінний результат! 👍'
                                    } else if (percentage >= 0.6) {
                                        return 'Добре зроблено! 💪'
                                    } else if (percentage >= 0.4) {
                                        return 'Можна краще! ✨'
                                    } else {
                                        return 'Працюйте над собою! 🧠'
                                    }
                                })()}
                            </p>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/home"
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium w-full text-center"
                                >
                                    На головну
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-200 border-3 border-red-600 p-3 md:p-4 px-4 md:px-10 w-full mt-3">
                            <p className="font-semibold text-lg md:text-[22px]">
                                Результат:
                            </p>
                            <p className="text-sm md:text-[18px]">
                                {testResult.totalScore}/{testResult.maxScore}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimeTracker
