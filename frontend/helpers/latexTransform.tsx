// components/math/LatexTransform.tsx

'use client'

import React from 'react'
import { MathJax, MathJaxContext } from 'better-react-mathjax'

const LatexTransform = ({
    content,
    className = '',
}: {
    content: string
    className?: string
}) => {
    const config = {
        loader: { load: ['input/asciimath', '[tex]/ams'] },
        asciimath: {
            delimiters: [['`', '`']],
        },
        svg: {
            fontCache: 'global',
        },
    }
    return (
        <MathJaxContext config={config}>
            <div className={`${className} break-words whitespace-pre-wrap`}>
                <MathJax dynamic>
                    <span>{content}</span>
                </MathJax>
            </div>
        </MathJaxContext>
    )
}

export default LatexTransform
