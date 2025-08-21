'use client'

import { memo, useEffect, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import EditTaskModal from './EditTaskModal'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import { MathJaxContext } from 'better-react-mathjax'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import renderBoldText from '@/helpers/renderBoldText'

const TestTasks = memo(
    ({
        test,
        updateTask,
        deleteTask,
        updateTest,
        subject,
        handleDeleteImage,
        setDeleteImage,
        deleteImage,
        typeEditing,
        setEditedImages,
    }: any) => {
        const [editTaskModal, setEditTaskModal] = useState(false)
        const [editingTask, setEditingTask] = useState(null)
        const handleEditClick = (task: any) => {
            setEditTaskModal(true)
            setEditingTask(task)
        }

        const API_URL = process.env.NEXT_PUBLIC_API_URL

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
        const handleSave = (updatedTask: any) => {
            try {
                if (typeEditing === 'create') {
                    handleDeleteImages(deleteImage)
                    localStorage.removeItem('editedImages')
                }

                updateTask({
                    ...updatedTask,
                    image: updatedTask.image,
                })
                setEditTaskModal(false)
            } catch (error) {
                console.log(error)
            }
        }

        const handleClose = (task: any) => {
            setDeleteImage((prev: string[]) => {
                return prev.filter((url) => {
                    const stillExistsInTask = [
                        task.image,
                        ...(task.answers?.map((a: any) => a.image) || []),
                        ...(task.pairs?.flatMap((p: any) => [
                            p.left.image,
                            p.right.image,
                        ]) || []),
                    ].includes(url)

                    return !stillExistsInTask
                })
            })
            if (typeEditing === 'create') {
                handleDeleteImages(deleteImage)
            }

            setEditTaskModal(false)
        }

        const deleteImageUpdate = (task: any) => {
            const updatedTasks = test.tasks.map((t: any) => {
                if (t.id !== task.id) return t

                const imagesToDelete: string[] = []

                if (t.image) {
                    imagesToDelete.push(t.image)
                }

                const clearedAnswers = t.answers?.map((ans: any) => {
                    if (ans.image) {
                        imagesToDelete.push(ans.image)
                    }
                    return { ...ans, image: null }
                })

                const clearedPairs = t.pairs?.map((pair: any) => {
                    if (pair.left?.image) {
                        imagesToDelete.push(pair.left.image)
                    }
                    if (pair.right?.image) {
                        imagesToDelete.push(pair.right.image)
                    }
                    return {
                        left: { ...pair.left, image: null },
                        right: { ...pair.right, image: null },
                        id: pair.id,
                    }
                })

                if (imagesToDelete.length > 0) {
                    setDeleteImage((prev: string[]) => [
                        ...prev,
                        ...imagesToDelete,
                    ])
                }

                return {
                    ...t,
                    image: null,
                    answers: clearedAnswers,
                    pairs: clearedPairs,
                }
            })

            updateTest({ ...test, tasks: updatedTasks })
        }

        const handleDelete = (taskId: any) => {
            const taskToDelete = test.tasks.find((t: any) => t.id === taskId)
            if (!taskToDelete) return
            if (typeof handleDeleteImage === 'function') {
                if (taskToDelete.image)
                    handleDeleteImage('title', taskToDelete.image)

                taskToDelete.answers?.forEach((ans: any) => {
                    if (ans.image) handleDeleteImage(ans.id, ans.image)
                })

                taskToDelete.pairs?.forEach((pair: any) => {
                    if (pair.left?.image)
                        handleDeleteImage(pair.left.id, pair.left.image)
                    if (pair.right?.image)
                        handleDeleteImage(pair.right.id, pair.right.image)
                })
            } else {
                deleteImageUpdate(taskToDelete)
            }
            const deleteNumber = parseInt(taskToDelete.number)

            const updatedTasks = test.tasks
                .filter((t: any) => t.id !== taskId)
                .map((t: any) => {
                    const currentNumber = parseInt(t.number)
                    return {
                        ...t,
                        number:
                            currentNumber > deleteNumber
                                ? (currentNumber - 1).toString()
                                : t.number,
                    }
                })

            updateTest({ ...test, tasks: updatedTasks })

            deleteTask(taskId)
        }

        const handleMoveUpTask = (task: any) => {
            const currentNumber = parseInt(task.number)
            if (currentNumber <= 1) return

            const newNumber = currentNumber - 1

            const updatedTasks = test.tasks.map((t: any) => {
                if (parseInt(t.number) === currentNumber) {
                    return { ...t, number: newNumber.toString() }
                } else if (parseInt(t.number) === newNumber) {
                    return { ...t, number: currentNumber.toString() }
                }
                return t
            })

            const sortedTasks = [...updatedTasks].sort(
                (a, b) => parseInt(a.number) - parseInt(b.number)
            )

            updateTest({ ...test, tasks: sortedTasks })
        }

        const handleMoveDownTask = (task: any) => {
            const currentNumber = parseInt(task.number)
            const maxNumber = Math.max(
                ...test.tasks.map((t: any) => parseInt(t.number))
            )

            if (currentNumber >= maxNumber) return

            const newNumber = currentNumber + 1

            const updatedTasks = test.tasks.map((t: any) => {
                if (parseInt(t.number) === currentNumber) {
                    return { ...t, number: newNumber.toString() }
                } else if (parseInt(t.number) === newNumber) {
                    return { ...t, number: currentNumber.toString() }
                }
                return t
            })

            const sortedTasks = [...updatedTasks].sort(
                (a, b) => parseInt(a.number) - parseInt(b.number)
            )
            updateTest({ ...test, tasks: sortedTasks })
        }

        return (
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
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    handleMoveUpTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowUp />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleMoveDownTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowDown />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleEditClick(task)
                                                }
                                                className="p-1 hover:text-blue-500"
                                            >
                                                <MdEdit size={24} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(task.id)
                                                }
                                                className="p-1 hover:text-red-500"
                                            >
                                                <MdDelete size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    {subject === 'Mathematics' ? (
                                        <LatextTranform
                                            content={task.title}
                                            className="text-xl font-semibold mb-4 max-w-full"
                                        />
                                    ) : (
                                        renderBoldText(task.title)
                                    )}

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
                                                className="flex flex-col gap-2 mt-4"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            answer.isCorrect
                                                        }
                                                        readOnly
                                                    />
                                                    {subject ===
                                                    'Mathematics' ? (
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

                                                {answer.image && (
                                                    <div className="w-full max-w-xs rounded-lg overflow-hidden">
                                                        <Image
                                                            src={answer.image}
                                                            alt={`Зображення відповіді: ${answer.text}`}
                                                            width={237}
                                                            height={237}
                                                            className="w-full h-auto object-contain"
                                                        />
                                                    </div>
                                                )}
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
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    handleMoveUpTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowUp />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleMoveDownTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowDown />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleEditClick(task)
                                                }
                                                className="p-1 hover:text-blue-500"
                                            >
                                                <MdEdit size={24} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(task.id)
                                                }
                                                className="p-1 hover:text-red-500"
                                            >
                                                <MdDelete size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    {subject === 'Mathematics' ? (
                                        <LatextTranform
                                            content={task.title}
                                            className="text-xl font-semibold mb-4"
                                        />
                                    ) : (
                                        renderBoldText(task.title)
                                    )}
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
                                                {subject === 'Mathematics' ? (
                                                    <LatextTranform
                                                        content={pair.left.text}
                                                    />
                                                ) : (
                                                    renderBoldText(
                                                        pair.left.text
                                                    )
                                                )}
                                            </div>
                                            {console.log(
                                                'pair.left.image: ',
                                                pair.left
                                            )}
                                            {pair.left.image && (
                                                <div className="w-full max-w-xs rounded-lg overflow-hidden">
                                                    <Image
                                                        src={pair.left.image}
                                                        alt={``}
                                                        width={237}
                                                        height={237}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            )}
                                            <span className="text-gray-500">
                                                —
                                            </span>
                                            {subject === 'Mathematics' ? (
                                                <LatextTranform
                                                    content={pair.right.text}
                                                />
                                            ) : (
                                                renderBoldText(pair.right.text)
                                            )}
                                            {pair.right.image && (
                                                <div className="w-full max-w-xs rounded-lg overflow-hidden">
                                                    <Image
                                                        src={pair.right.image}
                                                        alt={``}
                                                        width={237}
                                                        height={237}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            )}
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
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    handleMoveUpTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowUp />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleMoveDownTask(task)
                                                }
                                                className="p-1 hover:text-yellow-500"
                                            >
                                                <FaArrowDown />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleEditClick(task)
                                                }
                                                className="p-1 hover:text-blue-500"
                                            >
                                                <MdEdit size={24} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(task.id)
                                                }
                                                className="p-1 hover:text-red-500"
                                            >
                                                <MdDelete size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    {subject === 'Mathematics' ? (
                                        <LatextTranform
                                            content={task.title}
                                            className="text-xl font-semibold mb-4"
                                        />
                                    ) : (
                                        renderBoldText(task.title)
                                    )}

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
                                        {subject === 'Mathematics' ? (
                                            <LatextTranform
                                                content={
                                                    task.answers?.[0]?.text ||
                                                    'Немає відповіді'
                                                }
                                            />
                                        ) : (
                                            renderBoldText(
                                                task.answers?.[0]?.text
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                {editTaskModal && (
                    <EditTaskModal
                        task={editingTask}
                        onSave={handleSave}
                        onClose={() => handleClose(editingTask)}
                        subject={subject}
                        setDeleteImage={setDeleteImage}
                        deleteImage={deleteImage}
                        setEditedImages={setEditedImages}
                    />
                )}
            </div>
        )
    }
)

export default memo(TestTasks)
