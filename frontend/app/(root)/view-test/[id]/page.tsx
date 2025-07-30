'use client'

import { useUser } from '@/hooks/useUser'
import { useCallback, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useParams, useRouter } from 'next/navigation'
import TestTasks from '@/components/testComponents/TestTasks'
import CreateTestTask from '@/components/testComponents/CreateTestTask'
import TestBasicInfo from '@/components/testComponents/TestBasicInfo'
import CreateTaskModal from '@/components/testComponents/CreateTaskModal'
import FormulaHints from '@/components/testComponents/FormulasHint'
import { MathInputHandle } from '@/components/MathInput'

const ViewTest = () => {
    const params = useParams()
    const testId = params?.id
    const [modalOpen, setModalOpen] = useState(false)
    const [questionType, setQuestionType] = useState('')
    const { user, setUser } = useUser()
    const answerRefs = useRef<Record<string, MathInputHandle | null>>({})
    const titleRef = useRef<MathInputHandle>(null)
    const [test, setTest] = useState({
        title: '',
        description: '',
        timeLimit: 0,
        endTime: '',
        teacherId: user?.id,
        tasks: [],
    })
    const [question, setQuestion] = useState<any>({
        title: '',
        type: '',
        answers: [],
        pairs: [],
        image: '',
    })
    const router = useRouter()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        const getTestById = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test/${testId}`)
                const data = await res.json()
                console.log(data)
                setTest(data)
            } catch (error) {
                console.log(error)
            }
        }

        getTestById()
    }, [])

    const handleUpdateTest = async () => {
        try {
            const res = await fetch(`${API_URL}/api/test/${testId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: test.title,
                    description: test.description,
                    timeLimit: test.timeLimit,
                    teacherId: test.teacherId,
                    endTime: test.endTime,
                    tasks: test.tasks.map((task: any) => ({
                        title: task.title,
                        image: task.image,
                        type: task.type,
                        answers: task.answers,
                        pairs: task.pairs,
                        number: task.number,
                    })),
                }),
            })

            const data = await res.json()
            console.log(data)
            router.push('/teacher')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelect = (type: string) => {
        setQuestionType(type)

        if (type === 'multiple') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'multiple',
                answers: Array(5)
                    .fill(null)
                    .map(() => ({ text: '', isCorrect: false, id: nanoid() })),
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
            })
        } else if (type === 'written') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'written',
                answers: [{ text: '', id: nanoid() }],
                pairs: [],
                image: '',
            })
        }

        setModalOpen(false)
    }

    const updateAnswerText = (index: number, text: string) => {
        const updatedAnswers = [...question.answers]
        updatedAnswers[index].text = text
        setQuestion({ ...question, answers: updatedAnswers })
    }

    const toggleAnswerCorrect = (index: number) => {
        const updatedAnswers = [...question.answers]
        updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect
        setQuestion({ ...question, answers: updatedAnswers })
    }

    const formatDateForInput = (isoString: string) => {
        if (!isoString) return ''

        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''

        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }

    const handleSaveMatchingTask = useCallback(
        (
            answerRefs: React.RefObject<Record<string, MathInputHandle | null>>,
            titleWithFormulas: string
        ) => {
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

    useEffect(() => {
        console.log(question)
    }, [question])

    const updateTask = (updatedTask: any) => {
        setTest((prev: any) => ({
            ...prev,
            tasks: prev.tasks.map((task: any) =>
                task.id === updatedTask.id ? updatedTask : task
            ),
        }))
    }

    const deleteTask = (taskId: any) => {
        setTest((prev) => ({
            ...prev,
            tasks: prev.tasks.filter((task: any) => task.id !== taskId),
        }))
    }

    useEffect(() => {
        console.log(test)
    }, [test])
    const updateTest = (updatedTest: any) => {
        setTest(updatedTest)
    }

    return (
        <div>
            <h1 className="text-[36px] mb-4 font-bold text-center">
                Оновлення тесту
            </h1>
            <TestBasicInfo
                test={test}
                setTest={setTest}
                formatDateForInput={formatDateForInput}
            />
            <TestTasks
                test={test}
                updateTask={updateTask}
                deleteTask={deleteTask}
                updateTest={updateTest}
            />
            <CreateTestTask
                questionType={questionType}
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
                    onClick={handleUpdateTest}
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                >
                    Оновити тест
                </button>
            </div>
            <div className="hidden [@media(min-width:1440px)]:block">
                <FormulaHints />
            </div>
            {modalOpen && (
                <CreateTaskModal
                    handleSelect={handleSelect}
                    setModalOpen={setModalOpen}
                />
            )}
        </div>
    )
}

export default ViewTest
