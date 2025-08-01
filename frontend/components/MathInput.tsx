'use client'

import React, { useState, useRef, useEffect } from 'react'
import FormulaModal from './testComponents/FormulaModal'

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
    inputType?: 'input' | 'textarea'
}

const MathInput: React.FC<MathInputProps> = ({
    value,
    onChange,
    className,
    placeholder,
    inputType = 'input',
}) => {
    const [showFormulaModal, setShowFormulaModal] = useState(false)
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

    useEffect(() => {}, [value])

    const insertFormulaAtCursor = (formula: string) => {
        const el = inputRef.current
        if (!el) return
        const start = (el as any).selectionStart ?? value.length
        const end = (el as any).selectionEnd ?? value.length
        const before = value.slice(0, start)
        const after = value.slice(end)
        const wrapped = `\`${formula}\``
        const newVal = before + wrapped + after
        onChange(newVal)

        requestAnimationFrame(() => {
            const pos = start + wrapped.length
            ;(el as any).setSelectionRange(pos, pos)
            el.focus()
        })
    }

    return (
        <div className="relative w-full">
            <div className="flex gap-2 items-start">
                {inputType === 'textarea' ? (
                    <textarea
                        ref={(el) => {
                            inputRef.current = el
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`flex-1 border p-2 rounded resize-none ${
                            className ?? ''
                        }`}
                        placeholder={placeholder ?? 'Введіть текст або формулу'}
                        style={{ fontFamily: 'monospace', lineHeight: 1.5 }}
                        rows={2}
                    />
                ) : (
                    <input
                        ref={(el) => {
                            inputRef.current = el
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`flex-1 border p-2 rounded ${
                            className ?? ''
                        }`}
                        placeholder={placeholder ?? 'Введіть текст або формулу'}
                        style={{ fontFamily: 'monospace', lineHeight: 1.5 }}
                    />
                )}
                <button
                    type="button"
                    onClick={() => setShowFormulaModal(true)}
                    className="text-sm bg-blue-500 text-white px-3 py-2 rounded"
                >
                    ∑ Формула
                </button>
            </div>

            {showFormulaModal && (
                <FormulaModal
                    initialValue=""
                    onSubmit={(f) => {
                        insertFormulaAtCursor(f)
                        setShowFormulaModal(false)
                    }}
                    onCancel={() => setShowFormulaModal(false)}
                />
            )}
        </div>
    )
}

export default React.memo(MathInput)
