import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';
import Link from "next/link";

const TeacherTestItem = ({students, test}: {students: any, test: any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [studentName, setStudentName] = useState('')
    const [selectedStudnt, setSelectedStudent] = useState<any | null>(null)
    const [filtredStudents, setFilteredStudents] = useState<any[]>([])
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    useEffect(() => {
        const filtered = students.filter((student: any) =>
            student.name.toLowerCase().includes(studentName.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [studentName, students]);

    const assignTest = async() => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}/assign`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    testId: test.id,
                    studentId: selectedStudnt?.id
                })
            })

            const data = await res.json()
            console.log(data)
            setSelectedStudent(null)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTest = async() => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(selectedStudnt !== null){
            assignTest()
        }
    }, [selectedStudnt])

    return (
        <div className="flex items-stretch w-fit h-fit mb-8">
            <div className="px-20 py-8 bg-[#FFECE7]">
                <Image src='/mathItemImg.png' alt="" width={100} height={100} />
            </div>
            <div className="px-10 border-[2px] border-[#CDC8C8] border-l-0 flex items-center justify-between min-w-150 w-fit gap-15">
                <div>
                    <p className="font-bold text-[18px] uppercase mb-6">Тест, {test.title}: 5 травня 19:00</p>
                    <div className="flex items-center gap-6">
                        <Link href={`/view-test/${test.id}`} className="border border-gray-400 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase">Переглянути</Link>
                        <button className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase" onClick={toggleModal}>Назначити</button>    
                    </div>
                </div>
                <button className="text-gray-500 hover:text-red-600 ml-4">
                    <MdDelete size={24} onClick={deleteTest}/>
                </button>
            </div>
            {isModalOpen && 
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center">
                    <div className="bg-[#F0F4F8] px-10 py-6 rounded-[31px] w-fit">
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-[28px] text-black font-semibold mr-12">Виберіть студента</p>
                            <FaTimes size={24} color="#000" onClick={toggleModal} />
                        </div>
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-2 text-black bg-[#fff] border-none rounded-[10px] mb-3 focus:outline-none"
                            placeholder="Введіть ім'я студента"
                            value={studentName}
                            onChange={(e: any) => setStudentName(e.target.value)}
                        />
                        <div className="max-h-60 overflow-y-auto">
                            {filtredStudents.length > 0 ? (
                                filtredStudents.map((student) => (
                                    <div key={student.id} className="text-black py-2 px-4 rounded-md bg-white mb-2"
                                        onClick={() => {
                                            setSelectedStudent(student)
                                            toggleModal()
                                        }}
                                    >
                                        {student.name}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">Студента не знайдено</p>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default TeacherTestItem;