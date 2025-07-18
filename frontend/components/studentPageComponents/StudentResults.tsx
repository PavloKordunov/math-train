'use client'

import { use, useEffect, useState } from 'react'
import StudentProgressChart from '../StudentProgressChart'
import TestResults from '../TestResults'
import { useUser } from '@/hooks/useUser'
import TestItem from '../TestItem'
import TopicTestsResult from '../TopicTestsResult'

const StudentResults = ({
    studentPromise,
    studentResultsPromise,
    assignedTestsPromise,
}: any) => {
    const testResuls: any = use(studentResultsPromise)
    const student: any = use(studentPromise)
    const assignedTests: any = use(assignedTestsPromise)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [topicTests, setTopicTest] = useState<any[]>([])
    const [filtredTests, setFiltredTests] = useState<any[]>([])
    const [active, setActive] = useState('passTests')
    const [topics, setTopics] = useState<any[]>([])
    const { user } = useUser()

    useEffect(() => {
        const getAllTopicTests = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test/topic`)
                const data = await res.json()
                setTopicTest(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllTopicTests()
    }, [])

    useEffect(() => {
        console.log(topicTests)
        console.log(testResuls)
    }, [topicTests])

    useEffect(() => {
        if (topicTests.length > 0 && testResuls.length > 0) {
            const topicTestIds = new Set(topicTests.map((test) => test.id))
            const filtered = testResuls.filter(
                (test: any) => !topicTestIds.has(test.testId)
            )
            setFiltredTests(filtered)
        }
    }, [topicTests, testResuls])

    useEffect(() => {
        const getaAlltopicsBySubject = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/topic/${user?.subject?.toLowerCase()}`
                )
                const data = await res.json()
                setTopics(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getaAlltopicsBySubject()
    }, [user?.subject])

    return (
        <div>
            <StudentProgressChart testResults={testResuls} />
            {user?.status === 'Student' && (
                <>
                    <div className="flex gap-8 my-10">
                        <p
                            onClick={() => setActive('passTests')}
                            className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                                active === 'passTests'
                                    ? 'text-[#CA193A]'
                                    : 'text-black'
                            } `}
                        >
                            Пройдені тести
                            {active === 'passTests' && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                            )}
                        </p>
                        <p
                            onClick={() => setActive('passTopicTests')}
                            className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                                active === 'passTopicTests'
                                    ? 'text-[#CA193A]'
                                    : 'text-black'
                            } `}
                        >
                            Тести по темах
                            {active === 'passTopicTests' && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                            )}
                        </p>
                    </div>
                    {active === 'passTests' && (
                        <div>
                            {filtredTests.length > 0 ? (
                                filtredTests.map((test: any) => (
                                    <TestResults
                                        key={test.id}
                                        test={test}
                                        student={student}
                                    />
                                ))
                            ) : (
                                <p>Поки що немає зданих тестів</p>
                            )}
                        </div>
                    )}
                    {active === 'passTopicTests' && (
                        <div>
                            <TopicTestsResult
                                topics={topics}
                                testResults={testResuls}
                                user={user}
                                student={student}
                            />
                        </div>
                    )}
                </>
            )}

            {user?.status === 'Teacher' && (
                <div>
                    <div className="flex gap-8 my-10">
                        <p
                            onClick={() => setActive('passTests')}
                            className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                                active === 'passTests'
                                    ? 'text-[#CA193A]'
                                    : 'text-black'
                            } `}
                        >
                            Пройдені тести
                            {active === 'passTests' && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                            )}
                        </p>
                        <p
                            onClick={() => setActive('passTopicTests')}
                            className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                                active === 'passTopicTests'
                                    ? 'text-[#CA193A]'
                                    : 'text-black'
                            } `}
                        >
                            Тести по темах
                            {active === 'passTopicTests' && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                            )}
                        </p>
                        <p
                            onClick={() => setActive('activeTests')}
                            className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                                active === 'activeTests'
                                    ? 'text-[#CA193A]'
                                    : 'text-black'
                            } `}
                        >
                            Активні тести
                            {active === 'activeTests' && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                            )}
                        </p>
                    </div>
                    {active === 'passTests' && (
                        <div>
                            {filtredTests.length > 0 ? (
                                filtredTests.map((test: any) => (
                                    <TestResults
                                        key={test.id}
                                        test={test}
                                        student={student}
                                    />
                                ))
                            ) : (
                                <p>Поки що немає зданих тестів</p>
                            )}
                        </div>
                    )}
                    {active === 'passTopicTests' && (
                        <div>
                            <TopicTestsResult
                                topics={topics}
                                testResults={testResuls}
                                user={user}
                                student={student}
                                assignedTests={assignedTests}
                            />
                        </div>
                    )}
                    {active === 'activeTests' && (
                        <div>
                            {assignedTests.length > 0 ? (
                                assignedTests.map((test: any) => (
                                    <TestItem key={test.id} test={test} />
                                ))
                            ) : (
                                <p>Поки що немає зданих тестів</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default StudentResults
