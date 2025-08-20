'use client'

import { memo, useCallback, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import EditTaskModal from './EditTaskModal'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import renderBoldText from '@/helpers/renderBoldText'
import { useUser } from '@/hooks/useUser'

const TestTasks = memo(({ tasks, updateTask, updateTest, subject }: any) => {
    const [editingTask, setEditingTask] = useState(null)

    const { user } = useUser()

    const handleEditClick = (task: any) => {
        setEditingTask(task)
    }

    const handleSave = useCallback(
        (updatedTask: any) => {
            updateTask({
                ...updatedTask,
                image: updatedTask.image || null,
            })
            setEditingTask(null)
        },
        [updateTask]
    )

    const handleMoveUpTask = useCallback(
        (task: any) => {
            const currentNumber = parseInt(task.number)
            if (currentNumber <= 1) return

            const newNumber = currentNumber - 1

            updateTest({
                tasks: tasks
                    .map((t: any) => {
                        if (parseInt(t.number) === currentNumber) {
                            return { ...t, number: newNumber.toString() }
                        } else if (parseInt(t.number) === newNumber) {
                            return {
                                ...t,
                                number: currentNumber.toString(),
                            }
                        }
                        return t
                    })
                    .sort(
                        (a: any, b: any) =>
                            parseInt(a.number) - parseInt(b.number)
                    ),
            })
        },
        [tasks, updateTest]
    )

    const handleMoveDownTask = useCallback(
        (task: any) => {
            const currentNumber = parseInt(task.number)
            const maxNumber = Math.max(
                ...tasks.map((t: any) => parseInt(t.number))
            )

            if (currentNumber >= maxNumber) return

            const newNumber = currentNumber + 1

            updateTest({
                tasks: tasks
                    .map((t: any) => {
                        if (parseInt(t.number) === currentNumber) {
                            return { ...t, number: newNumber.toString() }
                        } else if (parseInt(t.number) === newNumber) {
                            return {
                                ...t,
                                number: currentNumber.toString(),
                            }
                        }
                        return t
                    })
                    .sort(
                        (a: any, b: any) =>
                            parseInt(a.number) - parseInt(b.number)
                    ),
            })
        },
        [tasks, updateTest]
    )

    const handleDelete = useCallback(
        (taskId: any) => {
            const taskToDelete = tasks.find((t: any) => t.id === taskId)
            if (!taskToDelete) return

            const deleteNumber = parseInt(taskToDelete.number)

            updateTest({
                tasks: tasks
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
                    }),
            })
        },
        [tasks, updateTest]
    )

    return (
        <div>
            {tasks.length > 0 &&
                tasks.map((task: any, index: any) => (
                    <div key={task.id || index}>
                        {task.type === 'multiple' && (
                            <div className="bg-white shadow-lg rounded-2xl mb-8 max-w-3xl mx-auto overflow-hidden border border-gray-200">
                                <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <p className="text-xl font-semibold text-gray-800">
                                        Запитання {task.number}
                                    </p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                handleMoveUpTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                        >
                                            <FaArrowUp />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleMoveDownTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                        >
                                            <FaArrowDown />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleEditClick(task)
                                            }
                                            className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(task.id)
                                            }
                                            className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        {subject === 'Mathematics' ||
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
                                                        {subject ===
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
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                handleMoveUpTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                            title="Пересунути вгору"
                                        >
                                            <FaArrowUp />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleMoveDownTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                            title="Пересунути вниз"
                                        >
                                            <FaArrowDown />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleEditClick(task)
                                            }
                                            className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                                            title="Редагувати"
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(task.id)
                                            }
                                            className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                                            title="Видалити"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        {subject === 'Mathematics' ||
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
                                                            {subject ===
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
                                                                    pair.left
                                                                        .text ||
                                                                        '—'
                                                                )
                                                            )}
                                                        </div>

                                                        <div className="col-span-1 text-center text-gray-400">
                                                            ⇄
                                                        </div>

                                                        <div className="col-span-5 font-medium break-words text-right">
                                                            {subject ===
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
                                                                    pair.right
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
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                handleMoveUpTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                        >
                                            <FaArrowUp />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleMoveDownTask(task)
                                            }
                                            className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600 transition"
                                        >
                                            <FaArrowDown />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleEditClick(task)
                                            }
                                            className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(task.id)
                                            }
                                            className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        {subject === 'Mathematics' ||
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
                                            {subject === 'Mathematics' ||
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
                                                    task.answers?.[0]?.text ||
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

            {editingTask && (
                <EditTaskModal
                    task={editingTask}
                    onSave={handleSave}
                    onClose={() => setEditingTask(null)}
                    subject={subject}
                />
            )}
        </div>
    )
})

export default memo(TestTasks)
