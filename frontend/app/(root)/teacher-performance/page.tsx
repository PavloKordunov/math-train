import StudentsList from '@/components/teacher-performance/StudentList'
import { getAllStudentsByTeacherID } from '@/lib/utils'
import { Suspense } from 'react'
import { ClipLoader } from 'react-spinners'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const TeacherPerformance = async () => {
    const cookieStore = await cookies()
    const userCookie = cookieStore.get('user')?.value
    const userData = userCookie ? JSON.parse(userCookie) : null

    const initialStudentsPromise = getAllStudentsByTeacherID(userData.id)

    return (
        <div>
            <Suspense fallback={<ClipLoader color="#36d7b7" size={40} />}>
                <StudentsList initialStudentsPromise={initialStudentsPromise} />
            </Suspense>
        </div>
    )
}

export default TeacherPerformance
