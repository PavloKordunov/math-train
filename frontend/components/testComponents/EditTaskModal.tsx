'use client'

import { useState, useEffect, useCallback } from 'react'
import { nanoid } from 'nanoid'
import MathInput from '../MathInput'
import { MdDelete } from 'react-icons/md'
import Image from 'next/image'
import BoldTextInput from '../BoldTextInput'

type ErrorsShape = {
    title?: string
    answers?: string[]
    correctAnswer?: string
    sizeAnswer?: string
    pairs?: string
}

const EditTaskModal = ({ task, onSave, onClose, subject }: any) => {
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
                    p.left?.text?.trim() !== '' && p.right?.text?.trim() !== ''
            )
            const allPairsValid = pairs.every(
                (p: any) =>
                    p.left?.text?.trim() !== '' || p.right?.text?.trim() !== ''
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
                setErrors((prev) => ({ ...prev, sizeAnswer: undefined }))
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
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
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
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
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
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
                    id: nanoid(),
                },
            ]
            setErrors((errPrev) => ({
                ...errPrev,
                pairs: validatePairsRealtime(updatedPairs),
            }))
            return { ...prev, pairs: updatedPairs }
        })
    }

    const removePair = (index: number) => {
        setEditedTask((prev: any) => {
            const updatedPairs = [...(prev.pairs || [])]
            updatedPairs.splice(index, 1)
            setErrors((errPrev) => ({
                ...errPrev,
                pairs: validatePairsRealtime(updatedPairs),
            }))
            return { ...prev, pairs: updatedPairs }
        })
    }

    const handleAddAnswer = useCallback(() => {
        setEditedTask((prev: any) => {
            const updated = {
                ...prev,
                answers: [
                    ...(prev.answers || []),
                    { text: '', isCorrect: false, id: nanoid() },
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
            setEditedTask((prev: any) => {
                const newAnswers = [...(prev.answers || [])]
                newAnswers.splice(index, 1)
                return { ...prev, answers: newAnswers }
            })
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

        if (!editedTask.title || editedTask.title.trim() === '') {
            newErrors.title = 'Потрібно ввести умову завдання'
            valid = false
        }

        if (editedTask.type === 'multiple' || editedTask.type === 'written') {
            const answerErrs: string[] = []
            const currentAnswers = editedTask.answers || []
            currentAnswers.forEach((ans: any, idx: number) => {
                if (!ans.text || ans.text.trim() === '') {
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
                        p.left?.text?.trim() !== '' &&
                        p.right?.text?.trim() !== ''
                )
                const allPairsValid = editedTask.pairs.every(
                    (p: any) =>
                        p.left?.text?.trim() !== '' ||
                        p.right?.text?.trim() !== ''
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

    const [base64, setBase64] = useState('')

    const encodeImageFileAsURL = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onloadend = function () {
            const base64String = reader.result as string
            setEditedTask((prev: any) => ({
                ...prev,
                image: base64String,
            }))
        }
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if (base64 && base64 !== editedTask.image) {
            setEditedTask((prev: any) => ({
                ...prev,
                image: base64,
            }))
        }
    }, [base64, editedTask.image])

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

                        {subject === 'Mathematics' ? (
                            <MathInput
                                value={editedTask.title}
                                onChange={handleTitleChange}
                                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                inputType="textarea"
                            />
                        ) : (
                            <BoldTextInput
                                value={editedTask.title}
                                onChange={handleTitleChange}
                                placeholder="Введіть відповідь"
                                inputType="textarea"
                            />
                        )}
                        {errors.title && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.title}
                            </p>
                        )}

                        {editedTask.image ? (
                            <div className="relative w-fit mt-3">
                                <Image
                                    src={editedTask.image}
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-fit max-h-64"
                                />
                                <div
                                    onClick={() =>
                                        setEditedTask((prev: any) => ({
                                            ...prev,
                                            image: '',
                                        }))
                                    }
                                    className="absolute top-[10px] right-[10px] w-7 h-8 cursor-pointer"
                                >
                                    <MdDelete size={24} />
                                </div>
                            </div>
                        ) : (
                            <>
                                <label
                                    className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                                    htmlFor="img"
                                >
                                    <span>Завантажте світлину</span>
                                </label>
                                <input
                                    type="file"
                                    id="img"
                                    onChange={encodeImageFileAsURL}
                                    className="hidden"
                                />
                            </>
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

                                            {subject === 'Mathematics' ? (
                                                <MathInput
                                                    value={answer.text}
                                                    onChange={(val: string) => {
                                                        handleAnswerTextChange(
                                                            index,
                                                            val
                                                        )
                                                    }}
                                                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
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
                                                {subject === 'Mathematics' ? (
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
                                                    />
                                                )}
                                            </div>
                                            <span className="text-gray-500">
                                                —
                                            </span>
                                            <div className="flex-1">
                                                {subject === 'Mathematics' ? (
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
                                                    />
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
                            {subject === 'Mathematics' ? (
                                <MathInput
                                    value={editedTask.answers?.[0]?.text || ''}
                                    onChange={(val: string) => {
                                        handleAnswerTextChange(0, val)
                                    }}
                                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
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
                            onClick={onSave}
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
