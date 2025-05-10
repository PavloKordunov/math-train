'use client'

import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

const EditTaskModal = ({ task, onSave, onClose }: any) => {
    const [editedTask, setEditedTask] = useState(task)
    
    useEffect(() => {
        setEditedTask(task)
    }, [task])

    const handleTitleChange = (e: any) => {
        setEditedTask({...editedTask, title: e.target.value})
    }

    const handleAnswerTextChange = (index: any, text: any) => {
        const updatedAnswers = [...editedTask.answers]
        updatedAnswers[index].text = text
        setEditedTask({...editedTask, answers: updatedAnswers})
    }

    const handleAnswerCorrectChange = (index: any) => {
        const updatedAnswers = [...editedTask.answers]
        updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect
        setEditedTask({...editedTask, answers: updatedAnswers})
    }

    const handlePairLeftChange = (index: any, text: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs[index].left.text = text
        setEditedTask({...editedTask, pairs: updatedPairs})
    }

    const handlePairRightChange = (index: any, text: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs[index].right.text = text
        setEditedTask({...editedTask, pairs: updatedPairs})
    }

    const addPair = () => {
        setEditedTask({
            ...editedTask,
            pairs: [
                ...editedTask.pairs,
                { 
                    left: {id: nanoid(), text: ''}, 
                    right: {id: nanoid(), text: ''}, 
                    id: nanoid() 
                }
            ]
        })
    }

    const removePair = (index: any) => {
        const updatedPairs = [...editedTask.pairs]
        updatedPairs.splice(index, 1)
        setEditedTask({...editedTask, pairs: updatedPairs})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSave(editedTask)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1000">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Редагувати завдання</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Заголовок:</label>
                        <input
                            type="text"
                            value={editedTask.title}
                            onChange={handleTitleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {editedTask.type === 'multiple' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Варіанти відповідей:</h3>
                            {editedTask.answers.map((answer: any, index: any) => (
                                <div key={index} className="flex items-center gap-4 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={answer.isCorrect}
                                        onChange={() => handleAnswerCorrectChange(index)}
                                    />
                                    <input
                                        type="text"
                                        value={answer.text}
                                        onChange={(e) => handleAnswerTextChange(index, e.target.value)}
                                        className="flex-1 p-2 border rounded"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {editedTask.type === 'matching' && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Пари:</h3>
                            {editedTask.pairs.map((pair: any, index: any) => (
                                <div key={index} className="flex items-center gap-4 mb-4">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={pair.left.text}
                                            onChange={(e) => handlePairLeftChange(index, e.target.value)}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                    <span className="text-gray-500">—</span>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={pair.right.text}
                                            onChange={(e) => handlePairRightChange(index, e.target.value)}
                                            className="w-full p-2 border rounded"
                                            required
                                        />
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
                            <h3 className="text-lg font-semibold mb-2">Відповідь:</h3>
                            <textarea
                                value={editedTask.answers[0]?.text || ''}
                                onChange={(e) => handleAnswerTextChange(0, e.target.value)}
                                className="w-full p-2 border rounded"
                                rows={4}
                            />
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