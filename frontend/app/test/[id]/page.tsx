'use client'

import { useEffect, useState } from 'react'
import CustomRadio from '../../../components/CustomRadio'
import TestNav from '@/components/userTest/TestNav'
import { useParams } from 'next/navigation'
import TimeTracker from '@/components/userTest/TimeTracker'
import { useUser } from '@/hooks/useUser'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import MatchingTask from '@/components/userTest/MatchingTasks'
import AdditionalDocs from '@/components/userTest/AdditionalDocs'

type SavedAnswers = {
    multiple: { [taskId: string]: string }
    matching: { [taskId: string]: { [leftIndex: number]: string } }
    written: { [taskId: string]: string }
}

const TestPage = () => {
    const params = useParams()
    const testId = params?.id
    const { user } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [test, setTest] = useState<any | null>({})
    const [savedAnswers, setSavedAnswers] = useState<SavedAnswers>({
        multiple: {},
        matching: {},
        written: {},
    })
    const [endedTest, setEndedTest] = useState(false)
    const [writtenAnswers, setWrittenAnswers] = useState<{
        [taskId: string]: string
    }>({})
    const [selectedAnswers, setSelectedAnswers] = useState<{
        [taskId: string]: number
    }>({})
    const [answers, setAnswers] = useState<any>([])
    const [testResult, setTestResult] = useState<any>({})
    const [active, setActive] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0)
    const [showAnswerModal, setShowAnswerModal] = useState(false)

    const updateTime = (time: number) => {
        setTimeLeft(time)
    }

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    useEffect(() => {
        const checkIfSmallScreen = () => {
            setIsSmallScreen(window.innerWidth < 1280)
        }

        checkIfSmallScreen()
        window.addEventListener('resize', checkIfSmallScreen)
        return () => window.removeEventListener('resize', checkIfSmallScreen)
    }, [])

    useEffect(() => {
        const getTestById = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test/${testId}`)
                const data = await res.json()
                setTest(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTestById()
    }, [testId])

    const handleEndTest = async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/test/${test.id}/check/${user?.id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(answers),
                }
            )

            const data = await res.json()
            setTestResult(data)
            localStorage.removeItem('saved-answers')
            localStorage.removeItem('time-left')
        } catch (error) {
            console.log(error)
        }
    }

    const handleAnswerSelect = (taskId: string, answerIndex: number) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [taskId]: answerIndex,
        }))
    }

    const handleSaveMultiple = (taskId: string, answerIndex: number) => {
        setSavedAnswers((prev: any) => ({
            ...prev,
            multiple: {
                ...prev.multiple,
                [taskId]: answerIndex,
            },
        }))
    }

    const handleSaveWritten = (taskId: string, answerText: string) => {
        setSavedAnswers((prev) => ({
            ...prev,
            written: {
                ...prev.written,
                [taskId]: answerText,
            },
        }))
    }

    useEffect(() => {
        const savedStorageAnswers = localStorage.getItem('saved-answers')
        if (savedStorageAnswers) {
            const parsedSawedAnswers = JSON.parse(savedStorageAnswers)
            const parsedAnswers = parsedSawedAnswers.answers
            setAnswers(parsedAnswers)

            const multipleAnswers: any = {}
            const writtenAnswers: any = {}
            const matchingAnswers: any = {}

            parsedAnswers.forEach((answer: any) => {
                if (answer.type === 'multiple') {
                    multipleAnswers[answer.taskId] = answer.answer
                } else if (answer.type === 'written') {
                    writtenAnswers[answer.taskId] = answer.answer
                } else if (answer.type === 'matching') {
                    matchingAnswers[answer.taskId] = answer.answer
                }
            })

            setSelectedAnswers(multipleAnswers)
            setWrittenAnswers(writtenAnswers)

            setSavedAnswers({
                multiple: multipleAnswers,
                written: writtenAnswers,
                matching: matchingAnswers,
            })
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (answers.length > 0) {
                localStorage.setItem(
                    'saved-answers',
                    JSON.stringify({ answers, testId })
                )
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [answers])

    useEffect(() => {
        if (!endedTest) {
            const interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)

            if (timeLeft === 1) {
                setShowAnswerModal(true)
                handleEndTest()
            }

            return () => clearInterval(interval)
        }
    }, [timeLeft, endedTest])

    const scrollToTask = (taskId: string) => {
        const element = document.getElementById(`task-${taskId}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleAnswer = (taskId: any, answer: any, type: any) => {
        setAnswers((prev: any) => {
            const filtred = prev?.filter((ans: any) => ans.taskId !== taskId)
            return [...filtred, { taskId, answer, type }]
        })
    }

    const handleSetNotProvidedAnsw = () => {
        let answersNotProvided: any = []
        test?.tasks?.map((task: any) => {
            const hasAnswer = answers.find(
                (answ: any) => answ.taskId === task.id
            )
            if (!hasAnswer) {
                answersNotProvided.push(task)
            }
        })
        return answersNotProvided
    }

    return (
        <div className="w-full px-4 md:px-20">
            {!isMobile && (
                <div className="relative">
                    <div className="px-4 md:px-20 fixed inset-x-0 z-1000">
                        <TimeTracker
                            test={test}
                            handleEndTest={handleEndTest}
                            answers={answers}
                            testResult={testResult}
                            endedTest={endedTest}
                            setEndedTest={setEndedTest}
                            isMobile={isMobile}
                            timeLeft={timeLeft}
                            setTimeLeft={setTimeLeft}
                            setShowAnswerModal={setShowAnswerModal}
                            showAnswerModal={showAnswerModal}
                        />
                    </div>
                </div>
            )}

            <div className="pt-4 md:pt-40 pb-20">
                <div>
                    <TestNav
                        active={active}
                        setActive={setActive}
                        savedAnswers={savedAnswers}
                        tasks={test?.tasks}
                        scrollToTask={scrollToTask}
                        isSmallScreen={isSmallScreen}
                        isMobile={isMobile}
                        setIsOpen={setIsOpen}
                        timeLeft={timeLeft}
                    />
                    {!active ? (
                        <div className="relative mx-auto flex flex-col md:flex-row">
                            <div className="w-full xl:w-4/5 border border-2 border-gray-300 p-4 xl:p-9">
                                {test?.tasks?.map((task: any) => {
                                    if (task.type === 'multiple') {
                                        const isSaved = Boolean(
                                            savedAnswers.multiple[task.id]
                                        )
                                        const selectedAnswerIndex =
                                            selectedAnswers[task.id]

                                        return (
                                            <div
                                                id={`task-${task.id}`}
                                                key={task.id}
                                            >
                                                <h2 className="text-lg md:text-[24px] font-medium mb-4 md:mb-8">
                                                    Завдання {task.number}
                                                </h2>
                                                <LatextTranform
                                                    content={task.title}
                                                />
                                                {task.image && (
                                                    <div className="w-full h-fit overflow-hidden rounded-lg md:rounded-[21px]">
                                                        <Image
                                                            src={task.image}
                                                            alt={task.title}
                                                            width={237}
                                                            height={237}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}

                                                <div className="flex flex-col gap-2 md:gap-3 w-full mb-4 md:mb-8">
                                                    {task.answers.map(
                                                        (answer: any) => (
                                                            <div
                                                                key={`${task.id}-${answer.id}`}
                                                                className="py-1 md:py-2 px-2 md:px-3 w-full border border-2 border-gray-300 rounded-sm flex items-center gap-2 md:gap-3 cursor-pointer"
                                                                onClick={() =>
                                                                    handleAnswerSelect(
                                                                        task.id,
                                                                        answer.id
                                                                    )
                                                                }
                                                            >
                                                                <CustomRadio
                                                                    checked={
                                                                        selectedAnswerIndex ===
                                                                        answer.id
                                                                    }
                                                                    onChange={() =>
                                                                        handleAnswerSelect(
                                                                            task.id,
                                                                            answer.id
                                                                        )
                                                                    }
                                                                />
                                                                <LatextTranform
                                                                    content={
                                                                        answer.text
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <button
                                                    className="bg-[#CA193A] px-3 md:px-4 py-1 md:py-2 text-white rounded-md font-semibold mb-4 md:mb-6 text-sm md:text-base"
                                                    onClick={() => {
                                                        handleSaveMultiple(
                                                            task.id,
                                                            selectedAnswerIndex
                                                        )
                                                        handleAnswer(
                                                            task.id,
                                                            selectedAnswerIndex,
                                                            task.type
                                                        )
                                                    }}
                                                >
                                                    Зберегти відповідь
                                                </button>

                                                {isSaved && (
                                                    <div className="mb-4 md:mb-8">
                                                        <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                                                        <p className="text-rose-600 text-sm md:text-[16px] font-semibold">
                                                            Відповідь збережено
                                                        </p>
                                                    </div>
                                                )}
                                                <div className="h-[2px] w-full bg-gray-300 mb-4 md:mb-6"></div>
                                            </div>
                                        )
                                    }

                                    if (task.type === 'matching') {
                                        const isSaved =
                                            !!savedAnswers.matching[task.id]
                                        return (
                                            <MatchingTask
                                                key={task.id}
                                                task={task}
                                                isSaved={isSaved}
                                                onSave={(userAnswers: any) => {
                                                    const updatedAnswers = {
                                                        ...savedAnswers,
                                                        matching: {
                                                            ...savedAnswers.matching,
                                                            [task.id]:
                                                                userAnswers,
                                                        },
                                                    }
                                                    setSavedAnswers(
                                                        updatedAnswers
                                                    )

                                                    handleAnswer(
                                                        task.id,
                                                        userAnswers,
                                                        task.type
                                                    )
                                                }}
                                                savedMatches={
                                                    savedAnswers.matching[
                                                        task.id
                                                    ] || []
                                                }
                                                isMobile={isMobile}
                                            />
                                        )
                                    }

                                    if (task.type === 'written') {
                                        const isSaved =
                                            !!savedAnswers.written[task.id]
                                        return (
                                            <div
                                                id={`task-${task.id}`}
                                                key={task.id}
                                            >
                                                <h2 className="text-lg md:text-[24px] font-medium mb-4 md:mb-8">
                                                    Завдання {task.number}
                                                </h2>
                                                <LatextTranform
                                                    content={task.title}
                                                />
                                                {task.image && (
                                                    <div className="w-full h-fit overflow-hidden rounded-lg md:rounded-[21px]">
                                                        <Image
                                                            src={task.image}
                                                            alt={task.title}
                                                            width={237}
                                                            height={237}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}

                                                <p className="text-base md:text-[18px] mb-4 md:mb-6 font-medium">
                                                    Упишіть відповідь
                                                </p>
                                                <input
                                                    type="text"
                                                    value={
                                                        writtenAnswers[
                                                            task.id
                                                        ] || ''
                                                    }
                                                    onChange={(e) =>
                                                        setWrittenAnswers(
                                                            (prev) => ({
                                                                ...prev,
                                                                [task.id]:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        )
                                                    }
                                                    className="w-full block border border-gray-300 rounded-lg md:rounded-xl px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-8"
                                                />
                                                <button
                                                    className="bg-[#CA193A] px-3 md:px-4 py-1 md:py-2 text-white rounded-md font-semibold mb-4 md:mb-6 text-sm md:text-base"
                                                    onClick={() => {
                                                        handleSaveWritten(
                                                            task.id,
                                                            writtenAnswers[
                                                                task.id
                                                            ]
                                                        )
                                                        handleAnswer(
                                                            task.id,
                                                            writtenAnswers[
                                                                task.id
                                                            ],
                                                            task.type
                                                        )
                                                    }}
                                                >
                                                    Зберегти відповідь
                                                </button>
                                                {isSaved && (
                                                    <div className="mb-4 md:mb-8">
                                                        <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                                                        <p className="text-rose-600 text-sm md:text-[16px] font-semibold">
                                                            Відповідь збережено
                                                        </p>
                                                    </div>
                                                )}
                                                <div className="h-[2px] w-full bg-gray-300 mb-4 md:mb-6"></div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>

                            {!isSmallScreen && !isMobile && (
                                <div className="w-1/6 fixed right-20 -transform-x-1/2 -transform-y-1/2 h-fit bg-white border-2 border-gray-300 shadow-md p-4 overflow-y-auto">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Завдання
                                    </h2>
                                    <div className="grid grid-cols-4 gap-2">
                                        {test?.tasks?.map((task: any) => {
                                            const isSaved =
                                                (task.type === 'multiple' &&
                                                    savedAnswers.multiple[
                                                        task.id
                                                    ]) ||
                                                (task.type === 'matching' &&
                                                    savedAnswers.matching[
                                                        task.id
                                                    ]) ||
                                                (task.type === 'written' &&
                                                    savedAnswers.written[
                                                        task.id
                                                    ])

                                            return (
                                                <button
                                                    key={task.id}
                                                    className={`w-12 h-12 ${
                                                        isSaved
                                                            ? 'bg-red-500'
                                                            : 'bg-gray-100'
                                                    } text-${
                                                        isSaved
                                                            ? 'white'
                                                            : 'black'
                                                    } border-1 border-gray-300 rounded hover:bg-${
                                                        isSaved
                                                            ? 'red-600'
                                                            : 'gray-200'
                                                    }`}
                                                    onClick={() =>
                                                        scrollToTask(task.id)
                                                    }
                                                >
                                                    {task.number}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <AdditionalDocs />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center ">
                    <div className="bg-[#FFF] p-4 md:p-6 rounded-md w-full max-w-md md:max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-6 md:p-10 w-full">
                            <h2 className="font-semibold text-lg md:text-[22px]">
                                Ви впевнені, що бажаєте завершити роботу над
                                тестом?
                            </h2>
                            <p className="text-base md:text-[18px] mb-4">
                                Переконайтеся, що Ви натисли на "Зберегти
                                відповідь" біля кожного виконаного завдання.
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                                <button
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium w-full md:w-auto"
                                    onClick={() => {
                                        setEndedTest(true)
                                        handleEndTest()
                                        setIsOpen(false)
                                    }}
                                >
                                    Так, завершити роботу
                                </button>
                                <button
                                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 font-medium w-full md:w-auto"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Ні, повернутися
                                </button>
                            </div>
                        </div>
                        {handleSetNotProvidedAnsw().length > 0 && (
                            <div className="bg-gray-200 border-3 border-red-600 p-4 px-6 md:px-10 w-full mt-4">
                                <p className="font-semibold text-lg md:text-[22px]">
                                    Не надано відповіді:
                                </p>
                                <p className="text-base md:text-[18px] flex flex-wrap">
                                    {handleSetNotProvidedAnsw().map(
                                        (answ: any) => (
                                            <span
                                                className="mr-1"
                                                key={`${answ.id}-${answ.number}`}
                                            >
                                                {answ.number},
                                            </span>
                                        )
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {testResult.totalScore !== undefined && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center ">
                    <div className="bg-[#FFF] p-4 md:p-6 rounded-md w-full max-w-md md:max-w-[80%]">
                        <div className="bg-gray-200 border-2 border-gray-300 p-6 md:p-10 w-full">
                            <h2 className="font-semibold text-lg md:text-[22px]">
                                Ви завершили роботу над тестом.
                            </h2>
                            <p className="text-base md:text-[18px] mb-4">
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
                                <a
                                    href="/home"
                                    className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-medium w-full text-center"
                                >
                                    На головну
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-200 border-3 border-red-600 p-4 px-6 md:px-10 w-full mt-4">
                            <p className="font-semibold text-lg md:text-[22px]">
                                Ваш результат:
                            </p>
                            <p className="text-base md:text-[18px]">
                                {testResult.totalScore}/{testResult.maxScore}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestPage
