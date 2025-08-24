'use client'

import { useUser } from '@/hooks/useUser'
import { nanoid } from 'nanoid'
import { useMemo, useState } from 'react'

interface Task {
    id: string
    title: string
    type: 'multiple' | 'matching' | 'written'
    answers: any[]
    number: number
    pairs: any[]
    image: string
}

interface FormData {
    title: string
    difficulty: string
    additional: string
    subject?: string
}

interface AiModalProps {
    onClose: () => void
    setTest: (test: any) => void
}

const AiModal = ({ onClose, setTest }: AiModalProps) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()

    const [formData, setFormData] = useState<FormData>({
        title: '',
        difficulty: '',
        additional: '',
        subject: user?.subject,
    })
    const [isLoading, setIsLoading] = useState(false)

    const difficultyOptions = useMemo(
        () => [
            { value: 'Легка', label: 'Легка' },
            { value: 'Середня', label: 'Середня' },
            { value: 'Важка', label: 'Важка' },
            { value: 'Дуже важка/Олімпіадна', label: 'Дуже важка' },
        ],
        []
    )
    const [tasks, setTasks] = useState<Task[]>([])

    const generateTasks = (aiTasks: any[]) => {
        const newTasks: Task[] = []

        aiTasks.forEach((aiTask: any, index: number) => {
            const number = tasks.length + index

            if (aiTask.type === 'multiple') {
                newTasks.push({
                    id: nanoid(),
                    title: aiTask.taskTitle,
                    type: 'multiple',
                    answers: aiTask.answers.map((answer: any) => ({
                        text: answer.name,
                        isCorrect: answer.isCorrect,
                        id: nanoid(),
                    })),
                    number: number + 1,
                    pairs: [],
                    image: '',
                })
            } else if (aiTask.type === 'matching') {
                newTasks.push({
                    id: nanoid(),
                    title: aiTask.taskTitle,
                    type: 'matching',
                    answers: aiTask.pairs.map((pair: any) => ({
                        left: {
                            leftId: nanoid(),
                            rightId: nanoid(),
                            leftText: pair.question,
                            rightText: pair.answer,
                        },
                    })),
                    number: number + 1,
                    pairs: aiTask.pairs.map((pair: any) => ({
                        left: {
                            id: 'QEmy8kgfbAI4yycgpXHTA',
                            text: pair.question,
                        },
                        right: {
                            id: 'JdSq0xzpv4yGMY2Mb1A2q',
                            text: pair.answer,
                        },
                    })),
                    image: '',
                })
            } else if (aiTask.type === 'written') {
                newTasks.push({
                    id: nanoid(),
                    title: aiTask.taskTitle,
                    type: 'written',
                    answers: [
                        {
                            text: aiTask.answer,
                            id: nanoid(),
                        },
                    ],
                    number: number + 1,
                    pairs: [],
                    image: '',
                })
            }
        })

        setTasks((prev) => [...prev, ...newTasks])
        return newTasks
    }

    const setDataToTest = (data: any, newTasks: Task[]) => {
        setTest((prev: any) => ({
            ...prev,
            title: data.title || prev.title,
            tasks: [...prev.tasks, ...newTasks],
        }))
    }

    const generateWithAi = async () => {
        if (!formData.title || !formData.difficulty) {
            alert('Будь ласка, заповніть обовʼязкові поля')
            return
        }

        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/ai/generate-test`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            // const res = await fetch(`${API_URL}/api/ai/generate-test`)

            if (!res.ok) {
                console.log(res)
                throw new Error('Помилка при генерації тесту')
            }

            const data = await res.json()
            const newTasks = generateTasks(data.generatedContent || [])
            console.log(data)
            console.log(formData)
            setDataToTest(data, newTasks)
            onClose()
        } catch (error) {
            console.error(error)
            alert('Сталася помилка при генерації тесту')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-md p-6 max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {isLoading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c1b6d6] mx-auto"></div>
                        <p className="mt-4">Генеруємо тест...</p>
                    </div>
                ) : (
                    <>
                        <div>
                            <label className="block mb-1 text-sm sm:text-base font-medium">
                                Тема тесту *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 mb-4 focus:ring-[#c1b6d6]"
                                placeholder="Наприклад: Числа і вирази"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm sm:text-base font-medium">
                                Складність *
                            </label>
                            <select
                                value={formData.difficulty}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        difficulty: e.target.value,
                                    })
                                }
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] mb-4"
                            >
                                <option value="">Оберіть складність</option>
                                {difficultyOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm sm:text-base font-medium">
                                Додаткові умови
                            </label>
                            <textarea
                                value={formData.additional}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        additional: e.target.value,
                                    })
                                }
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 mb-4 focus:ring-[#c1b6d6] h-24"
                                placeholder="Додаткові побажання щодо тесту"
                            />
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                className="px-4 py-2 text-sm sm:text-base text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                onClick={onClose}
                                disabled={isLoading}
                            >
                                Скасувати
                            </button>
                            <button
                                className="px-4 py-2 text-sm sm:text-base text-white bg-[#c1b6d6] rounded-lg hover:bg-[#a895c9] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={generateWithAi}
                                // disabled={
                                //     isLoading ||
                                //     !formData.title ||
                                //     !formData.difficulty
                                // }
                            >
                                Створити
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AiModal
