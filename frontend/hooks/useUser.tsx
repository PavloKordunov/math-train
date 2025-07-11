'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'
import { getCookie, setCookie, deleteCookie } from 'cookies-next'

interface User {
    id?: string
    email?: string
    name?: string
    status: string
}

interface UserContextType {
    user: User | null
    setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        // Читаємо з cookies замість localStorage
        const userCookie = getCookie('user')
        if (userCookie) {
            try {
                setUser(JSON.parse(userCookie.toString()))
            } catch (e) {
                console.error('Failed to parse user cookie', e)
            }
        }
        setInitialized(true)
    }, [])

    useEffect(() => {
        if (!initialized) return

        if (user) {
            setCookie('user', JSON.stringify(user), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            })
        } else {
            deleteCookie('user', { path: '/' })
        }
    }, [user, initialized])

    if (!initialized) return null

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}
