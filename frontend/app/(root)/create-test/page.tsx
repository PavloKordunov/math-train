'use client'

import { useUser } from '@/hooks/useUser'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'
import TestTasks from '@/components/testComponents/TestTasks'
import CreateTestTask from '@/components/testComponents/CreateTestTask'
import TestBasicInfo from '@/components/testComponents/TestBasicInfo'
import CreateTaskModal from '@/components/testComponents/CreateTaskModal'
import FormulaHints from '@/components/testComponents/FormulasHint'
import { useSubTopicContext } from '@/helpers/getSubTopicId'
import { MathInputHandle } from '@/components/MathInput'
import { title } from 'process'

const CreateTest = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [questionType, setQuestionType] = useState('')
    const { user } = useUser()
    const { subTopicId } = useSubTopicContext()
    const answerRefs = useRef<Record<string, MathInputHandle | null>>({})
    const titleRef = useRef<MathInputHandle>(null)

    const [test, setTest] = useState({
        title: '',
        description: '',
        timeLimit: 0,
        teacherId: user?.status === 'Teacher' ? user?.id : '',
        adminID: user?.status === 'Admin' ? user?.id : '',
        tasks: [],
        subTopicId: subTopicId || undefined,
    })
    const [question, setQuestion] = useState<any>({
        title: '',
        type: '',
        answers: [],
        pairs: [],
        image: '',
        number: 0,
    })

    const router = useRouter()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const MemoizedTestTasks = memo(TestTasks)

    const handleCreateTest = async () => {
        try {
            const res = await fetch(`${API_URL}/api/test`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(test),
            })

            const data = await res.json()
            localStorage.removeItem('test')
            user?.status === 'Teacher'
                ? router.push('/teacher')
                : router.push('/admin')
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const storedTest = localStorage.getItem('test')
        if (storedTest) {
            const parsedTest = JSON.parse(storedTest)
            setTest(parsedTest)
            // setMaxNumber(
            //     Math.max(
            //         ...parsedTest?.tasks?.map((t: any) => parseInt(t.number))
            //     ) + 1
            // )
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (test.tasks.length > 0) {
                localStorage.setItem('test', JSON.stringify(test))
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [test])

    useEffect(() => {
        console.log(test)
    }, [test])

    const updateTest = (updatedTest: any) => {
        setTest(updatedTest)
    }

    const handleSelect = useCallback((type: string) => {
        setQuestionType(type)

        if (type === 'multiple') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'multiple',
                answers: Array(5)
                    .fill(null)
                    .map(() => ({
                        text: '',
                        isCorrect: false,
                        id: nanoid(),
                        number: 0,
                    })),
                pairs: [],
                image: '',
            })
        } else if (type === 'matching') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'matching',
                answers: [
                    {
                        left: {
                            rightId: '',
                            rightText: '',
                            leftText: '',
                            leftId: '',
                        },
                    },
                ],
                pairs: [
                    {
                        left: { id: nanoid(), text: '' },
                        right: { id: nanoid(), text: '' },
                        id: nanoid(),
                    },
                ],
                image: '',
                number: 0,
            })
        } else if (type === 'written') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'written',
                answers: [{ text: '', id: nanoid() }],
                pairs: [],
                image: '',
                number: 0,
            })
        }
        setModalOpen(false)
    }, [])

    const updateAnswerText = useCallback((index: number, text: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            answers: prev.answers.map((answer: any, i: any) =>
                i === index ? { ...answer, text } : answer
            ),
        }))
    }, [])

    const toggleAnswerCorrect = useCallback((index: number) => {
        setQuestion((prev: any) => ({
            ...prev,
            answers: prev.answers.map((answer: any, i: any) =>
                i === index
                    ? { ...answer, isCorrect: !answer.isCorrect }
                    : answer
            ),
        }))
    }, [])

    const handleSaveMatchingTask = useCallback(
        (
            answerRefs: React.RefObject<Record<string, MathInputHandle | null>>,
            titleWithFormulas: string
        ) => {
            // Оновити пари з текстом з MathInput через рефи
            const updatedPairs = question.pairs.map((pair: any) => {
                const leftRef = answerRefs.current[pair.left.id]
                const rightRef = answerRefs.current[pair.right.id]

                return {
                    ...pair,
                    left: {
                        ...pair.left,
                        text: leftRef?.getTextWithFormulas
                            ? leftRef.getTextWithFormulas()
                            : pair.left.text,
                    },
                    right: {
                        ...pair.right,
                        text: rightRef?.getTextWithFormulas
                            ? rightRef.getTextWithFormulas()
                            : pair.right.text,
                    },
                }
            })

            // Фільтруємо пари з непорожнім текстом
            const validPairs = updatedPairs.filter(
                (pair: any) =>
                    pair.left?.text?.trim() && pair.right?.text?.trim()
            )

            const answers = validPairs.map((pair: any) => ({
                left: {
                    rightId: pair.right.id,
                    rightText: pair.right.text,
                    leftId: pair.left.id,
                    leftText: pair.left.text,
                },
            }))

            setTest((prev: any) => {
                const newNumber = prev.tasks.length + 1

                const taskToSave = {
                    ...question,
                    title: titleWithFormulas || question.title,
                    type: questionType,
                    answers: answers,
                    pairs: updatedPairs.map((pair: any) => ({
                        left: { id: pair.left.id, text: pair.left.text },
                        right: { id: pair.right.id, text: pair.right.text },
                    })),
                    number: newNumber.toString(),
                }

                return {
                    ...prev,
                    tasks: [...prev.tasks, taskToSave],
                }
            })

            setQuestion({
                id: '',
                title: '',
                type: '',
                answers: [],
                pairs: [
                    {
                        left: { id: nanoid(), text: '' },
                        right: { id: nanoid(), text: '' },
                        id: nanoid(),
                    },
                ],
            })
            setQuestionType('')
        },
        [question, questionType]
    )

    const updateTask = useCallback((updatedTask: any) => {
        setTest((prev: any) => ({
            ...prev,
            tasks: prev.tasks.map((task: any) =>
                task.id === updatedTask.id ? updatedTask : task
            ),
        }))
    }, [])

    const deleteTask = useCallback((taskId: any) => {
        setTest((prev) => ({
            ...prev,
            tasks: prev.tasks.filter((task: any) => task.id !== taskId),
        }))
    }, [])

    return (
        <div>
            <h1 className="text-[36px] mb-4 font-bold text-center">
                Створення нового тесту
            </h1>
            <TestBasicInfo test={test} setTest={setTest} />
            <MemoizedTestTasks
                test={test}
                updateTask={updateTask}
                deleteTask={deleteTask}
                updateTest={updateTest}
            />
            <CreateTestTask
                key={questionType}
                questionType={questionType}
                handleSelect={handleSelect}
                setQuestionType={setQuestionType}
                test={test}
                setTest={setTest}
                setModalOpen={setModalOpen}
                question={question}
                setQuestion={setQuestion}
                toggleAnswerCorrect={toggleAnswerCorrect}
                updateAnswerText={updateAnswerText}
                handleSaveMatchingTask={() => {
                    const titleWithFormulas =
                        titleRef.current?.getTextWithFormulas() || ''
                    handleSaveMatchingTask(answerRefs, titleWithFormulas)
                }}
                answerRefs={answerRefs}
                titleRef={titleRef}
            />
            <div className="flex items-center justify-end mx-auto max-w-3xl">
                <button
                    onClick={handleCreateTest}
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                >
                    Створити тест
                </button>
            </div>
            {user?.subject === 'Mathematics' && (
                <div className="hidden [@media(min-width:1440px)]:block">
                    <FormulaHints />
                </div>
            )}
            {modalOpen && (
                <CreateTaskModal
                    handleSelect={handleSelect}
                    setModalOpen={setModalOpen}
                />
            )}
        </div>
    )
}

export default CreateTest
