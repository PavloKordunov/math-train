// components/math/LatexTransform.tsx

'use client';

import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const LatexTransform = ({
    content,
    className = '',
}: {
    content: string;
    className?: string;
}) => {
    const config = {
        // Завантажуємо ТІЛЬКИ парсер AsciiMath та пакет ams
        loader: { load: ['input/asciimath', '[tex]/ams'] },
        asciimath: {
             // Явно вказуємо делімітери AsciiMath (хоча ` є за замовчуванням)
             delimiters: [['`', '`']]
        },
        // Повністю виключаємо конфігурацію TeX
        // tex: { ... }, // Закоментовано або видалено
        svg: {
            fontCache: 'global',
        },
    };

    return (
        // MathJaxContext на вищому рівні
        <MathJaxContext config={config}>
            <div className={`${className} break-words whitespace-pre-wrap`}>
                <MathJax dynamic>
                    {/* Передаємо рядок, який містить текст та AsciiMath у `` */}
                    <span>{content}</span>
                </MathJax>
            </div>
        </MathJaxContext>
    );
};

export default LatexTransform;