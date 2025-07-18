'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import toast, { Toaster } from 'react-hot-toast'
import { FiChevronRight } from 'react-icons/fi'
import AssignTestModal from './AssignTestModal'

const TopicTestsResult = ({
    topics,
    testResults,
    user,
    student,
    assignedTests,
}: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [openSubTopicId, setOpenSubTopicId] = useState<string | null>(null)
    const [tests, setTests] = useState<any[]>([])
    const [selectedTest, setSelectedTest] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const getTestBySubTopicId = async (subtopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/test/topic/${subtopicId}`)
            const data = await res.json()
            console.log('WQEQWEQEQ', data)
            setTests(data.data)
        } catch (error) {
            console.error('Error fetching tests:', error)
        }
    }

    const getTestResult = (testId: string) => {
        return testResults.find((result: any) => result.testId === testId)
    }
    const getAssignedTest = (testId: string) => {
        return assignedTests.find((result: any) => result.testId === testId)
    }

    const calculateScorePercentage = (result: any) => {
        if (!result) return 0
        return Math.round((result.score / result.maxScore) * 100)
    }

    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
        getTestBySubTopicId(topicId)
    }

    const onErrorClick = () => {
        toast.error('У вас немає доступу до перегляду тесту')
    }

    return (
        <>
            <Toaster position="bottom-center" />
            {topics?.map((topic: any, topicNum: number) => (
                <div key={topic.id}>
                    <h2 className="text-[28px] font-semibold mb-6">
                        {topicNum + 1}. {topic.name}
                    </h2>

                    {topic.subTopics?.map(
                        (subTopic: any, subTopicNum: number) => (
                            <div className="max-w-[1280px]" key={subTopic.id}>
                                <div
                                    className="flex justify-between items-center mb-4 cursor-pointer"
                                    onClick={() =>
                                        handleOpenSubTopic(subTopic.id)
                                    }
                                >
                                    <h3 className="text-[24px] font-semibold">
                                        {topicNum + 1}.{subTopicNum + 1}.{' '}
                                        {subTopic.name}
                                    </h3>
                                    <FiChevronRight
                                        className={`transform transition-transform duration-300 ${
                                            openSubTopicId === subTopic.id
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
                                    {tests?.map((test) => {
                                        const result = getTestResult(test.id)
                                        const isAssigned = getAssignedTest(
                                            test.id
                                        )
                                        const percentage =
                                            calculateScorePercentage(result)

                                        return (
                                            <div
                                                key={test.id}
                                                className="flex items-center justify-between mb-4"
                                            >
                                                <p className="text-[20px] font-medium">
                                                    {test.title} (
                                                    {test.tasks.length})
                                                </p>

                                                <div className="flex gap-4 items-center">
                                                    {result && (
                                                        <div
                                                            style={{
                                                                width: 50,
                                                                height: 50,
                                                            }}
                                                        >
                                                            <CircularProgressbar
                                                                value={
                                                                    percentage
                                                                }
                                                                text={`${percentage}%`}
                                                                styles={buildStyles(
                                                                    {
                                                                        textSize:
                                                                            '28px',
                                                                        pathColor:
                                                                            '#d0002d',
                                                                        textColor:
                                                                            '#000',
                                                                        trailColor:
                                                                            '#eee',
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    )}

                                                    {result ? (
                                                        <>
                                                            {user?.status ===
                                                                'Student' &&
                                                            student?.viewAccess ===
                                                                false ? (
                                                                <div
                                                                    onClick={
                                                                        onErrorClick
                                                                    }
                                                                    className="bg-[#CA193A] px-4 py-2 text-white w-fit rounded-md font-semibold uppercase cursor-pointer"
                                                                >
                                                                    Переглянути
                                                                    тест
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    href={`/perfomence/${test.id}`}
                                                                    className="bg-[#CA193A] px-4 py-2 w-fit text-white rounded-md font-semibold uppercase"
                                                                >
                                                                    Переглянути
                                                                    тест
                                                                </Link>
                                                            )}
                                                        </>
                                                    ) : user?.status ===
                                                      'Teacher' ? (
                                                        <>
                                                            {isAssigned ? (
                                                                <button className="rounded-[16px] border-[2px] border-gray-300 text-black px-4 h-10 flex items-center rounded-md font-semibold uppercase">
                                                                    Назначено
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={() => {
                                                                        setSelectedTest(
                                                                            test
                                                                        )
                                                                        toggleModal()
                                                                    }}
                                                                    className="bg-[#4CAF50] px-4 h-10 text-white flex items-center rounded-md font-semibold uppercase"
                                                                >
                                                                    Призначити
                                                                </button>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <span className="text-gray-500">
                                                            Не пройдено
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="bg-[#CDC8C8] h-[1px] mb-1 w-full"></div>
                            </div>
                        )
                    )}
                </div>
            ))}
            {isModalOpen && (
                <AssignTestModal
                    test={selectedTest}
                    student={student}
                    toggleModal={toggleModal}
                />
            )}
        </>
    )
}

export default TopicTestsResult
