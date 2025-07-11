'use client'

import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { ClipLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'
import { setCookie } from 'cookies-next'

export default function LoginPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const router = useRouter()
    const { user, setUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/login/native`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password,
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(
                    'Сталась помилка! Не вірний пароль або електронна адресса'
                )
                setLoginData(() => ({
                    email: '',
                    password: '',
                }))
                setIsLoading(false)
                return
            }

            setUser(data.user)
            setCookie('user', JSON.stringify(data.user), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            })
            toast.success('Успішно! Ви увійшли у свій аккаунт')

            if (data.user.status === 'Teacher') {
                router.push('/teacher')
            } else if (data.user.status === 'Student') {
                router.push('/home')
            } else if (data.user.status === 'Admin') {
                router.push('/admin')
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            toast.error(
                'Сталась помилка! Не вірний пароль або електронна адресса '
            )
        } finally {
            setIsLoading(false)
        }
    }

    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            const role = session?.user?.status

            if (role === 'Teacher') {
                router.push('/teacher')
            } else if (role === 'Student') {
                router.push('/home')
            } else if (role === 'Student') {
                router.push('/home')
            }
        }
    }, [session, status, router, user])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">
            <Toaster position="bottom-center" />
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
                <h1 className="text-2xl md:text-3xl text-[#000] font-bold mb-8 flex items-center justify-center gap-2">
                    Log in to the platform
                </h1>

                <form className="space-y-6">
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            {' '}
                            📧 E-mail
                        </label>
                        <input
                            value={loginData?.email}
                            onChange={(e) =>
                                setLoginData((prev: any) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            type="email"
                            className="w-full px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#000]"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="text-left">
                        <label className="text-sm text-[#000] font-medium mb-1 block">
                            {' '}
                            🔑 Password
                        </label>
                        <input
                            value={loginData?.password}
                            onChange={(e) =>
                                setLoginData((prev: any) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                            type="password"
                            className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                            placeholder="********"
                        />
                    </div>
                    <p className="text-sm text-gray-500 text-left">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-[#4CAF50] cursor-pointer hover:underline"
                        >
                            Sign up →
                        </Link>
                    </p>

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                        disabled={isLoading}
                        className="px-8 py-3 rounded-[16px] bg-[#1565C0] text-white font-semibold text-[16px] shadow-md transition"
                    >
                        {isLoading ? (
                            <ClipLoader color="#36d7b7" size={20} />
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>

                <div className="flex items-center gap-4 mt-8 justify-center">
                    <button
                        onClick={() => signIn('google')}
                        className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition"
                    >
                        <FcGoogle size={24} />
                    </button>
                    <button
                        onClick={() => signIn('github')}
                        className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition"
                    >
                        <FaGithub size={24} color="black" />
                    </button>
                </div>
            </div>
        </div>
    )
}
