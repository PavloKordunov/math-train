'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function VerifyPage() {
    const params = useSearchParams()
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
        'loading'
    )
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        const code = params?.get('code')
        if (status !== 'loading') {
            return
        }
        if (!code) return setStatus('error')
        fetch(`${API_URL}/api/teacher/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code }),
        })
            .then(async (res) => {
                console.log('res: ', res)
                res.ok ? setStatus('success') : setStatus('error')
            })
            .catch(() => {
                setStatus('error')
            })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16 bg-white rounded-xl shadow-md text-center max-w-lg w-full">
                {status === 'loading' && (
                    <>
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-6"></div>
                        <h1 className="text-3xl font-semibold mb-2">
                            Перевірка...
                        </h1>
                        <p className="text-gray-600">Будь ласка, зачекайте.</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="text-green-500 mb-6 mx-auto">
                            <svg
                                className="w-16 h-16 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <h1 className="text-3xl font-semibold mb-2">
                            Пошта підтверджена!
                        </h1>
                        <p className="text-gray-600">
                            Ваш обліковий запис тепер активний.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Повернутись на головну
                        </Link>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="text-red-500 mb-6 mx-auto">
                            <svg
                                className="w-16 h-16 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <h1 className="text-3xl font-semibold mb-2">
                            Помилка!
                        </h1>
                        <p className="text-gray-600">
                            Код недійсний або прострочений.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Повернутись на головну
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}
