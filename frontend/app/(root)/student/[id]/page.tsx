'use client'

import StudentProgressChart from "@/components/StudentProgressChart"
import TestResults from "@/components/TestResults"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"

const StudentPage = () => {
    const params = useParams()
    const studentId = params?.id

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [student, setStudent] = useState<any | null>(null)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [tests, setTest] = useState<any | null>([])
    const [testResuls, setTestResults] = useState<any | null>([])
    const [testName, setTestName] = useState('')
    const [selectedTest, setSelectedTest] = useState<any | null>(null)
    const [filtredTests, setFilteredTests] = useState<any[]>([])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    useEffect(() => {
        const getStudent = async() => {
            try {
                const res = await fetch(`${API_URL}/api/student/${studentId}`)
                const data = await res.json()

                console.log(data)
                setStudent(data)
            } catch (error) {
                console.log(error)
            }
        }

        const geAllTests = async() => {
            try {
                const res = await fetch(`${API_URL}/api/test`)
                const data = await res.json()

                console.log(data)
                setTest(data)
            } catch (error) {
                console.log(error)
            }
        }

        const getAllStudentPerfomenceById = async() => {
            try {
               const res = await fetch(`${API_URL}/api/perfomence/one/student/${studentId}`)
               const data = await res.json()

               console.log(data)
               setTestResults(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllStudentPerfomenceById()
        geAllTests()
        getStudent()
    }, [])

    const assignTest = async() => {
        try {
            const res = await fetch(`${API_URL}/api/test/${selectedTest.id}/assign`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    testId: selectedTest.id,
                    studentId: studentId
                })
            })

            const data = await res.json()
            console.log(data)
            setSelectedTest(null)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const filtered = tests.filter((test: any) =>
            test?.title?.toLowerCase().includes(testName.toLowerCase())
        );
        setFilteredTests(filtered);
    }, [testName, tests]);

    useEffect(() => {
        if(selectedTest !== null){
            assignTest()
        }
    }, [selectedTest])

    return (
        <div>
            <div className="flex items-center mb-6">
                <Image src='/person.png' alt='' width={100} height={100} className="mr-8" />
                <div className="flex-col h-fit items-center">
                    <p className="font-semibold text-[28px]/10">{student?.name}</p>
                    <p className="text-gray-400 text-[20px]">{student?.email}</p>
                </div>
            </div>
            <div className="flex items-center gap-6 mb-10">
                <button className="border border-gray-400 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase">Надати повний доступ</button>
                <button className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase" onClick={toggleModal}>Назначити тест</button>    
            </div>
            <StudentProgressChart testResults={testResuls} />
            <h2 className="mt-10 font-bold text-[28px]">Пройдені тести</h2>
            <div className="py-6">
                {testResuls.length > 0 ? testResuls.map((test: any) => (
                    <TestResults key={test.id} test={test} />
                )) : <p>Поки що немає зданих тестів</p>}
            </div>

            {isModalOpen && 
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center">
                    <div className="bg-[#F0F4F8] px-10 py-6 rounded-[31px] w-fit">
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-[28px] text-black font-semibold mr-12">Виберіть тест</p>
                            <FaTimes size={24} color="#000" onClick={toggleModal} />
                        </div>
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-2 text-black bg-[#fff] border-none rounded-[10px] mb-3 focus:outline-none"
                            placeholder="Введіть назву теста"
                            value={testName}
                            onChange={(e: any) => setTestName(e.target.value)}
                        />
                        <div className="max-h-60 overflow-y-auto">
                            {filtredTests.length > 0 ? (
                                filtredTests.map((test) => (
                                    <div key={test.id} className="text-black py-2 px-4 rounded-md bg-white mb-2"
                                        onClick={() => {
                                            setSelectedTest(test)
                                            toggleModal()
                                        }}
                                    >
                                        {test.title}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">Тестів не знайдено</p>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default StudentPage