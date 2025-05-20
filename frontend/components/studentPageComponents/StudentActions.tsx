'use client'

import { use, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaTimes } from "react-icons/fa"

const StudentActions = ({studentPromise, testsPromise, studentId}: any) => {

    const student: any = use(studentPromise)
    const tests: any = use(testsPromise)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [filtredTests, setFilteredTests] = useState<any[]>([])
    const [testName, setTestName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const assignTest = async(test: any) => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}/assign`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    testId: test.id,
                    studentId: studentId
                })
            })

            const data = await res.json()
            console.log(data)
            toast.success('Успішно! тест назначено');
        } catch (error) {
            console.log(error)
            toast.error('Сталась помилка тест не було назначено');
        }
    }

    const changeStudentAccess = async() => {
        try {
            const res = await fetch(`${API_URL}/api/student/access/${studentId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const data = await res.json()
            console.log(data)
            toast.success('Успішно! доступ студента було змінено');
        } catch (error) {
            console.log(error)
            toast.error('Сталась помилка доступ студента не було змінено');
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    useEffect(() => {
        const filtered = tests.filter((test: any) =>
            test?.title?.toLowerCase().includes(testName.toLowerCase())
        );
        setFilteredTests(filtered);
    }, [testName, tests]);

    return (
        <div>
            <div className="flex items-center gap-6 mb-10">
                <button className="border border-gray-400 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase" onClick={changeStudentAccess}> {student?.viewAccess ? 'Забрати повний доступ' : 'Надати повний доступ' }</button>
                <button className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase" onClick={toggleModal}>Назначити тест</button>    
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
                                            assignTest(test)
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

export default StudentActions