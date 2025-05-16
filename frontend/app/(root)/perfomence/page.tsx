'use client'

import TestResults from "@/components/TestResults"
import { useEffect, useState } from "react"

const StudentPerfomence = () => {

    const [test,setTest] = useState<any | null>([])

    useEffect(() => {
        const getAllStudentPerfomence = async() => {
            try {
               const res = await fetch('http://localhost:8080/api/perfomence/student')
               const data = await res.json()

               console.log(data)
               setTest(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudentPerfomence()
    }, [])

    return (
        <div className="py-12">
            {test.length > 0 ? test.map((test: any) => (
                <TestResults key={test.id} test={test} />
            )) : <p>Поки що немає зданих тестів</p>}
        </div>
    )
}

export default StudentPerfomence