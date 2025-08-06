'use client'

import React, { useState, useEffect } from 'react'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

interface MatchingTaskProps {
    task: any
    isSaved: boolean
    onSave: (userAnswers: any) => void
    savedMatches?: any
    isMobile?: boolean
}

const MatchingTask: React.FC<MatchingTaskProps> = ({
    task,
    isSaved,
    onSave,
    savedMatches = [],
    isMobile = false,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [taskMatches, setTaskMatches] = useState<{
        [leftIndex: number]: string | null
    }>({})
    const [shuffledRightPairs, setShuffledRightPairs] = useState<any[]>([])

    const shuffleArray = (array: any[]) => {
        const newArray = [...array]
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }
        return newArray
    }

    useEffect(() => {
        const rightPairs = task.pairs.filter((pair: any) => pair.right)
        setShuffledRightPairs(shuffleArray(rightPairs))
    }, [task.pairs])

    useEffect(() => {
        if (savedMatches && savedMatches.length > 0) {
            const initialMatches: { [leftIndex: number]: string | null } = {}

            savedMatches.forEach((match: any) => {
                if (match.left) {
                    const leftIndex = task.pairs.findIndex(
                        (pair: any) =>
                            pair.left && pair.left.id === match.left.leftId
                    )

                    if (leftIndex !== -1) {
                        const rightLetter = shuffledRightPairs.findIndex(
                            (pair: any) => pair.right.id === match.left.rightId
                        )

                        if (rightLetter !== -1) {
                            initialMatches[leftIndex] = String.fromCharCode(
                                65 + rightLetter
                            )
                        }
                    }
                }
            })

            setTaskMatches(initialMatches)
        }
    }, [savedMatches, shuffledRightPairs, task.pairs])

    const handleSelectOption = (opt: string) => {
        setSelectedOption(opt)
    }

    const handleMatch = (index: number) => {
        if (selectedOption) {
            setTaskMatches((prev) => ({
                ...prev,
                [index]: selectedOption,
            }))
            setSelectedOption(null)
        }
    }

    const handleRemoveMatch = (index: number) => {
        setTaskMatches((prev) => ({
            ...prev,
            [index]: null,
        }))
    }

    const handleSaveMatching = () => {
        const userAnswers = Object.entries(taskMatches)
            .filter(([_, rightLetter]) => rightLetter !== null)
            .map(([leftIndex, rightLetter]) => {
                const rightPairIndex = Number(rightLetter?.charCodeAt(0)) - 65
                const rightPair = shuffledRightPairs[rightPairIndex]
                const leftPair = task.pairs.filter((pair: any) => pair.left)[
                    parseInt(leftIndex)
                ]
                return {
                    left: {
                        rightId: rightPair?.right.id || '',
                        rightText: rightPair?.right.text,
                        leftId: leftPair?.left.id,
                        leftText: leftPair?.left.text,
                    },
                }
            })
        onSave(userAnswers)
    }

    return (
        <div id={`task-${task.id}`} key={task.id}>
            <h2 className="text-lg md:text-[24px] font-medium mb-4 md:mb-8">
                Завдання {task.number}
            </h2>
            <LatextTranform
                content={task.title}
                className="text-base md:text-[18px] mb-4 md:mb-6 font-medium"
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

            {!isMobile ? (
                <div className="flex flex-col md:flex-row gap-4 md:gap-100 mb-4 md:mb-8">
                    <div className="flex flex-col gap-2 md:gap-4 text-sm md:text-[16px] font-semibold">
                        {task.pairs
                            .filter((pair: any) => pair.left.text)
                            .map((pair: any, index: any) => (
                                <div
                                    className="flex items-center"
                                    key={`left-${index}`}
                                >
                                    <p>{index + 1}. </p>
                                    <LatextTranform
                                        content={pair.left.text}
                                        className="text-base md:text-[18px] ml-1 md:ml-2 font-medium"
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 text-sm md:text-[16px] font-semibold">
                        {shuffledRightPairs.map((pair: any, index: any) => (
                            <div
                                className="flex items-center"
                                key={`right-${index}`}
                            >
                                <p>{String.fromCharCode(65 + index)}. </p>
                                <LatextTranform
                                    content={pair.right.text}
                                    className="text-base md:text-[18px] ml-1 md:ml-2 font-medium"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mb-4 md:mb-8">
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <h3 className="text-base font-semibold mb-2">
                                Питання:
                            </h3>
                            <div className="flex flex-col gap-2 text-sm font-semibold">
                                {task.pairs
                                    .filter((pair: any) => pair.left.text)
                                    .map((pair: any, index: any) => (
                                        <div
                                            className="flex items-start"
                                            key={`mobile-left-${index}`}
                                        >
                                            <p className="min-w-[24px]">
                                                {index + 1}.
                                            </p>
                                            <LatextTranform
                                                content={pair.left.text}
                                                className="text-base ml-1 font-medium"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg">
                            <h3 className="text-base font-semibold mb-2">
                                Варіанти відповідей:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {shuffledRightPairs.map(
                                    (pair: any, index: any) => (
                                        <div
                                            key={`mobile-option-${index}`}
                                            className={`cursor-pointer px-3 py-2 rounded-md font-semibold text-sm flex items-center ${
                                                selectedOption ===
                                                String.fromCharCode(65 + index)
                                                    ? 'bg-blue-200 border-2 border-blue-500'
                                                    : 'bg-green-100'
                                            }`}
                                            onClick={() =>
                                                handleSelectOption(
                                                    String.fromCharCode(
                                                        65 + index
                                                    )
                                                )
                                            }
                                        >
                                            <span className="font-bold mr-1">
                                                {String.fromCharCode(
                                                    65 + index
                                                )}
                                                :
                                            </span>
                                            <LatextTranform
                                                content={pair.right.text}
                                                className="ml-1 inline"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex w-full gap-4 md:gap-8 mb-4">
                {!isMobile ? (
                    <>
                        <div className="w-full md:w-2/3 py-4 md:py-6 px-4 md:px-6 bg-[#D0EFFF] border rounded-lg border-2 border-gray-300 mb-4 md:mb-8 flex">
                            <div className="flex w-1/2 flex-col gap-2 md:gap-3 text-sm md:text-[18px] font-semibold">
                                {task.pairs
                                    .filter((pair: any) => pair.left.text)
                                    .map((_: any, index: any) => (
                                        <div
                                            key={`left-box-${index}`}
                                            className="w-full py-1 md:py-2 px-2 md:px-4 bg-[#81D5FF] rounded-md"
                                        >
                                            <p>{index + 1}.</p>
                                        </div>
                                    ))}
                            </div>

                            <div>
                                {task.pairs
                                    .filter((pair: any) => pair.left.text)
                                    .map((_: any, index: any) => (
                                        <div
                                            key={`arrow-${index}`}
                                            className="h-[36px] md:h-[43px] flex justify-center items-center mb-[8px] md:mb-[12px]"
                                        >
                                            <span className="text-2xl md:text-3xl text-gray-500">
                                                →
                                            </span>
                                        </div>
                                    ))}
                            </div>

                            <div className="flex w-1/2 flex-col gap-2 md:gap-3 text-sm md:text-[18px] font-semibold">
                                {task.pairs
                                    .filter((pair: any) => pair.left.text)
                                    .map((_: any, index: any) => (
                                        <div
                                            key={`match-${index}`}
                                            className={`w-full h-9 md:h-[43px] flex items-center justify-between px-2 md:px-4 rounded-md cursor-pointer transition-all duration-200 ${
                                                taskMatches[index]
                                                    ? 'bg-[#5EFF66]'
                                                    : 'bg-white border border-gray-300'
                                            }`}
                                            onClick={() => handleMatch(index)}
                                        >
                                            {taskMatches[index] ? (
                                                <>
                                                    <p>{taskMatches[index]}</p>
                                                    <div
                                                        className="bg-gray-200 p-1 md:p-2 cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleRemoveMatch(
                                                                index
                                                            )
                                                        }}
                                                    >
                                                        <FaTimes
                                                            size={12}
                                                            color="#000"
                                                        />
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="hidden md:block w-1/3 py-4 md:py-6 px-4 md:px-6 bg-[#ACFFB6] border rounded-lg border-2 border-gray-300 mb-4 md:mb-8">
                            <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-[18px] font-semibold">
                                {shuffledRightPairs.map(
                                    (pair: any, index: any) => (
                                        <div
                                            key={`option-${index}`}
                                            className={`cursor-pointer w-fit px-3 md:px-4 py-1 md:py-2 rounded-md font-semibold ${
                                                selectedOption ===
                                                String.fromCharCode(65 + index)
                                                    ? 'bg-gray-300'
                                                    : 'bg-[#5EFF66]'
                                            }`}
                                            onClick={() =>
                                                handleSelectOption(
                                                    String.fromCharCode(
                                                        65 + index
                                                    )
                                                )
                                            }
                                        >
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full py-4 px-4 bg-[#D0EFFF] border rounded-lg border-2 border-gray-300">
                        <div className="flex flex-col gap-4">
                            {task.pairs
                                .filter((pair: any) => pair.left.text)
                                .map((pair: any, index: any) => (
                                    <div
                                        key={`mobile-match-${index}`}
                                        className="flex items-center"
                                    >
                                        <div className="w-1/2 h-10 flex items-center px-4 bg-blue-200 rounded-lg font-bold">
                                            {index + 1}
                                        </div>
                                        <div className="mx-2 text-gray-500">
                                            →
                                        </div>
                                        <div
                                            className={`w-1/2 h-12 flex items-center justify-center px-4 rounded-md cursor-pointer transition-all duration-200 ${
                                                taskMatches[index]
                                                    ? 'bg-[#5EFF66]'
                                                    : 'bg-white border-2 border-gray-300'
                                            }`}
                                            onClick={() => handleMatch(index)}
                                        >
                                            {taskMatches[index] ? (
                                                <div className="flex items-center justify-between w-full">
                                                    <p className="font-bold">
                                                        {taskMatches[index]}
                                                    </p>
                                                    <div
                                                        className="bg-gray-200 p-1 rounded cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleRemoveMatch(
                                                                index
                                                            )
                                                        }}
                                                    >
                                                        <FaTimes
                                                            size={10}
                                                            color="#000"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-sm">
                                                    ?
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>

            <button
                className="bg-[#CA193A] px-3 md:px-4 py-1 md:py-2 text-white rounded-md font-semibold mb-4 md:mb-6 text-sm md:text-base"
                onClick={handleSaveMatching}
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

export default React.memo(MatchingTask)
