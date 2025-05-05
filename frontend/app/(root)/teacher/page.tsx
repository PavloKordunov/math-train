'use client';

import TeacherTestItem from "@/components/TeacherTestItem";
import Link from "next/link";
import { useEffect, useState } from "react";

const TeacherPage = () => {

  const [students, setStudents] = useState<any[]>([])
  const [tests, setTests] = useState<any[]>([])

  useEffect(() => {
      const getAllStudents =async ( ) => {
          try {
              const res = await fetch('http://localhost:8080/api/student')

              const data = await res.json()
              setStudents(data)
              console.log(data)
          } catch (error) {
              console.log(error)
          }
      }

      const getAllTest = async() => {
        try {
          const res = await fetch('http://localhost:8080/api/test')

          const data = await res.json()
          setTests(data)
          console.log(data)
        } catch (error) {
            console.log(error)
        }
      }

      getAllStudents()
      getAllTest()
  }, [])

  return (
    <div className="flex flex-col py-2">
        <div className="w-full py-10 mb-6 gap-10">
            <h1 className="text-3xl font-bold mb-6">👩‍🏫 Кабінет викладача</h1>
            <Link href='/create-test' className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase">Добавити тест</Link>  
        </div>
        <h1 className="text-4xl font-bold mb-6">Створені тести</h1>
        <div>
            {tests.length > 0 ? tests.map((test) => (
              <TeacherTestItem key={test.id} test={test} students={students}/>
            )) : <p>Поки що немає тестів</p>}
        </div>
    </div>
  );
};

export default TeacherPage;
