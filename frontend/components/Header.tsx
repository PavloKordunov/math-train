'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useUser } from '@/hooks/useUser'
import { useRouter, usePathname } from 'next/navigation'
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { deleteCookie } from 'cookies-next'

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const { user, setUser } = useUser()

    const logOut = async () => {
        try {
            await signOut({
                redirect: false,
                callbackUrl: '/login',
            })

            localStorage.removeItem('user')
            localStorage.removeItem('test')
            localStorage.removeItem('time-left')
            deleteCookie('user', {
                path: '/',
                secure: true,
            })
            deleteCookie('token', {
                path: '/',
                secure: true,
            })

            setUser(null)
            router.push('/login')
            router.refresh()
        } catch (error) {
            console.error('Помилка під час виходу:', error)
            toast.error('Не вдалося вийти. Спробуйте ще раз.')
        }
    }

    const getActiveTab = () => {
        if (user?.status === 'Student') {
            if (pathname === '/home') return 'home'
            if (pathname === '/perfomence') return 'map'
        } else if (user?.status === 'Teacher') {
            if (pathname === '/teacher') return 'home'
            if (pathname === `/teacher-performance`) return 'map'
            if (pathname === `/schedule`) return 'schedule'
            if (pathname === '/topic-tests/mathematics') return 'tests'
        }
        return ''
    }

    const activeTab = getActiveTab()

    const studentNavItems = [
        {
            label: 'Домашня',
            href: '/home',
            key: 'home',
        },
        {
            label: 'Успішність',
            href: '/perfomence',
            key: 'map',
        },
    ]

    const teacherNavItems = [
        {
            label: 'Домашня',
            href: '/teacher',
            key: 'home',
        },
        {
            label: 'Студенти',
            href: '/teacher-performance',
            key: 'map',
        },
        {
            label: 'Розклад',
            href: '/schedule',
            key: 'schedule',
        },
        {
            label: 'Тести',
            href: `/topic-tests/${user?.subject?.toLocaleLowerCase()}`,
            key: 'tests',
        },
    ]

    const adminNavItems: any = []

    const navItems =
        user?.status === 'Student'
            ? studentNavItems
            : user?.status === 'Teacher'
            ? teacherNavItems
            : adminNavItems

    return (
        <nav className="w-full bg-white shadow-md px-4 py-4 md:px-10 md:py-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 md:w-14 md:h-14">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item: any) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={`text-lg relative transition duration-200 ${
                                activeTab === item.key
                                    ? 'text-[#FA8E66] font-bold'
                                    : 'text-black font-medium'
                            }`}
                        >
                            {item.label}
                            {activeTab === item.key && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FA8E66]"></span>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex relative items-center">
                    <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        <FaUserCircle size={36} color="#2F2929" />
                        <div className="flex flex-col text-left">
                            <p className="text-base font-semibold text-black">
                                {user?.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {user?.email}
                            </p>
                        </div>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 top-14 mt-2 bg-white shadow-lg rounded-xl w-52 py-3 px-2 z-50 border border-gray-200">
                            <Link
                                href={
                                    user?.status === 'Student'
                                        ? `/student/${user?.id}`
                                        : '/teacher'
                                }
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Профіль
                            </Link>
                            <button
                                onClick={() => {
                                    logOut()
                                    setIsDropdownOpen(false)
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
                            >
                                <FiLogOut />
                                Вийти
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col mt-4 gap-3 md:hidden">
                    {navItems.map((item: any) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={`text-base relative transition duration-200 ${
                                activeTab === item.key
                                    ? 'text-[#FA8E66] font-bold'
                                    : 'text-black font-medium'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-2 border-t pt-3">
                        <div className="flex items-center gap-2 mb-2">
                            <FaUserCircle size={30} color="#2F2929" />
                            <div>
                                <p className="text-sm font-semibold text-black">
                                    {user?.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <Link
                            href={
                                user?.status === 'Student'
                                    ? `/student/${user?.id}`
                                    : '/teacher'
                            }
                            className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Профіль
                        </Link>
                        <button
                            onClick={logOut}
                            className="w-full text-left px-2 py-1 text-sm text-red-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
                        >
                            <FiLogOut />
                            Вийти
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
