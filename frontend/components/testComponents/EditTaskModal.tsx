'use client'

import { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import MathInput from '../MathInput'
import { MdDelete } from 'react-icons/md'
import Image from 'next/image'
import BoldTextInput from '../BoldTextInput'

const EditTaskModal = ({ task, onSave, onClose, subject }: any) => {
    const [editedTask, setEditedTask] = useState(
        JSON.parse(JSON.stringify(task))
    )

    useEffect(() => {
        setEditedTask(JSON.parse(JSON.stringify(task)))
    }, [task])

    const handleTitleChange = (val: any) => {
        setEditedTask({ ...editedTask, title: val })
    }

    const handleAnswerTextChange = (index: any, text: any) => {
        const updatedAnswers = [...editedTask.answers]
        updatedAnswers[index].text = text
        setEditedTask({ ...editedTask, answers: updatedAnswers })
    }

    const handleAnswerCorrectChange = (index: any) => {
        const updatedAnswers = editedTask.answers.map(
            (answer: any, i: number) => ({
                ...answer,
                isCorrect: i === index,
            })
        )
        setEditedTask({ ...editedTask, answers: updatedAnswers })
    }

    const handlePairLeftChange = (index: any, text: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs[index].left.text = text
        setEditedTask({ ...editedTask, pairs: updatedPairs })
    }

    const handlePairRightChange = (index: any, text: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs[index].right.text = text
        setEditedTask({ ...editedTask, pairs: updatedPairs })
    }

    const addPair = () => {
        setEditedTask({
            ...editedTask,
            pairs: [
                ...editedTask.pairs,
                {
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
                    id: nanoid(),
                },
            ],
        })
    }

    const removePair = (index: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs.splice(index, 1)
        setEditedTask({ ...editedTask, pairs: updatedPairs })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
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
    }, [base64])
    useEffect(() => {
        console.log('answer:', editedTask.answers)
    }, [editedTask.answers])

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

                        {editedTask.image ? (
                            <div className="relative w-fit">
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
                            {editedTask.answers.map(
                                (answer: any, index: any) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 mb-2"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={answer.isCorrect}
                                            onChange={() =>
                                                handleAnswerCorrectChange(index)
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
                                    </div>
                                )
                            )}
                        </div>
                    )}

                    {editedTask.type === 'matching' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Пари:
                            </h3>
                            {editedTask.pairs.map((pair: any, index: any) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 mb-4"
                                >
                                    <div className="flex-1 max-w-50">
                                        {subject === 'Mathematics' ? (
                                            <MathInput
                                                value={pair.left.text}
                                                onChange={(val: string) => {
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
                                                onChange={(val: string) => {
                                                    handlePairLeftChange(
                                                        index,
                                                        val
                                                    )
                                                }}
                                                placeholder="Введіть відповідь"
                                            />
                                        )}
                                    </div>
                                    <span className="text-gray-500">—</span>
                                    <div className="flex-1 max-w-50">
                                        {subject === 'Mathematics' ? (
                                            <MathInput
                                                value={pair.right.text}
                                                onChange={(val: string) => {
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
                                                onChange={(val: string) => {
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
                                        onClick={() => removePair(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Видалити
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addPair}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Додати пару
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
                                    value={editedTask.answers[0]?.text || ''}
                                    onChange={(val: string) => {
                                        handleAnswerTextChange(0, val)
                                    }}
                                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                />
                            ) : (
                                <BoldTextInput
                                    value={editedTask.answers[0]?.text}
                                    onChange={(val: string) => {
                                        handleAnswerTextChange(0, val)
                                    }}
                                    placeholder="Введіть відповідь"
                                />
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
