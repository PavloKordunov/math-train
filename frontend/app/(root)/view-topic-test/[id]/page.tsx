'use client'

import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'

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
                                <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[24px] font-bold">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <LatextTranform
                                        content={task.title}
                                        className="text-xl font-semibold mb-4 max-w-full"
                                    />
                                    {task.image && (
                                        <div className="w-full h-fit overflow-hidden rounded-[21px]">
                                            <Image
                                                src={task.image}
                                                alt={task.title}
                                                width={237}
                                                height={237}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    {task.answers.map(
                                        (answer: any, idx: any) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-4 mt-4"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={answer.isCorrect}
                                                    readOnly
                                                />
                                                <LatextTranform
                                                    content={answer.text}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            {task.type === 'matching' && (
                                <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[24px] font-bold">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <LatextTranform
                                        content={task.title}
                                        className="text-xl font-semibold mb-4"
                                    />
                                    {task.image && (
                                        <div className="w-full h-fit overflow-hidden rounded-[21px]">
                                            <Image
                                                src={task.image}
                                                alt={task.title}
                                                width={237}
                                                height={237}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    {task.pairs.map((pair: any, idx: any) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-4 mt-4"
                                        >
                                            <div className="flex items-center">
                                                <p className="font-medium">
                                                    {idx + 1}.
                                                </p>
                                                <LatextTranform
                                                    content={pair.left.text}
                                                />
                                            </div>
                                            <span className="text-gray-500">
                                                —
                                            </span>
                                            <LatextTranform
                                                content={pair.right.text}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {task.type === 'written' && (
                                <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[24px] font-bold">
                                            Запитання {task.number}
                                        </p>
                                    </div>
                                    <LatextTranform
                                        content={task.title}
                                        className="text-xl font-semibold mb-4"
                                    />
                                    {task.image && (
                                        <div className="w-full h-fit overflow-hidden rounded-[21px]">
                                            <Image
                                                src={task.image}
                                                alt={task.title}
                                                width={237}
                                                height={237}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 mt-4">
                                        <p className="font-medium">
                                            Відповідь:{' '}
                                        </p>
                                        <LatextTranform
                                            content={
                                                task.answers?.[0]?.text ||
                                                'Немає відповіді'
                                            }
                                        />
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
