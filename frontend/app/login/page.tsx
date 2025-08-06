'use client'

import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { ClipLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'
import { setCookie } from 'cookies-next'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginFormData } from '@/lib/validation'
import PlansPage from '@/components/PlansPage'

export default function LoginPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const router = useRouter()
    const { setUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [openPlans, setOpenPlans] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/login/native`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const errorData = await res.json()

                if (errorData.message === 'User not have permission') {
                    toast.error('У вас немає активної підписки')
                    setOpenPlans(true)
                    return
                }
                toast.error(
                    'Сталась помилка! Не вірний пароль або електронна адресса'
                )
                reset()
                setIsLoading(false)
                return
            }

            const responseData = await res.json()
            const token = responseData.accessToken

            if (!token) {
                throw new Error('Token not received in response')
            }

            setCookie('token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: true,
                sameSite: 'strict',
            })

            setUser(responseData.user)
            setCookie('user', JSON.stringify(responseData.user), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: true,
                sameSite: 'strict',
            })

            toast.success('Успішний вхід!')
            router.refresh()
            setIsLoading(false)
        } catch (error: any) {
            console.error(error)
            toast.error('Невірний email або пароль')
            reset()
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <Toaster position="bottom-center" />

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
                    Вхід до платформи
                </h1>

                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="space-y-6"
                >
                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            📧 Електронна пошта
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.email
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#4CAF50]'
                            }`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label className="text-sm font-medium mb-1 block text-[#000]">
                            🔑 Пароль
                        </label>
                        <input
                            {...register('password')}
                            type="password"
                            className={`w-full px-4 py-3 rounded-xl bg-[#e9e5e5] text-sm text-[#000] focus:outline-none focus-visible:ring-2 ${
                                errors.password
                                    ? 'focus-visible:ring-red-500'
                                    : 'focus-visible:ring-[#1565C0]'
                            }`}
                            placeholder="********"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 text-left">
                        Немає акаунту?{' '}
                        <Link
                            href="/register"
                            className="text-[#4CAF50] font-medium hover:underline"
                        >
                            Зареєструватись →
                        </Link>
                    </p>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 rounded-xl bg-[#1565C0] text-white font-semibold text-base shadow-md transition hover:bg-[#0d47a1] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={20} />
                        ) : (
                            'Увійти'
                        )}
                    </button>
                </form>

                <div className="flex items-center gap-4 mt-8 justify-center">
                    <button
                        onClick={() => signIn('google')}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition"
                        disabled={isLoading}
                    >
                        <FcGoogle size={24} />
                    </button>
                    <button
                        onClick={() => signIn('github')}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition"
                        disabled={isLoading}
                    >
                        <FaGithub size={24} color="black" />
                    </button>
                </div>
            </div>

            {openPlans && <PlansPage />}
        </div>
    )
}
