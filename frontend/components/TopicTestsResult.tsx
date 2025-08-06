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

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    const getTestBySubTopicId = async (subtopicId: string) => {
        try {
            const res = await fetch(`${API_URL}/api/test/topic/${subtopicId}`)
            const data = await res.json()
            setTests(data.data)
        } catch (error) {
            console.error('Error fetching tests:', error)
            toast.error('Помилка завантаження тестів')
        }
    }

    const getTestResult = (testId: string) =>
        testResults?.find((result: any) => result.testId === testId)

    const getAssignedTest = (testId: string) =>
        assignedTests?.find((result: any) => result.testId === testId)

    const calculateScorePercentage = (result: any) =>
        result ? Math.round((result.score / result.maxScore) * 100) : 0

    const handleOpenSubTopic = (topicId: string) => {
        setOpenSubTopicId((prevId) => (prevId === topicId ? null : topicId))
        getTestBySubTopicId(topicId)
    }

    const onErrorClick = () => {
        toast.error('У вас немає доступу до перегляду тесту')
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Toaster position="bottom-center" />

            {topics?.map((topic: any, topicNum: number) => (
                <div key={topic.id} className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                        {topicNum + 1}. {topic.name}
                    </h2>

                    {topic.subTopics?.map(
                        (subTopic: any, subTopicNum: number) => (
                            <div key={subTopic.id} className="mb-6">
                                <div
                                    className="flex justify-between items-center mb-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                                    onClick={() =>
                                        handleOpenSubTopic(subTopic.id)
                                    }
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {topicNum + 1}.{subTopicNum + 1}.{' '}
                                        {subTopic.name}
                                    </h3>
                                    <FiChevronRight
                                        className={`transform transition-transform duration-300 text-gray-500 ${
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
                                    <div className="space-y-3 pl-2 sm:pl-4">
                                        {tests?.map((test) => {
                                            const result = getTestResult(
                                                test.id
                                            )
                                            const isAssigned = getAssignedTest(
                                                test.id
                                            )
                                            const percentage =
                                                calculateScorePercentage(result)

                                            return (
                                                <div
                                                    key={test.id}
                                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <div className="flex-1">
                                                        <p className="text-base sm:text-lg font-medium">
                                                            {test.title} (
                                                            {test.tasks.length})
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-3 sm:gap-4">
                                                        {result && (
                                                            <div className="w-10 h-10 sm:w-12 sm:h-12">
                                                                <CircularProgressbar
                                                                    value={
                                                                        percentage
                                                                    }
                                                                    text={`${percentage}%`}
                                                                    styles={buildStyles(
                                                                        {
                                                                            textSize:
                                                                                '32px',
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
                                                                    <button
                                                                        onClick={
                                                                            onErrorClick
                                                                        }
                                                                        className="bg-[#CA193A] px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm rounded-md font-semibold uppercase hover:bg-[#b01535] transition-colors"
                                                                    >
                                                                        Переглянути
                                                                        тест
                                                                    </button>
                                                                ) : (
                                                                    <Link
                                                                        href={`/perfomence/${test.id}`}
                                                                        className="bg-[#CA193A] px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm rounded-md font-semibold uppercase hover:bg-[#b01535] transition-colors text-center"
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
                                                                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 text-xs sm:text-sm rounded-md font-semibold uppercase text-gray-700">
                                                                        Назначено
                                                                    </span>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedTest(
                                                                                test
                                                                            )
                                                                            toggleModal()
                                                                        }}
                                                                        className="bg-[#4CAF50] px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm rounded-md font-semibold uppercase hover:bg-[#3e8e41] transition-colors"
                                                                    >
                                                                        Призначити
                                                                    </button>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <span className="text-gray-500 text-sm sm:text-base">
                                                                Не пройдено
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="bg-gray-200 h-px w-full my-4"></div>
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
        </div>
    )
}

export default TopicTestsResult
