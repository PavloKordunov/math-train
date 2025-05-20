'use client'

import { use } from "react"
import StudentProgressChart from "../StudentProgressChart"
import TestResults from "../TestResults"

const StudentResults = ({studentPromise, studentResultsPromise}: any) => {
    
    const testResuls: any = use(studentResultsPromise)
    const student: any = use(studentPromise)

    return (
        <div>
            <StudentProgressChart testResults={testResuls} />
            <h2 className="mt-10 font-bold text-[28px]">Пройдені тести</h2>
            <div className="py-6">
                {testResuls.length > 0 ? testResuls.map((test: any) => (
                    <TestResults key={test.id} test={test} student={student} />
                )) : <p>Поки що немає зданих тестів</p>}
            </div>
        </div>
    )
}

export default StudentResults