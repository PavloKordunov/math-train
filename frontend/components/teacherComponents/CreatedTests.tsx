import { use } from "react"
import TeacherTestItem from "../TeacherTestItem"

const CreatedTest = ({testsPromise, studentsPromise}: any) => {

    const tests: any = use(testsPromise)
    const students= use(studentsPromise) 

    return (
        <div>
            {tests.length > 0 ? tests.map((test: any) => (
              <TeacherTestItem key={test.id} test={test} students={students}/>
            )) : <p>Поки що немає тестів</p>}
        </div>
    )
}

export default CreatedTest