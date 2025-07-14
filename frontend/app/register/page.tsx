'use client'

import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import {
    FaCalculator,
    FaPenFancy,
    FaBookOpen,
    FaFeatherAlt,
} from 'react-icons/fa'

export default function RegisterPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
    })

    const [openSubjectModal, setOpenSubjectModal] = useState(false)

    const router = useRouter()
    const [repeatPassword, setRepeatPassword] = useState('')
    const [correct, setCorrect] = useState(false)
    const { user, setUser } = useUser()

    const handleRegister = async (subject: string) => {
        try {
            const res = await fetch(`${API_URL}/api/teacher/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: registerData.email,
                    name: registerData.name,
                    password: registerData.password,
                    phone: registerData.phone,
                    subject: subject,
                }),
            })

            const data = await res.json()
            if (data.user.status === 'Student') {
                router.push('home')
            } else if (data.user.status === 'Teacher') {
                router.push('teacher')
            }
            console.log(data)
            setUser(data.user)
        } catch (error) {
            console.log(error)
        }
        router.push('/home')
    }

    useEffect(() => {
        if (repeatPassword !== '' && repeatPassword === registerData.password) {
            setCorrect(true)
        } else if (repeatPassword !== registerData.password) {
            setCorrect(false)
        }
        console.log(repeatPassword)
        console.log(correct)
    }, [repeatPassword, registerData.password, correct])

    const subjects = [
        {
            name: 'Математика',
            value: 'Mathematics',
            color: '#FDCB6E',
            icon: <FaCalculator size={28} />,
        },
        {
            name: 'Українська мова',
            value: 'Ukrainian',
            color: '#A29BFE',
            icon: <FaPenFancy size={28} />,
        },
        {
            name: 'Англійська мова',
            value: 'English',
            color: '#74B9FF',
            icon: <FaBookOpen size={28} />,
        },
        {
            name: 'Історія України',
            value: 'History',
            color: '#55EFC4',
            icon: <FaFeatherAlt size={28} />,
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-30 h-30 relative mb-4">
                    <Image
                        src="/logo.png"
                        alt=""
                        fill
                        className="object-contein"
                    />
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10">
                <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                    Create a user
                </h1>

                <form className="space-y-6">
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            🧑‍💼 Name
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
                            placeholder="Enter your name"
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
                            📱 phone
                        </label>
                        <input
                            type="tel"
                            value={registerData.phone}
                            onChange={(e) =>
                                setRegisterData((prev) => ({
                                    ...prev,
                                    phone: e.target.value,
                                }))
                            }
                            className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                            placeholder="0987654321"
                        />
                    </div>
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            {' '}
                            🔑 Password
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
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            {' '}
                            🔑 Confirm password
                        </label>
                        <input
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            type="password"
                            className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                            placeholder="********"
                        />
                        {repeatPassword !== '' && correct === false && (
                            <p className="text-[12px] text-red-400 mt-1">
                                Пароль не сходиться
                            </p>
                        )}
                    </div>
                    <p className="text-sm text-gray-500 text-left">
                        Do you already have an account?
                        <Link
                            href="/login"
                            className="text-[#F87537] cursor-pointer hover:underline"
                        >
                            {' '}
                            Log in →
                        </Link>
                    </p>

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setOpenSubjectModal(true)
                        }}
                        className="px-8 py-3 rounded-[16px] bg-[#1565C0] text-white font-semibold text-[16px] shadow-md  transition"
                    >
                        Зареєструватись
                    </button>
                </form>

                <div className="flex items-center gap-4 mt-8 justify-center">
                    <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition">
                        <FcGoogle size={24} />
                    </button>
                    <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition">
                        <FaGithub size={24} color="black" />
                    </button>
                </div>
            </div>
            {openSubjectModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-[600px] shadow-xl">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            Оберіть Ваш предмет
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {subjects.map((subject) => (
                                    <button
                                        key={subject.value}
                                        onClick={() => {
                                            handleRegister(subject.value)
                                        }}
                                        style={{
                                            backgroundColor: subject.color,
                                        }}
                                        className="flex flex-col items-center justify-center gap-2 py-4 px-4 text-white rounded-xl shadow-md hover:scale-105 hover:brightness-95 transition-all duration-200"
                                    >
                                        <div>{subject.icon}</div>
                                        <span className="text-sm sm:text-base font-medium">
                                            {subject.name}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setOpenSubjectModal(false)}
                                className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 hover:underline text-center"
                            >
                                Скасувати
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
