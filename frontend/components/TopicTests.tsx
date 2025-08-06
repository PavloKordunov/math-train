'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

const TopicTests = ({ topics, toggleModal, setSelectedTest }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [openSubTopicId, setOpenSubTopicId] = useState<string | null>(null)
    const [tests, setTests] = useState<any[]>([])

    const getTestBySubTopicId = async (subtopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/test/topic/${subtopicId}`)
            const data = await res.json()
            setTests(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            {topics?.map((topic: any, topicNum: number) => (
                <div key={topic.id} className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        {topicNum + 1}. {topic.name}
                    </h2>

                    {topic.subTopics?.map(
                        (subTopic: any, subTopicNum: number) => (
                            <div key={subTopic.id} className="mb-6">
                                <div
                                    className="flex justify-between items-center cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition"
                                    onClick={() => {
                                        handleOpenSubTopic(subTopic.id)
                                        getTestBySubTopicId(subTopic.id)
                                    }}
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {topicNum + 1}.{subTopicNum + 1}.{' '}
                                        {subTopic.name}
                                    </h3>
                                    <FiChevronRight
                                        className={`transform transition-transform duration-300 ${
                                            openSubTopicId === subTopic.id
                                                ? 'rotate-90'
                                                : ''
                                        }`}
                                        size={24}
                                    />
                                </div>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        openSubTopicId === subTopic.id
                                            ? 'max-h-[1000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="space-y-3 pl-2 sm:pl-4 mt-2">
                                        {tests.map((test: any) => (
                                            <div
                                                key={test.id}
                                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <p className="text-base sm:text-lg font-medium">
                                                    {test.title} (
                                                    {test.tasks.length})
                                                </p>

                                                <div className="flex items-center gap-3">
                                                    <Link
                                                        href={`/view-topic-test/${test.id}`}
                                                        className="border border-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold uppercase hover:bg-gray-100 transition-colors"
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
                                                        className="bg-[#CA193A] text-white px-4 py-2 rounded-md text-sm font-semibold uppercase hover:bg-[#b01535] transition-colors"
                                                    >
                                                        Назначити
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-200 h-px w-full my-4"></div>
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    )
}

export default TopicTests
