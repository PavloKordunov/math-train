'use client'

import Link from 'next/link'
import { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { FiChevronRight } from 'react-icons/fi'

const TopicTests = ({ topics, toggleModal, setSelectedTest }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [openSubTopicId, setOpenSubTopicId] = useState<string | null>(null)
    const [tests, setTests] = useState<any[]>([])

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

    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
    }

    return (
        <>
            {topics &&
                topics?.map((topic: any, topicNum: any) => (
                    <div key={topic.id}>
                        <h2 className="text-[28px] font-semibold mb-6">
                            {topicNum + 1}. {topic.name}
                        </h2>
                        {topic.subTopics &&
                            topic.subTopics.map(
                                (subTopic: any, subTopicNum: any) => (
                                    <div
                                        className="max-w-[1280px]"
                                        key={subTopic.id}
                                    >
                                        <div
                                            className="flex justify-between items-center mb-4 cursor-pointer"
                                            onClick={() => {
                                                handleOpenSubTopic(subTopic.id)
                                                getTestBySubTopicId(subTopic.id)
                                            }}
                                        >
                                            <h3 className="text-[24px] font-semibold">
                                                {topicNum + 1}.{subTopicNum + 1}
                                                . {subTopic.name}
                                            </h3>
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
                                                        <div className="flex gap-4 items-center">
                                                            <Link
                                                                href={`/view-topic-test/${test.id}`}
                                                                className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 font-semibold uppercase text-center"
                                                            >
                                                                Переглянути
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                    toggleModal()
                                                                    setSelectedTest(
                                                                        test
                                                                    )
                                                                }}
                                                                className="bg-[#CA193A] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                                            >
                                                                Назначити
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="bg-[#CDC8C8] h-[1px] mb-1 w-full"></div>
                                    </div>
                                )
                            )}
                    </div>
                ))}
        </>
    )
}

export default TopicTests
