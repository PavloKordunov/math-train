'use client'

import TestItem from '@/components/TestItem'
import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'

const Home = () => {
    const [tests, setTests] = useState<any | null>([])
    const { user } = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        if (!user) return
        const getAssignedTests = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/assign/${user?.id}`
                )

                const data = await res.json()
                setTests(data.data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAssignedTests()
    }, [user])

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col py-2">
            {/* <div className="w-full py-10 flex gap-2 items-center justify-center mb-2">
                <input
                    type="text"
                    className="w-100 px-3 py-3 rounded-[16px] ring-[1px] ring-[#CDC8C8] bg-[#EDEDED] text-[18px] focus:outline-none focus:ring-1 focus:ring-[#CA193A] text-[#000]"
                    placeholder="Ваедіть код тесту"
                />
                <button className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition">
                    Ввести
                </button>
            </div> */}
            <h1 className="text-4xl font-bold mb-6">Активні тести: </h1>
            <div>
                {tests.length > 0 ? (
                    tests.map((test: any) => (
                        <TestItem key={test.id} test={test} />
                    ))
                ) : (
                    <p>Поки що немає тестів</p>
                )}
            </div>
        </div>
    )
}

export default Home
