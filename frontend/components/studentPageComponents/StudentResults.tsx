'use client'

import { use, useState } from 'react'
import StudentProgressChart from '../StudentProgressChart'
import TestResults from '../TestResults'
import { useUser } from '@/hooks/useUser'
import TestItem from '../TestItem'

const StudentResults = ({
    studentPromise,
    studentResultsPromise,
    assignedTestsPromise,
}: any) => {
    const testResuls: any = use(studentResultsPromise)
    const student: any = use(studentPromise)
    const assignedTests: any = use(assignedTestsPromise)

    const [active, setActive] = useState('passTests')
    const { user } = useUser()

    return (
        <div>
            <StudentProgressChart testResults={testResuls} />
            {user?.status === 'Student' && (
                <div>
                    <h2 className="mt-10 font-bold text-[28px]">
                        Пройдені тести
                    </h2>
                    <div className="py-6">
                        {testResuls.length > 0 ? (
                            testResuls.map((test: any) => (
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
                </div>
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
                            {testResuls.length > 0 ? (
                                testResuls.map((test: any) => (
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
