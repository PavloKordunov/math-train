// LatexTransform.tsx
'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const MathJax = dynamic(
    () => import('better-react-mathjax').then((mod) => mod.MathJax),
    { ssr: false }
)

function renderBoldParts(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = []
    const regex = /\*\*(.*?)\*\*/g
    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
        }
        parts.push(<strong key={`b-${match.index}`}>{match[1]}</strong>)
        lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }
    return parts
}

const LatexTransform = ({ content }: { content: string }) => {
    if (!content?.trim()) {
        return null
    }

    const nodes = renderBoldParts(content)

    return (
        <div className={`break-words whitespace-pre-wrap text-xl`}>
            {/* 👇 ОСНОВНА ЗМІНА ТУТ — ДОДАЄМО KEY 👇 */}
            <MathJax dynamic key={content}>
                <span>{nodes}</span>
            </MathJax>
        </div>
    )
}

export default LatexTransform
