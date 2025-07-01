import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const TimeTracker = ({
    test,
    handleEndTest,
    answers,
    testResult,
}: {
    test: any
    handleEndTest: () => void
    answers: any
    testResult: any
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [notProvidedAnsw, setNotProvidedAnsw] = useState<any>([])
    const [timeLeft, setTimeLeft] = useState<number>(0)
    const [showTime, setShowTime] = useState(true)
    const [showAnswerModal, setShowAnswerModal] = useState(false)
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

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        if (timeLeft === 1) {
            setShowAnswerModal(true)
            handleEndTest()
        }

        return () => clearInterval(interval)
    }, [timeLeft])

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
            setTimeLeft(parsedTimeLeft)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                localStorage.setItem('time-left', JSON.stringify(timeLeft))
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [timeLeft])

    useEffect(() => {
        handleSetNotProvidedAnsw()
    }, [isOpen, answers])

    return (
        <div className="w-full bg-[#E3E2E2] shadow-md flex items-start">
            <div className="self-stretch bg-rose-600 w-2"></div>
            <div className="w-full px-15">
                <p className="mb-6 mt-4 text-black font-medium text-[18px]">
                    {test.title} обмежений у часі. Таймер праворуч показує,
                    скільки хвилин залишилося до кінця роботи. Вибравши
                    відповідь на завдання, не забудьте натиснути на "Зберегти
                    відповідь" для кожного завдання. Якщо Ви цього не зробите,
                    відповідь не буде збережено і зараховано. Перш ніж натиснути
                    на "Завершити роботу над тестом", перевірте, чи зберегли всі
                    надані відповіді.
                </p>
                <div className="flex gap-6 items-center justify-end mb-6">
                    <button
                        className="bg-rose-600 text-white px-3 py-1 rounded-[21px] hover:bg-rose-700 font-semibold"
                        onClick={() => setIsOpen(true)}
                    >
                        Завершити роботу над тестом
                    </button>
                    <div className="flex gap-2 items-center">
                        <p className="text-rose-600">
                            {showTime && `${formatTime(timeLeft)}`}
                        </p>
                        <div
                            onClick={toggleTime}
                            className="p-1 bg-rose-600 hover:bg-rose-700"
                        >
                            {showTime ? (
                                <FiEyeOff size={16} color="white" />
                            ) : (
                                <FiEye size={16} color="white" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center ">
                    <div className="bg-[#FFF] p-6 rounded-md w-fit max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-10 w-fit">
                            <h2 className="font-semibold text-[22px]">
                                Ви впевнені, що бажаєте завершити роботу над
                                тестом?
                            </h2>
                            <p className="text-[18px] mb-4">
                                Переконайтеся, що Ви натисли на "Зберегти
                                відповідь" біля кожного виконаного завдання.Ви
                                можете повернутися до будь-якого і надати та/або
                                зберегти відповідь. Після натискання на "Так,
                                завершити роботу" будуть зараховані тільки
                                збережені відповіді, повернутися до завдань буде
                                неможливо.
                            </p>
                            <div className="flex items-center gap-6">
                                <button
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium"
                                    onClick={() => {
                                        handleEndTest()
                                        setIsOpen(false)
                                        setShowAnswerModal(true)
                                    }}
                                >
                                    Так, завершити роботу
                                </button>
                                <button
                                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Ні, повернутися до виконання завдання{' '}
                                </button>
                            </div>
                        </div>
                        {notProvidedAnsw.length > 0 && (
                            <div className="bg-gray-200 border-3 border-red-600 p-4 px-10 w-full">
                                <p className="font-semibold text-[22px]">
                                    Не надано та/або не завершершені завдання
                                </p>
                                <p className="text-[18px] flex">
                                    Математика:{' '}
                                    {notProvidedAnsw.map((answ: any) => (
                                        <span
                                            className="ml-1"
                                            key={`${answ.id}-${answ.number}`}
                                        >
                                            {' '}
                                            Завдання: {answ.number},{' '}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {showAnswerModal && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center ">
                    <div className="bg-[#FFF] p-6 rounded-md w-fit max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-10 w-full">
                            <h2 className="font-semibold text-[22px]">
                                Ви завершили роботу над тестом.
                            </h2>
                            <p className="text-[18px] mb-4">
                                {(() => {
                                    const percentage =
                                        testResult.totalScore /
                                        testResult.maxScore

                                    if (percentage === 1) {
                                        return 'Ідеальний результат! Ви – справжній геній цієї теми! 💯'
                                    } else if (percentage >= 0.95) {
                                        return 'Вражаюче! Майже максимальний бал – ви неймовірні! 🌟'
                                    } else if (percentage >= 0.9) {
                                        return 'Чудово! Ваші знання на високому рівні! 👏'
                                    } else if (percentage >= 0.8) {
                                        return 'Відмінний результат! Ви добре володієте матеріалом! 👍'
                                    } else if (percentage >= 0.7) {
                                        return 'Добре зроблено! Ви на правильному шляху! 💪'
                                    } else if (percentage >= 0.6) {
                                        return 'Непогано! Дещо більше практики – і буде ідеально! ✨'
                                    } else if (percentage >= 0.5) {
                                        return 'Середній результат. Ви впорались, але є куди рости! 📚'
                                    } else if (percentage >= 0.4) {
                                        return 'Ви зробили перші кроки! Продовжуйте працювати над собою! 🚶‍♂️'
                                    } else if (percentage >= 0.3) {
                                        return 'Не здавайтесь! Кожна спроба робить вас сильнішими! 💥'
                                    } else if (percentage >= 0.2) {
                                        return 'Складний тест? Це лише початок вашого навчання! 🧠'
                                    } else if (percentage >= 0.1) {
                                        return 'Не засмучуйтесь! Навіть генії колось починали! 🌱'
                                    } else {
                                        return 'Важливо не те, як ви почали, а те, як ви продовжите! 🏁'
                                    }
                                })()}
                            </p>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/home"
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium"
                                >
                                    Вернутись на домашню сторінку
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-200 border-3 border-red-600 p-4 px-10 w-full">
                            <p className="font-semibold text-[22px]">
                                Ваш результат (Кількість тестових балів за
                                виконання тесту із максимально можливих )
                            </p>
                            <p className="text-[18px] flex">
                                Математика - {testResult.totalScore}/
                                {testResult.maxScore}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimeTracker
