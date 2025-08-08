// MathInput.tsx
import React, { useRef, useState, useCallback } from 'react'
import FormulaModal from './testComponents/FormulaModal'

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
    inputType?: 'input' | 'textarea'
}

const MathInput: React.FC<MathInputProps> = React.memo(
    ({ value, onChange, className, placeholder, inputType = 'input' }) => {
        const [showFormulaModal, setShowFormulaModal] = useState(false)
        const inputRef = useRef<any>(null)

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

        return (
            <div className="relative w-full">
                <div className="flex gap-2 items-start">
                    {inputType === 'textarea' ? (
                        <textarea
                            ref={inputRef}
                            value={value}
                            onChange={handleChange}
                            className={`flex-1 border p-2 rounded resize-none ${
                                className ?? ''
                            }`}
                            placeholder={
                                placeholder ?? 'Введіть текст або формулу'
                            }
                            style={{ fontFamily: 'monospace', lineHeight: 1.5 }}
                            rows={2}
                        />
                    ) : (
                        <input
                            ref={inputRef}
                            value={value}
                            onChange={handleChange}
                            className={`flex-1 border p-2 rounded ${
                                className ?? ''
                            }`}
                            placeholder={
                                placeholder ?? 'Введіть текст або формулу'
                            }
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
                        onSubmit={insertFormulaAtCursor}
                        onCancel={() => setShowFormulaModal(false)}
                    />
                )}
            </div>
        )
    }
)

export default MathInput
