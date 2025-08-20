'use client'

import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import renderBoldText from '@/helpers/renderBoldText'

const ViewTest = () => {
    const params = useParams()
    const testId = params?.id
    const { user, setUser } = useUser()
    const [test, setTest] = useState({
        title: '',
        description: '',
        timeLimit: 0,
        endTime: '',
        teacherId: user?.id,
        tasks: [],
    })
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

    return (
        <div>
            <h1 className="text-[32px] mb-4 font-bold text-center">
                Завдання тесту
            </h1>
            <div>
                {test.tasks.length > 0 &&
                    test.tasks.map((task: any, index: any) => (
                        <div key={task.id || index}>
                            {task.type === 'multiple' && (
                                <div className="bg-white shadow-lg rounded-2xl mb-8 max-w-3xl mx-auto overflow-hidden border border-gray-200">
                                    <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <p className="text-xl font-semibold text-gray-800">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4">
                                            {user?.subject === 'Mathematics' ||
                                            user?.status === 'Admin' ? (
                                                <LatextTranform
                                                    content={task.title}
                                                />
                                            ) : (
                                                renderBoldText(task.title)
                                            )}
                                        </div>

                                        {task.image && (
                                            <div className="w-full mt-4 overflow-hidden rounded-xl border">
                                                <Image
                                                    src={task.image}
                                                    alt={task.title}
                                                    width={237}
                                                    height={237}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        )}

                                        <div className="mt-6 space-y-3">
                                            {task.answers.map(
                                                (answer: any, idx: number) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                answer.isCorrect
                                                            }
                                                            readOnly
                                                            className="w-5 h-5 accent-blue-600"
                                                        />
                                                        <div className="font-medium break-words">
                                                            {user?.subject ===
                                                                'Mathematics' ||
                                                            user?.status ===
                                                                'Admin' ? (
                                                                <LatextTranform
                                                                    content={
                                                                        answer.text
                                                                    }
                                                                />
                                                            ) : (
                                                                renderBoldText(
                                                                    answer.text
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {task.type === 'matching' && (
                                <div className="bg-white shadow-lg rounded-2xl mb-8 max-w-3xl mx-auto overflow-hidden border border-gray-200">
                                    <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <p className="text-xl font-semibold text-gray-800">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4">
                                            {user?.subject === 'Mathematics' ||
                                            user?.status === 'Admin' ? (
                                                <LatextTranform
                                                    content={task.title}
                                                />
                                            ) : (
                                                renderBoldText(task.title)
                                            )}
                                        </div>

                                        {task.image && (
                                            <div className="w-full mt-4 overflow-hidden rounded-xl border">
                                                <Image
                                                    src={task.image}
                                                    alt={task.title}
                                                    width={237}
                                                    height={237}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="mt-6 space-y-3">
                                            {task.pairs.map(
                                                (pair: any, idx: number) => {
                                                    const isFake =
                                                        !pair.left.text ||
                                                        !pair.right.text

                                                    return (
                                                        <div
                                                            key={idx}
                                                            className={`grid grid-cols-12 items-center gap-4 px-4 py-3 rounded-xl border 
                                ${
                                    isFake
                                        ? 'bg-gray-100 border-dashed border-gray-300 text-gray-400'
                                        : 'bg-white border-gray-200 shadow-sm hover:shadow-md transition'
                                }`}
                                                        >
                                                            <div className="col-span-1 text-sm text-gray-400">
                                                                {idx + 1}.
                                                            </div>

                                                            <div className="col-span-5 font-medium break-words">
                                                                {user?.subject ===
                                                                    'Mathematics' ||
                                                                user?.status ===
                                                                    'Admin' ? (
                                                                    <LatextTranform
                                                                        content={
                                                                            pair
                                                                                .left
                                                                                .text ||
                                                                            '…'
                                                                        }
                                                                    />
                                                                ) : (
                                                                    renderBoldText(
                                                                        pair
                                                                            .left
                                                                            .text ||
                                                                            '—'
                                                                    )
                                                                )}
                                                            </div>

                                                            <div className="col-span-1 text-center text-gray-400">
                                                                ⇄
                                                            </div>

                                                            <div className="col-span-5 font-medium break-words text-right">
                                                                {user?.subject ===
                                                                    'Mathematics' ||
                                                                user?.status ===
                                                                    'Admin' ? (
                                                                    <LatextTranform
                                                                        content={
                                                                            pair
                                                                                .right
                                                                                .text ||
                                                                            '?'
                                                                        }
                                                                    />
                                                                ) : (
                                                                    renderBoldText(
                                                                        pair
                                                                            .right
                                                                            .text ||
                                                                            '—'
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {task.type === 'written' && (
                                <div className="bg-white shadow-lg rounded-2xl mb-8 max-w-3xl mx-auto overflow-hidden border border-gray-200">
                                    <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <p className="text-xl font-semibold text-gray-800">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4">
                                            {user?.subject === 'Mathematics' ||
                                            user?.status === 'Admin' ? (
                                                <LatextTranform
                                                    content={task.title}
                                                />
                                            ) : (
                                                renderBoldText(task.title)
                                            )}
                                        </div>

                                        {task.image && (
                                            <div className="w-full mt-4 overflow-hidden rounded-xl border">
                                                <Image
                                                    src={task.image}
                                                    alt={task.title}
                                                    width={237}
                                                    height={237}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="mt-6 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50">
                                            <p className="font-medium text-gray-700 mb-2">
                                                Відповідь:
                                            </p>
                                            <div className="font-medium">
                                                {user?.subject ===
                                                    'Mathematics' ||
                                                user?.status === 'Admin' ? (
                                                    <LatextTranform
                                                        content={
                                                            task.answers?.[0]
                                                                ?.text ||
                                                            'Немає відповіді'
                                                        }
                                                    />
                                                ) : (
                                                    renderBoldText(
                                                        task.answers?.[0]
                                                            ?.text ||
                                                            'Немає відповіді'
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ViewTest
