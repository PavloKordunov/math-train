'use client'

import { useUser } from '@/hooks/useUser'
import { useCallback, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useParams, useRouter } from 'next/navigation'
import TestTasks from '@/components/testComponents/TestTasks'
import CreateTestTask from '@/components/testComponents/CreateTestTask'
import TestBasicInfo from '@/components/testComponents/TestBasicInfo'
import CreateTaskModal from '@/components/testComponents/CreateTaskModal'
import FormulaHints from '@/components/testComponents/FormulasHint'
import { TestSchema } from '@/lib/validation'
import z from 'zod'
import { toast } from 'react-hot-toast'

const ViewTest = () => {
    const params = useParams()
    const testId = params?.id
    const [modalOpen, setModalOpen] = useState(false)
    const [questionType, setQuestionType] = useState('')
    const { user } = useUser()
    const [test, setTest] = useState({
        title: '',
        description: '',
        timeLimit: '0',
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

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [deleteImage, setDeleteImage] = useState<any[]>([])
    const [editedImages, setEditedImages] = useState<any[]>([])

    useEffect(() => {
        if (editedImages.length === 0) return
        localStorage.setItem('editedImages', JSON.stringify(editedImages))
    }, [editedImages])

    useEffect(() => {
        const getTestById = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test/${testId}`)
                const data = await res.json()
                setTest({
                    ...data,
                    timeLimit: data.timeLimit?.toString() ?? '0',
                })
            } catch (error) {
                console.log(error)
            }
        }

        const savedEdited = localStorage.getItem('editedImages')
        if (savedEdited) {
            try {
                console.log('editedImages', JSON.parse(savedEdited))
                handleDeleteImages(JSON.parse(savedEdited))
                localStorage.removeItem('editedImages')
            } catch (e) {
                console.error('Помилка відновлення editedImages:', e)
            }
        }

        getTestById()
    }, [])

    const handleDeleteImages = async (images: string[]) => {
        try {
            if (!images || images.length === 0) return

            await fetch(`${API_URL}/api/upload/urls`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ urls: images }),
            })
            console.log('Deleted images:', images)
        } catch (error) {
            console.error('Error deleting images:', error)
        }
    }

    const validateForm = () => {
        try {
            TestSchema.parse({
                ...test,
            })
            setErrors({})
            return true
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {}
                error.issues.forEach((issue) => {
                    if (issue.path.length > 0) {
                        const fieldName = issue.path[0] as string
                        newErrors[fieldName] = issue.message
                    }
                })
                setErrors(newErrors)
            }
            return false
        }
    }

    const handleUpdateTest = async () => {
        if (!validateForm()) {
            toast.error('Будь ласка, виправте помилки у формі')
            return
        }
        try {
            if (deleteImage) await handleDeleteImages(deleteImage)
            const res = await fetch(`${API_URL}/api/test/${testId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: test.title,
                    description: test.description,
                    timeLimit: Number(test.timeLimit),
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
            localStorage.removeItem('editedImages')
            user?.status === 'Teacher'
                ? router.push('/teacher')
                : router.push('/admin')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelect = useCallback((type: string) => {
        setQuestionType(type)

        if (type === 'multiple') {
            setQuestion({
                id: nanoid(),
                title: '',
                type: 'multiple',
                answers: Array(3)
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
                        left: { id: nanoid(), text: '', image: '' },
                        right: { id: nanoid(), text: '', image: '' },
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

    const handleTitleChange = useCallback((value: string) => {
        setTest((prev) => ({ ...prev, title: value }))
    }, [])

    const handleDescriptionChange = useCallback((value: string) => {
        setTest((prev) => ({ ...prev, description: value }))
    }, [])

    const handleTimeLimitChange = useCallback((value: string) => {
        setTest((prev) => ({ ...prev, timeLimit: value }))
    }, [])

    const updateTask = useCallback((updatedTask: any) => {
        setTest((prev: any) => ({
            ...prev,
            tasks: prev.tasks.map((task: any) =>
                task.id === updatedTask.id ? updatedTask : task
            ),
        }))
    }, [])

    const updateTest = useCallback((updatedFields: any) => {
        setTest((prev) => ({
            ...prev,
            ...updatedFields,
        }))
    }, [])

    const handleSaveMatchingTask = () => {
        const validPairs = question.pairs.filter(
            (pair: any) => pair.left?.text?.trim() && pair.right?.text?.trim()
        )

        const answers = validPairs.map((pair: any) => ({
            left: {
                rightId: pair.right.id,
                rightText: pair.right.text,
                rightImage: pair.right.image,
                leftId: pair.left.id,
                leftText: pair.left.text,
                leftImage: pair.left.image,
            },
        }))

        const taskToSave = {
            ...question,
            type: questionType,
            answers: answers,
            pairs: question.pairs.map((pair: any) => ({
                left: {
                    id: pair.left.id,
                    text: pair.left.text,
                    image: pair.left.image,
                },
                right: {
                    id: pair.right.id,
                    text: pair.right.text,
                    image: pair.right.image,
                },
            })),
        }

        setTest((prev: any) => {
            const newNumber = prev.tasks.length + 1

            return {
                ...prev,
                tasks: [
                    ...prev.tasks,
                    {
                        ...taskToSave,
                        number: newNumber.toString(),
                    },
                ],
            }
        })

        setQuestion({
            id: '',
            title: '',
            type: '',
            answers: [],
            pairs: [
                {
                    left: { id: nanoid(), text: '', image: '' },
                    right: { id: nanoid(), text: '', image: '' },
                    id: nanoid(),
                },
            ],
        })
        setQuestionType('')
    }

    useEffect(() => {
        if (test?.tasks?.length > 0 && errors.tasks) {
            setErrors((prev) => {
                const { tasks, ...rest } = prev
                return rest
            })
        }
    }, [test.tasks, errors.tasks])

    const deleteTask = useCallback((taskId: any) => {
        setTest((prev) => ({
            ...prev,
            tasks: prev.tasks.filter((task: any) => task.id !== taskId),
        }))
    }, [])

    return (
        <div>
            <h1 className="text-[36px] mb-4 font-bold text-center">
                Оновлення тесту
            </h1>
            <TestBasicInfo
                title={test.title}
                description={test.description}
                timeLimit={test.timeLimit}
                setTitle={handleTitleChange}
                setDescription={handleDescriptionChange}
                setTimeLimit={handleTimeLimitChange}
                errors={errors}
                setErrors={setErrors}
            />

            <TestTasks
                tasks={test.tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
                updateTest={updateTest}
                subject={user?.subject}
                key={test.tasks.length}
                test={test}
                setDeleteImage={setDeleteImage}
                typeEditing={'edit'}
                setEditedImages={setEditedImages}
            />
            <CreateTestTask
                subject={user?.subject}
                key={questionType}
                questionType={questionType}
                setQuestionType={setQuestionType}
                setTest={setTest}
                setModalOpen={setModalOpen}
                question={question}
                setQuestion={setQuestion}
                toggleAnswerCorrect={toggleAnswerCorrect}
                handleSaveMatchingTask={handleSaveMatchingTask}
                tasksError={errors.tasks}
                setEditedImages={setEditedImages}
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
