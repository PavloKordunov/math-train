'use client'

import { useEffect, useState, useTransition } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { ClipLoader } from 'react-spinners'
import StudentCard from '../StudentCard'
import CreateGroupModal from '../createGroupModal'
import GroupCard from '../GroupCard'
import { useUser } from '@/hooks/useUser'

const StudentsSearchClient = ({ initialStudents }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [query, setQuery] = useState('')
    const [students, setStudents] = useState<any[]>()
    const [isPending, startTransition] = useTransition()
    const [type, setType] = useState<'students' | 'groups'>('students')
    const [modalOpen, setModalOpen] = useState(false)
    const [groups, setGroups] = useState<any[]>([])

    useEffect(() => {
        const getAllTeacherGroups = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/group/teacher/${user?.id}`
                )
                const data = await res.json()

                console.log(data)
                setGroups(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllTeacherGroups()
    }, [])

    useEffect(() => {
        setStudents(initialStudents)
    }, [initialStudents])

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="max-w-6xl py-8 mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">
                        {type === 'students' ? 'Учні' : 'Групи'}
                    </h1>
                    {type === 'groups' && (
                        <button
                            onClick={toggleModal}
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md transition-all duration-200 text-sm sm:text-base"
                        >
                            <AiOutlinePlus size={18} />
                            <span className="whitespace-nowrap">
                                Створити групу
                            </span>
                        </button>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative w-full sm:w-64 md:w-80">
                        <input
                            type="text"
                            placeholder={
                                type === 'students'
                                    ? 'Пошук студента...'
                                    : 'Пошук групи...'
                            }
                            className="w-full text-lg px-6 py-2 bg-[#F2F2F8] shadow-md rounded-2xl"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <FaSearch size={18} />
                        </button>
                    </div>

                    <div className="bg-white rounded-full shadow-md flex">
                        <button
                            onClick={() => setType('students')}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all font-medium ${
                                type === 'students'
                                    ? 'bg-cyan-500 text-white shadow-inner'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Учні
                        </button>
                        <button
                            onClick={() => setType('groups')}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all font-medium ${
                                type === 'groups'
                                    ? 'bg-cyan-500 text-white shadow-inner'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Групи
                        </button>
                    </div>
                </div>
            </div>

            {isPending ? (
                <div className="flex justify-center">
                    <ClipLoader color="#36d7b7" size={40} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {type === 'students' ? (
                        students?.map((student) => (
                            <StudentCard
                                key={student?.id}
                                student={student}
                                students={students}
                                setStudents={setStudents}
                            />
                        ))
                    ) : (
                        <>
                            {groups.length > 0 ? (
                                groups?.map((group) => (
                                    <GroupCard
                                        key={group.id}
                                        group={group}
                                        students={students}
                                        setGroups={setGroups}
                                    />
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-6 py-12">
                                    <div className="text-gray-500 text-center max-w-md">
                                        <p className="text-lg mb-4">
                                            Ще не створено жодної групи
                                        </p>
                                        <p className="text-sm">
                                            Створіть нову групу, щоб почати
                                            роботу
                                        </p>
                                    </div>
                                    <button
                                        onClick={toggleModal}
                                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-200 text-base font-medium"
                                    >
                                        <AiOutlinePlus size={20} />
                                        Створити групу
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
            {modalOpen && (
                <CreateGroupModal
                    setGroups={setGroups}
                    toggleModal={toggleModal}
                    students={students}
                />
            )}
        </div>
    )
}

export default StudentsSearchClient
