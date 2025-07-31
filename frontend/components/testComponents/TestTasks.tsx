'use client'

import { memo, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import EditTaskModal from './EditTaskModal'
import LatextTranform from '@/helpers/latexTransform'
import Image from 'next/image'
import { MathJaxContext } from 'better-react-mathjax'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const TestTasks = ({
    test,
    updateTask,
    deleteTask,
    updateTest,
    subject,
}: any) => {
    const [editingTask, setEditingTask] = useState(null)

    const handleEditClick = (task: any) => {
        setEditingTask(task)
    }

    const handleSave = (updatedTask: any) => {
        updateTask({
            ...updatedTask,
            image: updatedTask.image || null,
        })
        setEditingTask(null)
    }

    const handleDelete = (taskId: any) => {
        const taskToDelete = test.tasks.find((t: any) => t.id === taskId)
        if (!taskToDelete) return

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

    // const config = {
    //     loader: { load: ['input/asciimath', 'input/tex', '[tex]/ams'] },
    //     asciimath: {},
    //     tex: {
    //         inlineMath: [
    //             ['$', '$'],
    //             ['\\(', '\\)'],
    //         ],
    //         displayMath: [
    //             ['$$', '$$'],
    //             ['\\[', '\\]'],
    //         ],
    //         packages: { '[+]': ['ams'] },
    //     },
    //     svg: {
    //         fontCache: 'global',
    //     },
    // }

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
                                {task.answers.map((answer: any, idx: any) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 mt-4"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={answer.isCorrect}
                                            readOnly
                                        />
                                        <LatextTranform content={answer.text} />
                                    </div>
                                ))}
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
                                        <span className="text-gray-500">—</span>
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
                                    <p className="font-medium">Відповідь: </p>
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
}

export default memo(TestTasks)
