'use client'

import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaBookOpen, FaFeatherAlt, FaGithub, FaPenFancy } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { FaCalculator } from 'react-icons/fa'
import { RegisterSchema } from '@/lib/validation'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import { setCookie } from 'cookies-next'
import PlansPage from '@/components/PlansPage'

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
    const [openPlans, setOpenPlans] = useState(false)
    const params = useSearchParams()
    const [openVerifyModal, setOpenVerifyModal] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

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
            console.log(data)

            if (!res.ok) {
                toast.error(data.message || 'Помилка реєстрації')
            }

            // setUser(data.user)
            // setCookie('user', JSON.stringify(data.user), {
            //     maxAge: 30 * 24 * 60 * 60,
            //     path: '/',
            //     secure: process.env.NODE_ENV === 'production',
            //     sameSite: 'strict',
            // })
            // setCookie('token', data.accessToken, {
            //     maxAge: 30 * 24 * 60 * 60,
            //     path: '/',
            //     secure: process.env.NODE_ENV === 'production',
            //     sameSite: 'strict',
            // })
            // toast.success('Реєстрація успішна!')

            // if (data.user.status === 'Student') {
            //     router.push('/home')
            // } else if (data.user.status === 'Teacher') {
            //     router.push('/teacher')
            // }
            setOpenSubjectModal(false)
            setOpenVerifyModal(true)

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
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* <div className="absolute top-6 left-6 hidden md:flex items-center gap-2 z-10">
                <div className="w-32 h-32 relative">
                    <Image
                        src="/logo.png"
                        alt="Логотип"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div> */}

            <div className="bg-white rounded-3xl shadow-md w-full max-w-md py-12 px-6 sm:px-10 text-center z-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-[#000]">
                    Реєстрація
                </h1>

                <form className="space-y-4">
                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            🧑‍💼 Ім'я
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={registerData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.name
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="Ваше ім'я"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            📧 Електронна пошта
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={registerData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.email
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            📱 Телефон
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            value={registerData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.phone
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="0987654321"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            🔑 Пароль
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={registerData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.password
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="********"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            🔑 Підтвердіть пароль
                        </label>
                        <input
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.repeatPassword
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="********"
                        />
                        {errors.repeatPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.repeatPassword}
                            </p>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 text-left">
                        Вже маєте акаунт?{' '}
                        <Link
                            href="/login"
                            className="text-[#F87537] hover:underline font-medium"
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
                        className="w-full py-3 rounded-xl bg-[#1565C0] text-white font-semibold text-base shadow-md transition hover:bg-[#0d47a1] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Завантаження...' : 'Зареєструватись'}
                    </button>
                </form>

                <div className="flex items-center gap-4 mt-8 justify-center">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition">
                        <FcGoogle size={24} />
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition">
                        <FaGithub size={24} color="black" />
                    </button>
                </div>
            </div>

            {openVerifyModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl text-center">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            Підтвердіть вашу пошту
                        </h3>
                        {!emailSent ? (
                            <>
                                <p className="mb-4">
                                    Натисніть кнопку, щоб надіслати лист
                                    підтвердження.
                                </p>
                                <button
                                    onClick={async () => {
                                        setIsLoading(true)
                                        try {
                                            const res = await fetch(
                                                `${API_URL}/api/teacher/send-verification`,
                                                {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type':
                                                            'application/json',
                                                    },
                                                    body: JSON.stringify({
                                                        email: registerData.email,
                                                    }),
                                                }
                                            )
                                            if (!res.ok)
                                                throw new Error(
                                                    'Не вдалося надіслати лист'
                                                )
                                            setEmailSent(true)
                                            toast.success(
                                                'Лист надіслано! Перевірте пошту.'
                                            )
                                        } catch (err: any) {
                                            toast.error(err.message)
                                        } finally {
                                            setIsLoading(false)
                                        }
                                    }}
                                    className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    Надіслати лист
                                </button>
                            </>
                        ) : (
                            <div>
                                <p className="text-green-600 mb-4">
                                    Лист надіслано! Підтвердьте пошту через
                                    посилання.
                                </p>
                                <button
                                    onClick={() => setOpenPlans(true)}
                                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                                >
                                    Продовжити
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

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

            {openPlans && <PlansPage />}
        </div>
    )
}
