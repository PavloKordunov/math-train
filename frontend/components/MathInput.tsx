// MathInput.tsx
import React, { useRef, useState, useCallback } from 'react'
import FormulaModal from './testComponents/FormulaModal'
import { useUser } from '@/hooks/useUser'

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
    inputType?: 'input' | 'textarea'
}

function toggleBoldInTextarea(
    textarea: HTMLTextAreaElement,
    value: string,
    onChange: (newVal: string) => void
) {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    if (start === end) return

    const before = value.slice(0, start)
    const selected = value.slice(start, end)
    const after = value.slice(end)

    const isBolded =
        selected.startsWith('**') &&
        selected.endsWith('**') &&
        selected.length >= 4

    let newSelected: string
    if (isBolded) {
        newSelected = selected.slice(2, -2)
    } else {
        newSelected = `**${selected}**`
    }

    const newVal = before + newSelected + after
    onChange(newVal)

    const delta = isBolded ? -2 : 2
    const newStart = start + (isBolded ? 0 : 2)
    const newEnd = end + (isBolded ? 0 : 4)
    requestAnimationFrame(() => {
        textarea.focus()
        textarea.setSelectionRange(
            isBolded ? start : newStart,
            isBolded ? end - 4 : newEnd
        )
    })
}

const MathInput: React.FC<MathInputProps> = React.memo(
    ({ value, onChange, className, placeholder, inputType = 'input' }) => {
        const [showFormulaModal, setShowFormulaModal] = useState(false)
        const inputRef = useRef<any>(null)
        const { user } = useUser()

        const insertFormulaAtCursor = useCallback(
            (formula: string) => {
                const el = inputRef.current
                if (!el) return

                const start = el.selectionStart ?? value.length
                const end = el.selectionEnd ?? value.length
                const before = value.slice(0, start)
                const after = value.slice(end)
                const wrapped = `\`${formula}\``
                const newVal = before + wrapped + after

                onChange(newVal)

                requestAnimationFrame(() => {
                    if (inputRef.current) {
                        const pos = start + wrapped.length
                        inputRef.current.setSelectionRange(pos, pos)
                        inputRef.current.focus()
                    }
                })
            },
            [value, onChange]
        )

        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                onChange(e.target.value)
            },
            [onChange]
        )

        const handleBoldClick = () => {
            if (!inputRef.current) return
            toggleBoldInTextarea(inputRef.current, value, onChange)
        }

        return (
            <div className="relative w-full">
                <div className="flex gap-2 items-start">
                    {inputType === 'textarea' ? (
                        <>
                            {user?.status === 'Admin' ? (
                                <div className="flex-1 relative">
                                    <textarea
                                        ref={inputRef}
                                        value={value}
                                        onChange={handleChange}
                                        className={`flex-1 border p-2 rounded resize-none ${
                                            className ?? ''
                                        }`}
                                        placeholder={
                                            placeholder ??
                                            'Введіть текст або формулу'
                                        }
                                        style={{
                                            fontFamily: 'monospace',
                                            lineHeight: 1.5,
                                        }}
                                        rows={2}
                                    />
                                    <div className="absolute top-2 right-4">
                                        <button
                                            type="button"
                                            onClick={handleBoldClick}
                                            className="px-2 py-1 border rounded font-bold select-none"
                                            aria-label="Жирний"
                                        >
                                            B
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <textarea
                                    ref={inputRef}
                                    value={value}
                                    onChange={handleChange}
                                    className={`flex-1 border p-2 rounded resize-none ${
                                        className ?? ''
                                    }`}
                                    placeholder={
                                        placeholder ??
                                        'Введіть текст або формулу'
                                    }
                                    style={{
                                        fontFamily: 'monospace',
                                        lineHeight: 1.5,
                                    }}
                                    rows={2}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {user?.status === 'Admin' ? (
                                <div className="flex-1 relative">
                                    <input
                                        ref={inputRef}
                                        value={value}
                                        onChange={handleChange}
                                        className={`flex-1 border p-2 rounded ${
                                            className ?? ''
                                        }`}
                                        placeholder={
                                            placeholder ??
                                            'Введіть текст або формулу'
                                        }
                                        style={{
                                            fontFamily: 'monospace',
                                            lineHeight: 1.5,
                                        }}
                                    />
                                    <div className="absolute top-1 right-2">
                                        <button
                                            type="button"
                                            onClick={handleBoldClick}
                                            className="px-2 py-1 border rounded font-bold select-none"
                                            aria-label="Жирний"
                                        >
                                            B
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <input
                                    ref={inputRef}
                                    value={value}
                                    onChange={handleChange}
                                    className={`flex-1 border p-2 rounded ${
                                        className ?? ''
                                    }`}
                                    placeholder={
                                        placeholder ??
                                        'Введіть текст або формулу'
                                    }
                                    style={{
                                        fontFamily: 'monospace',
                                        lineHeight: 1.5,
                                    }}
                                />
                            )}
                        </>
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
                        onSubmit={insertFormulaAtCursor}
                        setShowFormulaModal={setShowFormulaModal}
                        onCancel={() => setShowFormulaModal(false)}
                    />
                )}
            </div>
        )
    }
)

export default MathInput
