import { useEffect } from 'react'
import { useUser } from './useUser'
import axios from 'axios'

export const usePing = () => {
    const { user } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    useEffect(() => {
        if (user?.id && user.status === 'Student') {
            const interval = setInterval(() => {
                axios.post(`${API_URL}/api/student/${user.id}/ping`)
            }, 30000)

            return () => clearInterval(interval)
        }
    }, [user?.id])
}
