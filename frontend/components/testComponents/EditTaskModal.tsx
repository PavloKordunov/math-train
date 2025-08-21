'use client'

import { useState, useEffect, useCallback } from 'react'
import { nanoid } from 'nanoid'
import MathInput from '../MathInput'
import { MdDelete } from 'react-icons/md'
import Image from 'next/image'
import BoldTextInput from '../BoldTextInput'
import { useUser } from '@/hooks/useUser'

type ErrorsShape = {
    title?: string
    answers?: string[]
    correctAnswer?: string
    sizeAnswer?: string
    pairs?: string
}

const EditTaskModal = ({
    task,
    onSave,
    onClose,
    subject,
    setDeleteImage,
    setEditedImages,
}: any) => {
    const { user } = useUser()

    const [editedTask, setEditedTask] = useState(
        JSON.parse(JSON.stringify(task))
    )
    const [errors, setErrors] = useState<ErrorsShape>({})

    useEffect(() => {
        setEditedTask(JSON.parse(JSON.stringify(task)))
        setErrors({})
    }, [task])

    const validatePairsRealtime = (pairs: any[]): string | undefined => {
        if (pairs.length < 1) {
            return 'Потрібна принаймні одна пара'
        } else {
            const hasFullPair = pairs.some(
                (p: any) =>
                    (p.left?.text?.trim() !== '' || p.left?.image) &&
                    (p.right?.text?.trim() !== '' || p.right?.image)
            )
            const allPairsValid = pairs.every(
                (p: any) =>
                    p.left?.text?.trim() !== '' ||
                    p.right?.text?.trim() !== '' ||
                    p.left?.image ||
                    p.right?.image
            )

            if (!hasFullPair) {
                return 'Потрібна хоча б одна пара з обома сторонами заповненими'
            } else if (!allPairsValid) {
                return 'Кожна пара повинна мати хоча б одну частину заповнену'
            }
        }
        return ''
    }

    useEffect(() => {
        if (editedTask.type === 'multiple') {
            if (!editedTask.answers || editedTask.answers.length < 1) {
                setErrors((prev) => ({
                    ...prev,
                    sizeAnswer: 'Потрібно додати хоча б одну відповідь',
                }))
            } else if (errors.sizeAnswer) {
                setErrors((prev) => ({ ...prev, sizeAnswer: '' }))
            }
        }
    }, [editedTask.answers, editedTask.type])

    const handleTitleChange = (val: any) => {
        setEditedTask((prev: any) => ({ ...prev, title: val }))
        if (val && val.trim()) {
            setErrors((prev) => ({ ...prev, title: undefined }))
        }
    }

    const handleAnswerTextChange = (index: number, text: string) => {
        setEditedTask((prev: any) => {
            const updatedAnswers = [...(prev.answers || [])]
            if (!updatedAnswers[index]) {
                updatedAnswers[index] = {
                    text: '',
                    isCorrect: false,
                    id: nanoid(),
                    image: '',
                }
            }
            updatedAnswers[index].text = text
            return { ...prev, answers: updatedAnswers }
        })
        setErrors((prev) => {
            const newAnswersErr = prev.answers ? [...prev.answers] : []
            if (text && text.trim()) {
                newAnswersErr[index] = ''
            }
            return { ...prev, answers: newAnswersErr }
        })
    }

    const handleAnswerCorrectChange = (index: number) => {
        setEditedTask((prev: any) => {
            const updatedAnswers = (prev.answers || []).map(
                (answer: any, i: number) => ({
                    ...answer,
                    isCorrect: i === index,
                })
            )
            return { ...prev, answers: updatedAnswers }
        })
        setErrors((prev) => ({ ...prev, correctAnswer: undefined }))
    }

    const handlePairLeftChange = (index: number, text: string) => {
        setEditedTask((prev: any) => {
            const updatedPairs = [...(prev.pairs || [])]
            if (!updatedPairs[index]) {
                updatedPairs[index] = {
                    left: { id: nanoid(), text: '', image: '' },
                    right: { id: nanoid(), text: '', image: '' },
                    id: nanoid(),
                }
            }
            updatedPairs[index].left.text = text

            setErrors((errPrev) => ({
                ...errPrev,
                pairs: validatePairsRealtime(updatedPairs),
            }))
            return { ...prev, pairs: updatedPairs }
        })
    }

    const handlePairRightChange = (index: number, text: string) => {
        setEditedTask((prev: any) => {
            const updatedPairs = [...(prev.pairs || [])]
            if (!updatedPairs[index]) {
                updatedPairs[index] = {
                    left: { id: nanoid(), text: '', image: '' },
                    right: { id: nanoid(), text: '', image: '' },
                    id: nanoid(),
                }
            }
            updatedPairs[index].right.text = text
            setErrors((errPrev) => ({
                ...errPrev,
                pairs: validatePairsRealtime(updatedPairs),
            }))
            return { ...prev, pairs: updatedPairs }
        })
    }

    const addPair = () => {
        setEditedTask((prev: any) => {
            const updatedPairs = [
                ...(prev.pairs || []),
                {
                    left: { id: nanoid(), text: '', image: '' },
                    right: { id: nanoid(), text: '', image: '' },
                    id: nanoid(),
                },
            ]
            return { ...prev, pairs: updatedPairs }
        })
    }

    const removePair = (index: number) => {
        const pairToRemove = editedTask?.pairs?.[index]
        const leftImage = pairToRemove?.left?.image
        const rightImage = pairToRemove?.right?.image

        setEditedTask((prev: any) => {
            const updatedPairs = [...(prev.pairs || [])]
            updatedPairs.splice(index, 1)

            return { ...prev, pairs: updatedPairs }
        })

        if (leftImage) {
            setDeleteImage((prev: any) => [...prev, leftImage])
        }
        if (rightImage) {
            setDeleteImage((prev: any) => [...prev, rightImage])
        }

        setErrors((prev) => ({
            ...prev,
            pairs: validatePairsRealtime(
                editedTask.pairs?.filter((_: any, i: any) => i !== index) || []
            ),
        }))
    }

    const handleAddAnswer = useCallback(() => {
        setEditedTask((prev: any) => {
            const updated = {
                ...prev,
                answers: [
                    ...(prev.answers || []),
                    { text: '', isCorrect: false, id: nanoid(), image: '' },
                ],
            }
            return updated
        })
        setErrors((prev) => {
            const ansErr = prev.answers ? [...prev.answers, ''] : ['']
            return { ...prev, answers: ansErr, sizeAnswer: undefined }
        })
    }, [])

    const handleRemoveAnswer = useCallback(
        (index: number) => {
            const answerToRemove = editedTask?.answers?.[index]
            const removedImage = answerToRemove?.image

            setEditedTask((prev: any) => {
                const newAnswers = [...(prev.answers || [])]
                newAnswers.splice(index, 1)
                return { ...prev, answers: newAnswers }
            })

            if (removedImage) {
                setDeleteImage((prev: any) => [...prev, removedImage])
            }
            setErrors((prev) => {
                const out: any = { ...prev }
                if (out.answers) {
                    const newAnswersErr = [...out.answers]
                    if (newAnswersErr.length > index)
                        newAnswersErr.splice(index, 1)
                    out.answers = newAnswersErr
                }

                if (editedTask.answers && editedTask.answers.length - 1 >= 1) {
                    out.sizeAnswer = undefined
                }
                return out
            })
        },
        [editedTask]
    )

    const validateBeforeSave = (): boolean => {
        let valid = true
        const newErrors: ErrorsShape = {}

        if (
            (!editedTask.title || editedTask.title.trim() === '') &&
            !editedTask.image
        ) {
            newErrors.title = 'Потрібно ввести умову завдання'
            valid = false
        }

        if (editedTask.type === 'multiple' || editedTask.type === 'written') {
            const answerErrs: string[] = []
            const currentAnswers = editedTask.answers || []
            currentAnswers.forEach((ans: any, idx: number) => {
                if ((!ans.text || ans.text.trim() === '') && !ans.image) {
                    answerErrs[idx] = 'Порожня відповідь'
                    valid = false
                } else {
                    answerErrs[idx] = ''
                }
            })
            newErrors.answers = answerErrs
        }

        if (editedTask.type === 'multiple') {
            if (!editedTask.answers || editedTask.answers.length < 1) {
                newErrors.sizeAnswer = 'Потрібно додати хоча б одну відповідь'
                valid = false
            } else {
                const hasCorrect = (editedTask.answers || []).some(
                    (ans: any) => ans.isCorrect
                )
                if (!hasCorrect) {
                    newErrors.correctAnswer =
                        'Потрібно вибрати хоча б одну правильну відповідь'
                    valid = false
                }
            }
        }

        if (editedTask.type === 'matching') {
            if (!editedTask.pairs || editedTask.pairs.length < 1) {
                newErrors.pairs = 'Потрібна принаймні одна пара'
                valid = false
            } else {
                const hasFullPair = editedTask.pairs.some(
                    (p: any) =>
                        (p.left?.text?.trim() !== '' || p.left?.image) &&
                        (p.right?.text?.trim() !== '' || p.right?.image)
                )
                const allPairsValid = editedTask.pairs.every(
                    (p: any) =>
                        p.left?.text?.trim() !== '' ||
                        p.right?.text?.trim() !== '' ||
                        p.left?.image ||
                        p.right?.image
                )

                if (!hasFullPair) {
                    newErrors.pairs =
                        'Потрібна хоча б одна пара з обома сторонами заповненими'
                    valid = false
                } else if (!allPairsValid) {
                    newErrors.pairs =
                        'Кожна пара повинна мати хоча б одну частину заповнену'
                    valid = false
                }
            }
        }

        setErrors(newErrors)
        return valid
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!validateBeforeSave()) return
        onSave(editedTask)
    }

    const handleRemoveImage = (type: string) => {
        setEditedTask((prev: any) => {
            if (type === 'title') {
                return { ...prev, image: '' }
            }
            if (prev.answers.some((ans: any) => `answer${ans.id}` === type)) {
                return {
                    ...prev,
                    answers: prev.answers.map((ans: any) =>
                        `answer${ans.id}` === type ? { ...ans, image: '' } : ans
                    ),
                }
            }

            return {
                ...prev,
                pairs: prev.pairs.map((pair: any) => {
                    if (`left${pair.left.id}` === type) {
                        return {
                            ...pair,
                            left: { ...pair.left, image: '' },
                        }
                    } else if (`right${pair.right.id}` === type) {
                        return {
                            ...pair,
                            right: { ...pair.right, image: '' },
                        }
                    }
                    return pair
                }),
            }
        })
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1000">
            <div className="bg-white rounded-[31px] p-6 w-full max-w-200 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Редагувати завдання</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 text-[32px] hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>

                <form className="max-w-200" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Заголовок:
                        </label>

                        {subject === 'Mathematics' ||
                        user?.status === 'Admin' ? (
                            <MathInput
                                value={editedTask.title}
                                onChange={handleTitleChange}
                                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                inputType="textarea"
                                setQuestion={setEditedTask}
                                setEditedImages={setEditedImages}
                            />
                        ) : (
                            <BoldTextInput
                                value={editedTask.title}
                                onChange={handleTitleChange}
                                placeholder="Введіть відповідь"
                                inputType="textarea"
                                setQuestion={setEditedTask}
                                setEditedImages={setEditedImages}
                            />
                        )}
                        {errors.title && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.title}
                            </p>
                        )}

                        {editedTask?.image && (
                            <div className="relative inline-block">
                                <img
                                    src={editedTask.image}
                                    alt=""
                                    className="max-w-full max-h-50 rounded-lg"
                                />
                                <button
                                    onClick={() => {
                                        setDeleteImage((del: any) => [
                                            ...del,
                                            editedTask.image,
                                        ])
                                        handleRemoveImage('title')
                                    }}
                                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                                >
                                    <MdDelete
                                        size={20}
                                        className="text-red-500"
                                    />
                                </button>
                            </div>
                        )}
                    </div>

                    {editedTask.type === 'multiple' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Варіанти відповідей:
                            </h3>
                            {(editedTask.answers || []).map(
                                (answer: any, index: any) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-1 mb-2"
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                checked={answer.isCorrect}
                                                onChange={() =>
                                                    handleAnswerCorrectChange(
                                                        index
                                                    )
                                                }
                                            />

                                            {subject === 'Mathematics' ||
                                            user?.status === 'Admin' ? (
                                                <MathInput
                                                    value={answer.text}
                                                    onChange={(val: string) => {
                                                        handleAnswerTextChange(
                                                            index,
                                                            val
                                                        )
                                                    }}
                                                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                                    index={answer.id}
                                                    setQuestion={setEditedTask}
                                                    setEditedImages={
                                                        setEditedImages
                                                    }
                                                />
                                            ) : (
                                                <BoldTextInput
                                                    value={answer.text}
                                                    onChange={(val: string) => {
                                                        handleAnswerTextChange(
                                                            index,
                                                            val
                                                        )
                                                    }}
                                                    placeholder="Введіть відповідь"
                                                    index={answer.id}
                                                    setQuestion={setEditedTask}
                                                    setEditedImages={
                                                        setEditedImages
                                                    }
                                                />
                                            )}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveAnswer(index)
                                                }
                                                className="text-red-500 hover:underline"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        {answer.image && (
                                            <div className="relative inline-block mt-1  w-max">
                                                <img
                                                    src={answer.image}
                                                    alt=""
                                                    className="max-w-full max-h-30 rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setDeleteImage(
                                                            (del: any) => [
                                                                ...del,
                                                                answer.image,
                                                            ]
                                                        )
                                                        handleRemoveImage(
                                                            `answer${answer.id}`
                                                        )
                                                    }}
                                                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                                                >
                                                    <MdDelete
                                                        size={20}
                                                        className="text-red-500"
                                                    />
                                                </button>
                                            </div>
                                        )}
                                        {errors.answers &&
                                            errors.answers[index] && (
                                                <p className="text-sm text-red-600 mt-1">
                                                    {errors.answers[index]}
                                                </p>
                                            )}
                                    </div>
                                )
                            )}
                            <button
                                type="button"
                                onClick={handleAddAnswer}
                                className="mt-2 text-sm text-blue-600 hover:underline"
                            >
                                ➕ Додати відповідь
                            </button>
                            {errors.sizeAnswer && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.sizeAnswer}
                                </p>
                            )}
                            {errors.correctAnswer && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.correctAnswer}
                                </p>
                            )}
                        </div>
                    )}

                    {editedTask.type === 'matching' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Пари:
                            </h3>
                            {editedTask.pairs &&
                                editedTask.pairs.map(
                                    (pair: any, index: any) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 mb-4"
                                        >
                                            <div className="flex-1">
                                                {subject === 'Mathematics' ||
                                                user?.status === 'Admin' ? (
                                                    <MathInput
                                                        value={pair.left.text}
                                                        onChange={(
                                                            val: string
                                                        ) => {
                                                            handlePairLeftChange(
                                                                index,
                                                                val
                                                            )
                                                        }}
                                                        className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                                        index={`left${pair.left.id}`}
                                                        typeAnswer={'matching'}
                                                        setQuestion={
                                                            setEditedTask
                                                        }
                                                        setEditedImages={
                                                            setEditedImages
                                                        }
                                                    />
                                                ) : (
                                                    <BoldTextInput
                                                        value={pair.left.text}
                                                        onChange={(
                                                            val: string
                                                        ) => {
                                                            handlePairLeftChange(
                                                                index,
                                                                val
                                                            )
                                                        }}
                                                        placeholder="Введіть відповідь"
                                                        typeAnswer={'matching'}
                                                        index={`left${pair.left.id}`}
                                                        setQuestion={
                                                            setEditedTask
                                                        }
                                                        setEditedImages={
                                                            setEditedImages
                                                        }
                                                    />
                                                )}
                                                {pair.left.image && (
                                                    <div className="relative inline-block mt-1">
                                                        <img
                                                            src={
                                                                pair.left.image
                                                            }
                                                            alt=""
                                                            className="max-w-full max-h-30 rounded-lg"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setDeleteImage(
                                                                    (
                                                                        del: any
                                                                    ) => [
                                                                        ...del,
                                                                        pair
                                                                            .left
                                                                            .image,
                                                                    ]
                                                                )
                                                                handleRemoveImage(
                                                                    `left${pair.left.id}`
                                                                )
                                                            }}
                                                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                                                        >
                                                            <MdDelete
                                                                size={20}
                                                                className="text-red-500"
                                                            />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-gray-500">
                                                —
                                            </span>
                                            <div className="flex-1">
                                                {subject === 'Mathematics' ||
                                                user?.status === 'Admin' ? (
                                                    <MathInput
                                                        value={pair.right.text}
                                                        onChange={(
                                                            val: string
                                                        ) => {
                                                            handlePairRightChange(
                                                                index,
                                                                val
                                                            )
                                                        }}
                                                        className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                                        index={`right${pair.right.id}`}
                                                        typeAnswer={'matching'}
                                                        setQuestion={
                                                            setEditedTask
                                                        }
                                                        setEditedImages={
                                                            setEditedImages
                                                        }
                                                    />
                                                ) : (
                                                    <BoldTextInput
                                                        value={pair.right.text}
                                                        onChange={(
                                                            val: string
                                                        ) => {
                                                            handlePairRightChange(
                                                                index,
                                                                val
                                                            )
                                                        }}
                                                        placeholder="Введіть відповідь"
                                                        index={`right${pair.right.id}`}
                                                        typeAnswer={'matching'}
                                                        setQuestion={
                                                            setEditedTask
                                                        }
                                                        setEditedImages={
                                                            setEditedImages
                                                        }
                                                    />
                                                )}
                                                {pair.right.image && (
                                                    <div className="relative inline-block mt-1">
                                                        <img
                                                            src={
                                                                pair.right.image
                                                            }
                                                            alt=""
                                                            className="max-w-full max-h-30 rounded-lg"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setDeleteImage(
                                                                    (
                                                                        del: any
                                                                    ) => [
                                                                        ...del,
                                                                        pair
                                                                            .right
                                                                            .image,
                                                                    ]
                                                                )
                                                                handleRemoveImage(
                                                                    `right${pair.right.id}`
                                                                )
                                                            }}
                                                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                                                        >
                                                            <MdDelete
                                                                size={20}
                                                                className="text-red-500"
                                                            />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removePair(index)
                                                }
                                                className="text-red-500 hover:underline"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    )
                                )}
                            {errors.pairs && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.pairs}
                                </p>
                            )}
                            <button
                                type="button"
                                onClick={addPair}
                                className="mt-4 text-sm text-blue-600 hover:underline"
                            >
                                ➕ Додати пару
                            </button>
                        </div>
                    )}

                    {editedTask.type === 'written' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Відповідь:
                            </h3>
                            {subject === 'Mathematics' ||
                            user?.status === 'Admin' ? (
                                <MathInput
                                    value={editedTask.answers?.[0]?.text || ''}
                                    onChange={(val: string) => {
                                        handleAnswerTextChange(0, val)
                                    }}
                                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                    typeAnswer={'ansWrite'}
                                />
                            ) : (
                                <BoldTextInput
                                    value={editedTask.answers?.[0]?.text}
                                    onChange={(val: string) => {
                                        handleAnswerTextChange(0, val)
                                    }}
                                    placeholder="Введіть відповідь"
                                />
                            )}
                            {errors.answers && errors.answers[0] && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.answers[0]}
                                </p>
                            )}
                        </div>
                    )}

                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Зберегти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTaskModal
