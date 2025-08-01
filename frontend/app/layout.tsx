'use client'

import './globals.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/hooks/useUser'
import { SubTopicProvider } from '@/helpers/getSubTopicId'
import { MathJaxContext } from 'better-react-mathjax'

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
    const config = {
        loader: { load: ['input/asciimath', '[tex]/ams'] },
        asciimath: { delimiters: [['`', '`']] },
    }

    return (
        <html lang="en">
            <body className={`${roboto.variable} font-sans`}>
                <SessionProvider>
                    <SubTopicProvider>
                        <UserProvider>
                            <MathJaxContext config={config}>
                                {children}
                            </MathJaxContext>
                        </UserProvider>
                    </SubTopicProvider>
                </SessionProvider>
            </body>
        </html>
    )
}

// "dev":"next dev -H 0.0.0.0",
