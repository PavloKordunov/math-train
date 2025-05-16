'use client'

import { useState } from "react"
import { MdEdit, MdDelete } from "react-icons/md"
import EditTaskModal from "./EditTaskModal" 
import LatextTranform from "@/helpers/latexTransform"
import Image from "next/image"
import { MathJaxContext } from "better-react-mathjax"

const TestTasks = ({ test, updateTask, deleteTask }: any) => {
    const [editingTask, setEditingTask] = useState(null)
    
    const handleEditClick = (task: any) => {
        setEditingTask(task)
    }

    const handleSave = (updatedTask: any) => {
        updateTask({
            ...updatedTask,
            image: updatedTask.image || null
        });
        setEditingTask(null)
    }

    const handleDelete = (taskId: any) => {
        deleteTask(taskId)
    }

    const config = {
        loader: { load: ['input/asciimath', 'input/tex', '[tex]/ams'] },
        asciimath: {}, 
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            packages: { '[+]': ['ams'] },
        },
        svg: {
            fontCache: 'global',
        },
    };

    return (
        <MathJaxContext config={config}>
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
                                <LatextTranform content={task.title} className="text-xl font-semibold mb-4 max-w-full"/>
                                {task.image && <div className="w-full h-fit overflow-hidden rounded-[21px]"> 
                                    <Image 
                                        src={task.image} 
                                        alt={task.title} 
                                        width={237} 
                                        height={237}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>}
                                {task.answers.map((answer: any, idx: any) => (
                                    <div key={idx} className="flex items-center gap-4 mt-4">
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
                                <LatextTranform content={task.title} className="text-xl font-semibold mb-4" />
                                {task.image && <div className="w-full h-fit overflow-hidden rounded-[21px]"> 
                                    <Image 
                                        src={task.image} 
                                        alt={task.title} 
                                        width={237} 
                                        height={237}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>}
                                {task.pairs.map((pair: any, idx: any) => (
                                    <div key={idx} className="flex items-center gap-4 mt-4">
                                        <div className="flex items-center">
                                            <p className="font-medium">{idx + 1}.</p>
                                            <LatextTranform content={pair.left.text} />
                                        </div>
                                        <span className="text-gray-500">—</span>
                                        <LatextTranform content={pair.right.text} />
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
                                <LatextTranform content={task.title} className="text-xl font-semibold mb-4" />
                                {task.image && <div className="w-full h-fit overflow-hidden rounded-[21px]"> 
                                    <Image 
                                        src={task.image} 
                                        alt={task.title} 
                                        width={237} 
                                        height={237}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>}
                                <div className="flex items-center gap-4 mt-4">
                                    <p className="font-medium">Відповідь: </p>
                                    <LatextTranform content={task.answers?.[0]?.text || "Немає відповіді"} />
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
        </MathJaxContext>
    )
}

export default TestTasks