'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import Image from 'next/image'
import { useUser } from '@/hooks/useUser'
import { useRouter, usePathname } from 'next/navigation'

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const { user, setUser } = useUser()

    const logOut = async () => {
        await signOut({ redirect: false })
        localStorage.removeItem('user')
        setUser(null)
        router.push('/login')
    }

    const getActiveTab = () => {
        if (user?.status === 'Student') {
            if (pathname === '/home') return 'home'
            if (pathname === '/perfomence') return 'map'
        } else {
            if (pathname === '/teacher') return 'home'
            if (pathname === '/teacher-performance') return 'map'
        }
        if (pathname === '/topic-tests') return 'tests'
        return ''
    }

    const activeTab = getActiveTab()

    return (
        <div className="w-full bg-[#fff] px-10 py-6 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-14 h-14 relative">
                    <Image
                        src="/logo.png"
                        alt=""
                        fill
                        className="object-contein"
                    />
                </div>
            </div>
            <div className="flex gap-12">
                <Link
                    href={`${
                        user?.status === 'Student' ? '/home' : '/teacher'
                    }`}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                        activeTab === 'home'
                            ? 'text-[#FA8E66] font-bold'
                            : 'text-black font-medium'
                    }`}
                >
                    Домашня
                    {activeTab === 'home' && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FA8E66]"></span>
                    )}
                </Link>
                <Link
                    href={`${
                        user?.status === 'Student'
                            ? '/perfomence'
                            : '/teacher-performance'
                    }`}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                        activeTab === 'map'
                            ? 'text-[#FA8E66] font-bold'
                            : 'text-black font-medium'
                    }`}
                >
                    {user?.status === 'Student' ? 'Успішність' : 'Студенти'}
                    {activeTab === 'map' && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FA8E66]"></span>
                    )}
                </Link>
                <Link
                    href={`/topic-tests`}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                        activeTab === 'tests'
                            ? 'text-[#FA8E66] font-bold'
                            : 'text-black font-medium'
                    }`}
                >
                    Тести
                    {activeTab === 'tests' && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FA8E66]"></span>
                    )}
                </Link>
            </div>

            <div className="relative">
                <div
                    className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                    <FaUserCircle size={48} color="#2F2929" />
                    <div className="flex flex-col">
                        <p className="text-[18px] font-semibold text-black">
                            {user?.name}
                        </p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                </div>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-52 py-3 px-2 z-50 border border-gray-200">
                        <Link
                            href={`${
                                user?.status === 'Student'
                                    ? `/student/${user?.id}`
                                    : 'teacher'
                            }`}
                            className="block px-4 py-2 text-[16px] text-gray-800 hover:bg-gray-100 rounded-md"
                        >
                            Профіль
                        </Link>
                        <button
                            onClick={logOut}
                            className="w-full text-left px-4 py-2 text-[16px] text-red-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
                        >
                            <FiLogOut />
                            Вийти
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar
