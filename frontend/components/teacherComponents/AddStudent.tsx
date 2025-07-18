'use client'

import { useUser } from '@/hooks/useUser'
import { useState } from 'react'

const AddStudent = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { user } = useUser()

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: '',
    })

    const handleRegister = async () => {
        try {
            const res = await fetch(`${API_URL}/api/student/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: registerData.email,
                    name: registerData.name,
                    password: registerData.password,
                    teacherId: user?.id,
                }),
            })

            const data = await res.json()
            setIsOpenModal(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpenModal(true)}
                className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 text-gray-700 text-sm sm:text-lg rounded-lg font-semibold transition"
            >
                <img src="/icon_teacher_3.png" alt="Plus" className="w-5 h-5" />
                Додати учня
            </button>
            {isOpenModal && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10000">
                        <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                            Добавити Учня
                        </h1>

                        <div className="space-y-6">
                            <div className="text-left">
                                <label className="text-sm text-[#000] font-medium mb-1 block">
                                    🧑‍💼 Ім'я
                                </label>
                                <input
                                    type="text"
                                    value={registerData.name}
                                    onChange={(e) =>
                                        setRegisterData((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                                    placeholder="Введіть ім'я учня"
                                />
                            </div>
                            <div className="text-left">
                                <label className="text-sm text-[#000] font-medium mb-1 block">
                                    {' '}
                                    📧 E-mail
                                </label>
                                <input
                                    type="email"
                                    value={registerData.email}
                                    onChange={(e) =>
                                        setRegisterData((prev) => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                    className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="text-left">
                                <label className="text-sm text-[#000] font-medium mb-1 block">
                                    {' '}
                                    🔑 Пароль
                                </label>
                                <input
                                    value={registerData.password}
                                    onChange={(e) =>
                                        setRegisterData((prev) => ({
                                            ...prev,
                                            password: e.target.value,
                                        }))
                                    }
                                    type="password"
                                    className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                                    placeholder="********"
                                />
                            </div>

                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setIsOpenModal(false)}
                                    className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px]  transition"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={handleRegister}
                                    className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md  transition"
                                >
                                    Добавити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddStudent
