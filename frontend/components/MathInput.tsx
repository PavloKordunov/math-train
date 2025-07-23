'use client'

import React, { useState, useRef, useEffect } from 'react'

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
}

const MathInput: React.FC<MathInputProps> = ({
    value,
    onChange,
    className,
    placeholder,
}) => {
    const [internalValue, setInternalValue] = useState(value)
    const [showFormulaInput, setShowFormulaInput] = useState(false)
    const [formulaValue, setFormulaValue] = useState('')
    const [cursorPos, setCursorPos] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const formulaInputRef = useRef<HTMLInputElement>(null)
    const [formulaCoords, setFormulaCoords] = useState({ top: 0, left: 0 })

    useEffect(() => {
        setInternalValue(value)
    }, [value])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                formulaInputRef.current &&
                !formulaInputRef.current.contains(e.target as Node)
            ) {
                setShowFormulaInput(false)
            }
        }

        if (showFormulaInput) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showFormulaInput])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value)
        onChange(e.target.value)
    }

    const handleToggleFormula = () => {
        if (!inputRef.current) return

        if (showFormulaInput) {
            setShowFormulaInput(false)
            return
        }

        const inputEl = inputRef.current
        const pos = inputEl.selectionStart ?? 0
        setCursorPos(pos)

        // Отримуємо координати курсора
        const coords = getCaretCoordinates(inputEl, pos)
        setFormulaCoords({ top: coords.top - 8, left: coords.left + 8 })

        setShowFormulaInput(true)
        setFormulaValue('')
    }

    const handleInsertFormula = () => {
        const before = internalValue.slice(0, cursorPos)
        const after = internalValue.slice(cursorPos)
        const newValue = `${before}\`${formulaValue}\`${after}`

        setInternalValue(newValue)
        onChange(newValue)
        setShowFormulaInput(false)
        setFormulaValue('')

        // Повертаємо фокус
        requestAnimationFrame(() => {
            if (inputRef.current) {
                inputRef.current.focus()
                inputRef.current.selectionStart =
                    inputRef.current.selectionEnd =
                        cursorPos + formulaValue.length + 2
            }
        })
    }

    const handleFormulaKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleInsertFormula()
        } else if (e.key === 'Escape') {
            setShowFormulaInput(false)
        }
    }

    return (
        <div className="relative w-full">
            <div className="flex gap-2 items-center">
                <input
                    ref={inputRef}
                    value={internalValue}
                    onChange={handleChange}
                    className={`flex-1 border p-2 rounded resize-none ${
                        className ?? ''
                    }`}
                    placeholder={placeholder ?? 'Введіть текст або формулу'}
                    style={{ fontFamily: 'monospace' }}
                />
                <button
                    type="button"
                    onClick={handleToggleFormula}
                    className="text-sm bg-blue-500 text-white px-3 py-2 rounded h-full"
                >
                    ∑ Формула
                </button>
            </div>

            {showFormulaInput && (
                <input
                    ref={formulaInputRef}
                    value={formulaValue}
                    onChange={(e) => setFormulaValue(e.target.value)}
                    onKeyDown={handleFormulaKeyDown}
                    className="absolute z-50 border border-blue-500 rounded p-1 bg-white shadow text-[20px]"
                    style={{
                        top: formulaCoords.top,
                        left: formulaCoords.left,
                        fontFamily: 'monospace',
                        width: '150px',
                    }}
                    placeholder="формула"
                />
            )}
        </div>
    )
}

function getCaretCoordinates(input: HTMLInputElement, position: number) {
    const div = document.createElement('div')
    const style = getComputedStyle(input)

    for (const prop of style) {
        div.style.setProperty(prop, style.getPropertyValue(prop))
    }

    div.style.position = 'absolute'
    div.style.visibility = 'hidden'
    div.style.whiteSpace = 'pre-wrap'
    div.style.wordWrap = 'break-word'
    div.style.overflow = 'hidden'
    div.style.width = input.offsetWidth + 'px'
    div.style.height = input.offsetHeight + 'px'
    div.style.padding = style.padding
    div.style.border = style.border

    const text = input.value.substring(0, position)
    const span = document.createElement('span')
    span.textContent = '\u200b' // zero-width space

    div.textContent = text
    div.appendChild(span)

    document.body.appendChild(div)
    const { offsetLeft: left, offsetTop: top } = span
    document.body.removeChild(div)

    return { left, top }
}

export default React.memo(MathInput)
