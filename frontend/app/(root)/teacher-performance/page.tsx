import StudentsList from "@/components/teacher-performance/StudentList"
import { getAllStudents } from "@/lib/utils"
import { Suspense} from "react"
import { ClipLoader } from "react-spinners"

const TeacherPerformance = () => {
    const initialStudentsPromise = getAllStudents()

    return (
        <div>
            <Suspense fallback={<ClipLoader color="#36d7b7" size={40} /> }>
                <StudentsList initialStudentsPromise={initialStudentsPromise} />
            </Suspense>
        </div>
    )
}

export default TeacherPerformance