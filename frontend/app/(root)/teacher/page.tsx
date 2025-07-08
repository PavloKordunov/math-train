import CreatedTest from '@/components/teacherComponents/CreatedTests'
import { getAllStudents, getAllTest } from '@/lib/utils'
import Link from 'next/link'
import { Suspense } from 'react'
import { ClipLoader } from 'react-spinners'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const TeacherPage = ({ params }: any) => {
    const teacherId = params.id
    const testsPromise = getAllTest(teacherId)
    const studentsPromise = getAllStudents()

    return (
        <div className="flex flex-col py-2">
            <div className="w-full py-10 mb-6 gap-10">
                <h1 className="text-3xl font-bold mb-6">
                    👩‍🏫 Кабінет викладача
                </h1>
                <Link
                    href="/create-test"
                    className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase"
                >
                    Добавити тест
                </Link>
            </div>
            <h1 className="text-4xl font-bold mb-6">Створені тести</h1>

            <Suspense fallback={<ClipLoader color="#36d7b7" size={40} />}>
                <CreatedTest
                    testsPromise={testsPromise}
                    studentsPromise={studentsPromise}
                />
            </Suspense>
        </div>
    )
}

export default TeacherPage
