'use client'

import './globals.css'
import 'mathlive'

import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/hooks/useUser'
import { SubTopicProvider } from '@/helpers/getSubTopicId'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} font-sans`}>
                <SessionProvider>
                    <SubTopicProvider>
                        <UserProvider>{children}</UserProvider>
                    </SubTopicProvider>
                </SessionProvider>
            </body>
        </html>
    )
}

// "dev":"next dev -H 0.0.0.0",
