'use client'

import Image from 'next/image'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import AssignTestModal from './AssignTestModal'

const TeacherTestItem = ({ students, test }: { students: any; test: any }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    const deleteTest = async () => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await res.json()
            toast.success('Тест видалено')
        } catch (error) {
            console.error(error)
            toast.error('Помилка при видаленні')
        }
    }

    return (
        <div className="w-full max-w-5xl mx-auto mb-6">
            <Toaster position="bottom-center" />

            <div className="flex flex-col md:flex-row bg-[#FFECE7] shadow-md rounded-lg overflow-hidden">
                <div className="p-6 flex justify-center items-center bg-[#FFECE7] md:w-1/4">
                    <Image
                        src="/mathItemImg.png"
                        alt="Math"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col justify-between p-6 gap-4 md:w-3/4 bg-white border-l-2 border-[#CDC8C8]">
                    <div>
                        <p className="font-bold text-lg uppercase mb-4">
                            Тест: {test.title}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href={`/view-test/${test.id}`}
                                className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-semibold uppercase text-center"
                            >
                                Переглянути
                            </Link>
                            <button
                                onClick={toggleModal}
                                className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 font-semibold uppercase"
                            >
                                Назначити
                            </button>
                        </div>
                    </div>

                    <button
                        className="text-gray-500 hover:text-red-600 self-end"
                        onClick={deleteTest}
                    >
                        <MdDelete size={24} />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <AssignTestModal
                    test={test}
                    students={students}
                    toggleModal={toggleModal}
                />
            )}
        </div>
    )
}

export default TeacherTestItem
