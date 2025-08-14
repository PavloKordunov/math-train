'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import LatextTranform from '@/helpers/latexTransform'
import CustomRadio from '@/components/CustomRadio'

const TestReview = () => {
    const params = useParams()
    const testId = params?.id
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [testReview, setTestReview] = useState<any>(null)

    useEffect(() => {
        const getTestReview = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/perfomence/student/${testId}`
                )
                const data = await res.json()
                console.log(data)
                setTestReview(data)
            } catch (error) {
                console.error('Failed to fetch test review:', error)
            }
        }

        getTestReview()
    }, [testId, API_URL])

    if (!testReview) {
        return <div>Loading test review...</div>
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{testReview.testName}</h1>
            <div className="text-xl mb-8">
                Оцінка: {testReview.studentScore} / {testReview.maxScore}
            </div>

            {testReview.answers?.multiple.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Завдання на вибір відповіді
                    </h2>
                    {testReview.answers.multiple.map(
                        (answer: any, index: number) => (
                            <div
                                key={`multiple-${index}`}
                                className="mb-8 p-4 border rounded-lg"
                            >
                                <div
                                    className={`p-2 mb-4 rounded ${
                                        answer.isCorrect
                                            ? 'bg-green-100'
                                            : 'bg-red-100'
                                    }`}
                                >
                                    <span className="font-medium flex items-center gap-2">
                                        Завдання {index + 1}:{' '}
                                        <LatextTranform
                                            content={answer.title}
                                        />{' '}
                                        (
                                        {answer.isCorrect
                                            ? 'Вірно'
                                            : 'Не вірно'}
                                        )
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CustomRadio
                                            checked={true}
                                            isCorrect={answer.isCorrect}
                                            readonly
                                        />
                                        <LatextTranform
                                            content={
                                                answer.userAnswer?.answer ||
                                                'No answer'
                                            }
                                        />
                                    </div>

                                    {!answer.isCorrect && (
                                        <div className="flex items-center gap-3 text-green-600">
                                            <CustomRadio
                                                checked={true}
                                                isCorrect={true}
                                                readonly
                                            />
                                            <LatextTranform
                                                content={
                                                    answer.correctAnswer
                                                        ?.answer ||
                                                    'No correct answer'
                                                }
                                            />
                                            <span className="text-sm">
                                                (Правильна відповідь)
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </section>
            )}
            {testReview.answers?.matching.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Завдання на відповідність
                    </h2>
                    {testReview.answers.matching.map(
                        (answer: any, index: number) => (
                            <div
                                key={`matching-${index}`}
                                className="mb-8 p-4 border rounded-lg"
                            >
                                <div
                                    className={`p-2 mb-4 rounded ${
                                        answer.isCorrect
                                            ? 'bg-green-100'
                                            : 'bg-red-100'
                                    }`}
                                >
                                    <span className="font-medium">
                                        Завдання {index + 1}: {answer.title} (
                                        {answer.isCorrect
                                            ? 'Усі поєднання вірні'
                                            : 'Деякі поєднання не вірні'}
                                        )
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {answer.pairs.map(
                                        (pair: any, pairIndex: number) => (
                                            <div key={`pair-${pairIndex}`}>
                                                <div className="mb-2 font-medium">
                                                    Поєднання {pairIndex + 1}:
                                                </div>
                                                <div className="flex flex-col md:flex-row gap-4">
                                                    <div
                                                        className={`flex-1 p-3 rounded ${
                                                            pair.isCorrect
                                                                ? 'bg-green-50'
                                                                : 'bg-red-50'
                                                        }`}
                                                    >
                                                        <div className="font-medium mb-1">
                                                            Твоя відповідь:
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <LatextTranform
                                                                    content={
                                                                        pair
                                                                            .userAnswer
                                                                            .left
                                                                            .text
                                                                    }
                                                                />
                                                            </div>
                                                            <span className="mb-1">
                                                                →
                                                            </span>
                                                            <div>
                                                                <LatextTranform
                                                                    content={
                                                                        pair
                                                                            .userAnswer
                                                                            .right
                                                                            .text ||
                                                                        'Не вказано'
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {!pair.isCorrect && (
                                                        <div className="flex-1 p-3 rounded bg-green-50">
                                                            <div className="font-medium mb-1">
                                                                Правильна
                                                                відповідь:
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div>
                                                                    <LatextTranform
                                                                        content={
                                                                            pair
                                                                                .correctAnswer
                                                                                .left
                                                                                .text
                                                                        }
                                                                    />
                                                                </div>
                                                                <span className="mb-1">
                                                                    →
                                                                </span>
                                                                <div>
                                                                    <LatextTranform
                                                                        content={
                                                                            pair
                                                                                .correctAnswer
                                                                                .right
                                                                                .text
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </section>
            )}
            {testReview.answers?.written.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Письмове завдання
                    </h2>
                    {testReview.answers.written.map(
                        (answer: any, index: number) => (
                            <div
                                key={`written-${index}`}
                                className="mb-8 p-4 border rounded-lg"
                            >
                                <div
                                    className={`p-2 mb-4 rounded ${
                                        answer.isCorrect
                                            ? 'bg-green-100'
                                            : 'bg-red-100'
                                    }`}
                                >
                                    <span className="font-medium flex items-center gap-2">
                                        Завдання {index + 1}:{' '}
                                        <LatextTranform
                                            content={answer.title}
                                        />{' '}
                                        (
                                        {answer.isCorrect
                                            ? 'Вірно'
                                            : 'Не вірно'}
                                        )
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="font-medium mb-1">
                                            Your answer:
                                        </div>
                                        <div className="p-2 bg-gray-100 rounded">
                                            <LatextTranform
                                                content={
                                                    answer.userAnswer.answer
                                                }
                                            />
                                        </div>
                                    </div>

                                    {!answer.isCorrect && (
                                        <div>
                                            <div className="font-medium mb-1 text-green-600">
                                                Correct answer:
                                            </div>
                                            <div className="p-2 bg-green-50 rounded">
                                                <LatextTranform
                                                    content={
                                                        answer.correctAnswer
                                                            ?.answer ||
                                                        'No correct answer provided'
                                                    }
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </section>
            )}
        </div>
    )
}

export default TestReview
