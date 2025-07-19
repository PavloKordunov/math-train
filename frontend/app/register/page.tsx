'use client'

import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaBookOpen, FaFeatherAlt, FaGithub, FaPenFancy } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { FaCalculator } from 'react-icons/fa'
import { RegisterSchema } from '@/lib/validation'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import { setCookie } from 'cookies-next'

export default function RegisterPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
    })
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [openSubjectModal, setOpenSubjectModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { setUser } = useUser()

    const validateForm = () => {
        try {
            RegisterSchema.parse({
                ...registerData,
                repeatPassword,
            })
            setErrors({})
            return true
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {}
                error.issues.forEach((issue) => {
                    if (issue.path.length > 0) {
                        const fieldName = issue.path[0] as string
                        newErrors[fieldName] = issue.message
                    }
                })
                setErrors(newErrors)
            }
            return false
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleRegister = async (subject: string) => {
        if (!validateForm()) {
            toast.error('Будь ласка, виправте помилки у формі')
            return
        }

        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/teacher/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...registerData,
                    subject: subject,
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Помилка реєстрації')
            }

            setUser(data.user)
            setCookie('user', JSON.stringify(data.user), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            })
            setCookie('token', data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            })
            toast.success('Реєстрація успішна!')

            if (data.user.status === 'Student') {
                router.push('/home')
            } else if (data.user.status === 'Teacher') {
                router.push('/teacher')
            }
            setIsLoading(false)
        } catch (error: any) {
            console.error(error)
            toast.error(error.message || 'Помилка реєстрації')
        } finally {
            setIsLoading(false)
        }
    }

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
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10">
                <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                    Реєстрація
                </h1>

                <form className="space-y-4">
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            🧑‍💼 Ім'я
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={registerData.name}
                            onChange={handleChange}
                            className={`w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none ${
                                errors.name
                                    ? 'border border-red-500'
                                    : 'focus:ring-2 focus:ring-[#1565C0]'
                            }`}
                            placeholder="Ваше ім'я"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1 text-left">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            📧 Електронна пошта
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={registerData.email}
                            onChange={handleChange}
                            className={`w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none ${
                                errors.email
                                    ? 'border border-red-500'
                                    : 'focus:ring-2 focus:ring-[#1565C0]'
                            }`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 text-left">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            📱 Телефон
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            value={registerData.phone}
                            onChange={handleChange}
                            className={`w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none ${
                                errors.phone
                                    ? 'border border-red-500'
                                    : 'focus:ring-2 focus:ring-[#1565C0]'
                            }`}
                            placeholder="0987654321"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1 text-left">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            🔑 Пароль
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={registerData.password}
                            onChange={handleChange}
                            className={`w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none ${
                                errors.password
                                    ? 'border border-red-500'
                                    : 'focus:ring-2 focus:ring-[#1565C0]'
                            }`}
                            placeholder="********"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1 text-left">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            🔑 Підтвердіть пароль
                        </label>
                        <input
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            className={`w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none ${
                                errors.repeatPassword
                                    ? 'border border-red-500'
                                    : 'focus:ring-2 focus:ring-[#1565C0]'
                            }`}
                            placeholder="********"
                        />
                        {errors.repeatPassword && (
                            <p className="text-red-500 text-xs mt-1 text-left">
                                {errors.repeatPassword}
                            </p>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 text-left">
                        Вже маєте акаунт?{' '}
                        <Link
                            href="/login"
                            className="text-[#F87537] cursor-pointer hover:underline"
                        >
                            Увійти →
                        </Link>
                    </p>

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            if (validateForm()) {
                                setOpenSubjectModal(true)
                            }
                        }}
                        disabled={isLoading}
                        className="px-8 py-3 rounded-[16px] bg-[#1565C0] text-white font-semibold text-[16px] shadow-md transition hover:bg-[#0d47a1] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Завантаження...' : 'Зареєструватись'}
                    </button>
                </form>

                <div className="flex items-center gap-4 mt-8 justify-center">
                    <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg hover:bg-gray-50 transition">
                        <FcGoogle size={24} />
                    </button>
                    <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg hover:bg-gray-50 transition">
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
                                        onClick={() =>
                                            handleRegister(subject.value)
                                        }
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
