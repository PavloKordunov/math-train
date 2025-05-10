'use client'

import { useState } from "react"
import { MdEdit, MdDelete } from "react-icons/md"
import EditTaskModal from "./EditTaskModal" 

const TestTasks = ({ test, updateTask, deleteTask }: any) => {
    const [editingTask, setEditingTask] = useState(null)
    
    const handleEditClick = (task: any) => {
        setEditingTask(task)
    }

    const handleSave = (updatedTask: any) => {
        updateTask(updatedTask)
        setEditingTask(null)
    }

    const handleDelete = (taskId: any) => {
        deleteTask(taskId)
    }

    return (
        <div>
            {test.tasks.length > 0 && 
                test.tasks.map((task: any, index: any) => (
                    <div key={task.id || index}>
                        {task.type === 'multiple' && (
                            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                <div className="flex items-center justify-between">
                                    <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleEditClick(task)}
                                            className="p-1 hover:text-blue-500"
                                        >
                                            <MdEdit size={24} />
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(task.id)}
                                            className="p-1 hover:text-red-500"
                                        >
                                            <MdDelete size={24} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xl font-semibold mb-4">{task.title}</p>
                                {task.answers.map((answer: any, idx: any) => (
                                    <div key={idx} className="flex items-center gap-4 mt-4">
                                        <input
                                            type="checkbox"
                                            checked={answer.isCorrect}
                                            readOnly
                                        />
                                        <p>{answer.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {task.type === 'matching' && (
                            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                <div className="flex items-center justify-between">
                                    <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEditClick(task)} className="p-1 hover:text-blue-500">
                                            <MdEdit size={24} />
                                        </button>
                                        <button onClick={() => handleDelete(task.id)} className="p-1 hover:text-red-500">
                                            <MdDelete size={24} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xl font-semibold mb-4">{task.title}</p>
                                {task.pairs.map((pair: any, idx: any) => (
                                    <div key={idx} className="flex items-center gap-4 mt-4">
                                        <p className="font-medium">{idx + 1}. {pair.left.text}</p>
                                        <span className="text-gray-500">—</span>
                                        <p>{pair.right.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {task.type === 'written' && (
                            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                                <div className="flex items-center justify-between">
                                    <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEditClick(task)} className="p-1 hover:text-blue-500">
                                            <MdEdit size={24} />
                                        </button>
                                        <button onClick={() => handleDelete(task.id)} className="p-1 hover:text-red-500">
                                            <MdDelete size={24} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xl font-semibold mb-4">{task.title}</p>
                                <div className="flex items-center gap-4 mt-4">
                                    <p className="font-medium">Відповідь: </p>
                                    <p>{task.answers?.[0]?.text || "Немає відповіді"}</p>
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
                />
            )}
        </div>
    )
}

export default TestTasks