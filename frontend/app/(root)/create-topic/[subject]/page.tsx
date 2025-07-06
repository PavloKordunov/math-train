'use client'

import { useUser } from '@/hooks/useUser'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiChevronRight, FiPlusCircle } from 'react-icons/fi'

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

    useEffect(() => {
        const getaAlltopicsBySubject = async () => {
            try {
                const res = await fetch(`${API_URL}/api/topic/${subjectName}`)
                const data = await res.json()
                setTopics(data)
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
            setSubTopics(data)
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
                            <h2 className="text-[28px] font-semibold">
                                {idx + 1}. {topic.name}
                            </h2>
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
                                            onClick={() =>
                                                handleOpenSubTopic(subTopic.id)
                                            }
                                        >
                                            <h2 className="text-[28px] font-semibold">
                                                {idx + 1}.{num + 1}.{' '}
                                                {subTopic.name}
                                            </h2>
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
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-800 font-medium shadow hover:bg-blue-200 transition mb-4">
                                                <FiPlusCircle size={18} />
                                                Створити тест
                                            </button>
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
        </div>
    )
}

export default CreateSubjectTopic
