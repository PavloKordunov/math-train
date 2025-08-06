'use client'

import NavBar from '@/components/Header'
import { useUser } from '@/hooks/useUser'
import { useSession } from 'next-auth/react'
import { ReactNode, useEffect, useState } from 'react'
import { setCookie } from 'cookies-next'
import { ClipLoader } from 'react-spinners'
import { usePing } from '@/hooks/usePing'

export default function HomeLayout({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession()
    const { user, setUser } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [loading, setLoading] = useState(false)

    usePing()

    useEffect(() => {
        const handleOAuthLogin = async () => {
            if (status === 'authenticated' && session?.user?.email && !user) {
                setLoading(true)
                try {
                    const res = await fetch(`${API_URL}/api/login/oauth`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: session.user.email }),
                    })

                    if (!res.ok) throw new Error('OAuth login failed')

                    const data = await res.json()

                    setUser(data.user)

                    setCookie('user', JSON.stringify(data.user), {
                        maxAge: 30 * 24 * 60 * 60,
                        path: '/',
                        secure: true,
                        sameSite: 'strict',
                    })
                } catch (error) {
                    console.error('OAuth login error:', error)
                } finally {
                    setLoading(false)
                }
            }
        }

        handleOAuthLogin()
    }, [status, session, setUser, user])

    if (status === 'loading' || loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#36d7b7" size={50} />
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="relative">
                <div className="fixed inset-x-0 top-0 z-50">
                    <NavBar />
                </div>
            </div>
            <div className="pt-20 px-5 pb-10 md:px-20 md:pt-30 md:pb-20">
                {children}
            </div>
        </div>
    )
}
