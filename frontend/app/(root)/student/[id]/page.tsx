import StudentInfo from '@/components/studentPageComponents/StudentIfo'
import StudentActions from '@/components/studentPageComponents/StudentActions'
import StudentResults from '@/components/studentPageComponents/StudentResults'
import {
    getAllStudentPerfomenceById,
    getAllTest,
    getAssignedTests,
    getStudentById,
} from '@/lib/utils'
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'
import { ClipLoader } from 'react-spinners'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const StudentPage = async ({ params }: any) => {
    const studentId = params.id

    const studentPromise = getStudentById(studentId)
    const studentResultsPromise = getAllStudentPerfomenceById(studentId)
    const assignedTestsPromise = getAssignedTests(studentId)

    return (
        <div className="max-w-5xl w-full mx-auto flex flex-col">
            <Toaster position="bottom-center" />
            <Suspense fallback={<ClipLoader color="#36d7b7" size={40} />}>
                <StudentInfo studentPromise={studentPromise} />
                <StudentActions
                    studentPromise={studentPromise}
                    studentId={studentId}
                />
                <StudentResults
                    studentPromise={studentPromise}
                    assignedTestsPromise={assignedTestsPromise}
                    studentResultsPromise={studentResultsPromise}
                />
            </Suspense>
        </div>
    )
}

export default StudentPage
