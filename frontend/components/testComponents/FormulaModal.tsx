'use client'

import React, { useEffect, useRef } from 'react'

interface FormulaModalProps {
    initialValue?: string
    onSubmit: (formula: string) => void
    onCancel: () => void
    setShowFormulaModal: any
}

const FormulaModal: React.FC<FormulaModalProps> = ({
    initialValue = '',
    onSubmit,
    onCancel,
    setShowFormulaModal,
}) => {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

    const [draft, setDraft] = React.useState(initialValue)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (draft.trim()) onSubmit(draft.trim())
        } else if (e.key === 'Escape') {
            onCancel()
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onCancel}
                aria-label="overlay"
            />
            <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-md z-10">
                <h3 className="text-lg font-semibold mb-2">Вставити формулу</h3>
                <input
                    ref={(el) => {
                        inputRef.current = el
                    }}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Наприклад: x^2 + y^2 = r^2"
                    className="w-full border p-2 rounded mb-4 font-mono"
                />
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 rounded border"
                    >
                        Скасувати
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (draft.trim()) {
                                onSubmit(draft.trim())
                                setShowFormulaModal(false)
                            }
                        }}
                        className="px-4 py-2 rounded bg-blue-600 text-white"
                    >
                        Вставити
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormulaModal
