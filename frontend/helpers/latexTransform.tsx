'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MathJax = dynamic(
    () => import('better-react-mathjax').then((mod) => mod.MathJax),
    { ssr: false }
)

const LatexTransform = ({
    content,
    className = '',
}: {
    content: string
    className?: string
}) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setReady(true), 0)
        return () => clearTimeout(timeout)
    }, [content])

    if (!content?.trim() || !ready) return null

    return (
        <div className={`${className} break-words whitespace-pre-wrap`}>
            <MathJax dynamic>
                <span>{content}</span>
            </MathJax>
        </div>
    )
}

export default LatexTransform
