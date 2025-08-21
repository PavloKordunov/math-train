'use client'

import { useSubTopicContext } from '@/helpers/getSubTopicId'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiChevronRight, FiPlusCircle } from 'react-icons/fi'
import { MdDelete, MdEdit } from 'react-icons/md'

interface Topic {
    name: string
    adminId: string
    number: string
    subjectType: string
}

interface SubTopic {
    name: string
    topicId: string
    number: string
}

const CreateSubjectTopic = () => {
    const params = useParams()
    const [ukrSubjectName, setUkrSubjectName] = useState('')
    const subjectName = params?.subject as string
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenSubTopicModal, setIsOpenSubTopicModal] = useState(false)
    const [openTopicId, setOpenTopicId] = useState<string | null>(null)
    const [openSubTopicId, setOpenSubTopicId] = useState<string | null>(null)
    const { user } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { setSubTopicId } = useSubTopicContext()

    const [topicData, setTopicData] = useState<Topic>({
        name: '',
        adminId: user?.id ?? '',
        number: '',
        subjectType: subjectName ?? '',
    })

    const [subTopicData, setSubTopicData] = useState<SubTopic>({
        name: '',
        topicId: '',
        number: '',
    })

    const [topics, setTopics] = useState<any[]>([])
    const [subTopics, setSubTopics] = useState<any[]>([])
    const [tests, setTests] = useState<any[]>([])

    const [editTopicModal, setEditTopicModal] = useState(false)
    const [deleteTopicModal, setDeleteTopicModal] = useState(false)
    const [editTopic, setEditTopic] = useState({
        name: '',
        id: '',
    })
    const [deleteTopicId, setDeleteTopicId] = useState('')

    const [editSubTopicModal, setEditSubTopicModal] = useState(false)
    const [deleteSubTopicModal, setDeleteSubTopicModal] = useState(false)
    const [editSubTopic, setEditSubTopic] = useState({
        name: '',
        id: '',
    })
    const [deleteSubTopicId, setDeleteSubTopicId] = useState('')

    const createTopic = async () => {
        try {
            const res = await fetch(`${API_URL}/api/topic`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(topicData),
            })
            const data = await res.json()
            setIsOpenModal(false)
            setTopics((prev) => [...prev, data])
            setTopicData({
                name: '',
                adminId: user?.id ?? '',
                number: '',
                subjectType: subjectName ?? '',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const createSubTopic = async () => {
        try {
            const res = await fetch(`${API_URL}/api/subtopic`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subTopicData),
            })
            const data = await res.json()
            console.log(data)
            setIsOpenSubTopicModal(false)
            setSubTopics((prev) => [...prev, data])
            setSubTopicData({
                name: '',
                topicId: '',
                number: '',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateTopic = async (topicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/topic/${topicId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editTopic),
            })
            const data = await res.json()
            console.log(data)
            setEditTopicModal(false)
            setTopics((prev) =>
                prev.map((topic) =>
                    topic.id === topicId ? { ...topic, name: data.name } : topic
                )
            )
            setEditTopic({
                name: '',
                id: '',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateSubTopic = async (subTopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/subtopic/${subTopicId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editSubTopic),
            })
            const data = await res.json()
            console.log(data)
            setEditSubTopicModal(false)
            setSubTopics((prev) =>
                prev.map((subTopic) =>
                    subTopic.id === subTopicId
                        ? { ...subTopic, name: data.name }
                        : subTopic
                )
            )
            setEditSubTopic({
                name: '',
                id: '',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTopic = async (topicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/topic/${topicId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setDeleteTopicId('')
            setDeleteTopicModal(false)
            setTopics((prev) => prev.filter((topic) => topicId !== topic.id))
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSubTopic = async (subTopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/subtopic/${subTopicId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setDeleteSubTopicId('')
            setDeleteSubTopicModal(false)
            setSubTopics((prev) =>
                prev.filter((subtopic) => subTopicId !== subtopic.id)
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getaAlltopicsBySubject = async () => {
            try {
                const res = await fetch(`${API_URL}/api/topic/${subjectName}`)
                const data = await res.json()
                setTopics(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getaAlltopicsBySubject()
    }, [subjectName])

    const getSubTopicByTopicId = async (topicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/subtopic/${topicId}`)
            const data = await res.json()
            console.log(data)
            setSubTopics(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTestBySubTopicId = async (subtopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/test/topic/${subtopicId}`)
            const data = await res.json()
            console.log(data)
            setTests(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (subjectName === 'mathematics') {
            setUkrSubjectName('Математика')
        } else if (subjectName === 'ukrainian') {
            setUkrSubjectName('Українська мова')
        } else if (subjectName === 'english') {
            setUkrSubjectName('Англійська мова')
        } else if (subjectName === 'history') {
            setUkrSubjectName('Історія України')
        }
    }, [subjectName])

    const handleOpenTopic = (topicId: string) => {
        setOpenTopicId((prevId) => (prevId === topicId ? null : topicId))
    }
    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
    }

    return (
        <div className="max-w-[1280px] mx-auto bg-[#F0F4F8] shadow-md rounded-2xl p-6">
            <h1 className="text-[40px] font-semibold mb-10">
                {ukrSubjectName}: завдання за темами
            </h1>
            <button
                onClick={() => {
                    setIsOpenModal(true)
                }}
                className="px-8 py-3 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition mb-6"
            >
                Створити тему
            </button>
            {topics &&
                topics.map((topic, idx) => (
                    <div key={topic.id}>
                        <div
                            className="flex justify-between items-center mb-4 cursor-pointer"
                            onClick={() => {
                                handleOpenTopic(topic.id)
                                getSubTopicByTopicId(topic.id)
                            }}
                        >
                            <div className="flex items-center">
                                <h2 className="text-[28px] font-semibold mr-3">
                                    {idx + 1}. {topic.name}
                                </h2>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => {
                                            setEditTopicModal(true)
                                            setEditTopic({
                                                name: topic.name,
                                                id: topic.id,
                                            })
                                        }}
                                        className="p-1 hover:text-blue-500"
                                    >
                                        <MdEdit size={24} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDeleteTopicModal(true)
                                            setDeleteTopicId(topic.id)
                                        }}
                                        className="p-1 hover:text-red-500"
                                    >
                                        <MdDelete size={24} />
                                    </button>
                                </div>
                            </div>
                            <FiChevronRight
                                className={`transform transition-transform duration-300 ${
                                    openTopicId === topic.id ? 'rotate-90' : ''
                                }`}
                                size={36}
                            />
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openTopicId === topic.id
                                    ? 'max-h-[500px] opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            {subTopics &&
                                subTopics.map((subTopic, num) => (
                                    <div key={subTopic.id}>
                                        <div
                                            className="flex justify-between items-center mb-4 cursor-pointer"
                                            onClick={() => {
                                                handleOpenSubTopic(subTopic.id)
                                                getTestBySubTopicId(subTopic.id)
                                            }}
                                        >
                                            <div className="flex items-center">
                                                <h2 className="text-[28px] font-semibold mr-3">
                                                    {idx + 1}.{num + 1}.{' '}
                                                    {subTopic.name}
                                                </h2>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => {
                                                            setEditSubTopicModal(
                                                                true
                                                            )
                                                            setEditSubTopic({
                                                                name: subTopic.name,
                                                                id: subTopic.id,
                                                            })
                                                        }}
                                                        className="p-1 hover:text-blue-500"
                                                    >
                                                        <MdEdit size={24} />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setDeleteSubTopicModal(
                                                                true
                                                            )
                                                            setDeleteSubTopicId(
                                                                subTopic.id
                                                            )
                                                        }}
                                                        className="p-1 hover:text-red-500"
                                                    >
                                                        <MdDelete size={24} />
                                                    </button>
                                                </div>
                                            </div>
                                            <FiChevronRight
                                                className={`transform transition-transform duration-300 ${
                                                    openSubTopicId ===
                                                    subTopic.id
                                                        ? 'rotate-90'
                                                        : ''
                                                }`}
                                                size={36}
                                            />
                                        </div>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                openSubTopicId === subTopic.id
                                                    ? 'max-h-[500px] opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <Link
                                                href={'/create-test'}
                                                onClick={() =>
                                                    setSubTopicId(subTopic.id)
                                                }
                                                className="flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-800 font-medium shadow hover:bg-blue-200 transition mb-4"
                                            >
                                                <FiPlusCircle size={18} />
                                                Створити тест
                                            </Link>
                                            {tests &&
                                                tests.map((test) => (
                                                    <div
                                                        key={test.id}
                                                        className="flex items-center justify-between mb-4"
                                                    >
                                                        <p className="text-[20px] font-medium">
                                                            {test.title} (
                                                            {test.tasks.length})
                                                        </p>
                                                        <div className="flex items-center gap-4">
                                                            <Link
                                                                href={`/view-test/${test.id}`}
                                                                className="bg-[#CA193A] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                                            >
                                                                Переглянути
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="bg-[#CDC8C8] h-[1px] w-full mb-1"></div>
                                    </div>
                                ))}
                            <button
                                onClick={() => {
                                    setIsOpenSubTopicModal(true)
                                    setSubTopicData({
                                        ...subTopicData,
                                        topicId: topic.id,
                                    })
                                }}
                                className="mb-4 text-md text-red-600 hover:underline"
                            >
                                ➕ Додати підтему
                            </button>
                        </div>
                    </div>
                ))}
            {isOpenModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Створити Тему
                        </h1>
                        <input
                            type="text"
                            value={topicData?.name}
                            onChange={(e) =>
                                setTopicData({
                                    ...topicData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4"
                            placeholder="Назва Теми"
                        />
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setIsOpenModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={createTopic}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Створити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isOpenSubTopicModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Створити Підтему
                        </h1>
                        <input
                            type="text"
                            value={subTopicData?.name}
                            onChange={(e) =>
                                setSubTopicData({
                                    ...subTopicData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4"
                            placeholder="Назва Підтеми"
                        />
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setIsOpenSubTopicModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={createSubTopic}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Створити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editTopicModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Оновити Тему
                        </h1>
                        <input
                            type="text"
                            value={editTopic.name}
                            onChange={(e) =>
                                setEditTopic({
                                    ...editTopic,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4"
                            placeholder="Назва Теми"
                        />
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setEditTopicModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={() => updateTopic(editTopic.id)}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Оновити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editSubTopicModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Оновити Підтему
                        </h1>
                        <input
                            type="text"
                            value={editSubTopic.name}
                            onChange={(e) =>
                                setEditSubTopic({
                                    ...editSubTopic,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4"
                            placeholder="Назва Підтеми"
                        />
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setEditSubTopicModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={() => updateSubTopic(editSubTopic.id)}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Оновити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {deleteTopicModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Ви впенені що хочете видалити тему
                        </h1>
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setDeleteTopicModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={() => deleteTopic(deleteTopicId)}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {deleteSubTopicModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl flex flex-col items-center">
                        <h1 className="text-[28px] font-semibold mb-6">
                            Ви впенені що хочете видалити підтему
                        </h1>
                        <div className="w-full flex items-center gap-4 justify-end">
                            <button
                                onClick={() => setDeleteSubTopicModal(false)}
                                className="px-5 py-2 h-full rounded-[12px] border-[1px] border-[#CDC8C8] text-black font-semibold text-[16px] shadow-md transition"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={() => deleteSubTopic(deleteSubTopicId)}
                                className="px-5 py-2 h-full rounded-[12px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateSubjectTopic
