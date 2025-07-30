'use client'

import React, {
    useState,
    useRef,
    useEffect,
    useLayoutEffect,
    useImperativeHandle,
    forwardRef,
} from 'react'
import { MathJax, MathJaxContext } from 'better-react-mathjax'

// Компонент для рендеру формули
const LatexTransform = ({
    content,
    className = '',
}: {
    content: string
    className?: string
}) => {
    if (!content?.trim()) return null

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
                <MathJax dynamic key={content}>
                    <span>{content}</span>
                </MathJax>
            </div>
        </MathJaxContext>
    )
}

interface FormulaItem {
    id: string
    textFormula: string
    coords: { top: number; left: number }
    width: number
    placeholder: string
    startPos: number
    inputId: string
}

export interface MathInputHandle {
    getTextWithFormulas: () => string
}

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
    inputType?: string
    inputId: string
}

const MathInput = forwardRef<MathInputHandle, MathInputProps>(
    ({ value, onChange, className, placeholder, inputType, inputId }, ref) => {
        const [internalValue, setInternalValue] = useState(value)
        const [formulas, setFormulas] = useState<FormulaItem[]>([])
        const [showFormulaInput, setShowFormulaInput] = useState(false)
        const [formulaValue, setFormulaValue] = useState('')
        const [cursorPos, setCursorPos] = useState(0)
        const [formulaCoords, setFormulaCoords] = useState({ top: 0, left: 0 })
        const [formulaToMeasure, setFormulaToMeasure] = useState<string | null>(
            null
        )

        const inputRef = useRef<any>(null)
        const formulaInputRef = useRef<HTMLInputElement>(null)
        const widthMeasurerRef = useRef<HTMLSpanElement>(null)
        const formulaRenderMeasurerRef = useRef<HTMLDivElement>(null)

        useEffect(() => {
            setInternalValue(value)
        }, [value])

        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (
                    showFormulaInput &&
                    formulaInputRef.current &&
                    !formulaInputRef.current.contains(e.target as Node) &&
                    !(
                        e.target instanceof Element &&
                        e.target.closest('.math-input-main-controls')
                    )
                ) {
                    setShowFormulaInput(false)
                    setFormulaValue('')
                }
            }

            document.addEventListener('mousedown', handleClickOutside)
            return () =>
                document.removeEventListener('mousedown', handleClickOutside)
        }, [showFormulaInput])

        useLayoutEffect(() => {
            if (
                showFormulaInput &&
                formulaInputRef.current &&
                widthMeasurerRef.current
            ) {
                const inputStyle = window.getComputedStyle(
                    formulaInputRef.current
                )
                const measurer = widthMeasurerRef.current
                measurer.style.font = inputStyle.font
                measurer.textContent =
                    formulaValue || formulaInputRef.current.placeholder
                const measuredWidth = measurer.offsetWidth + 4
                formulaInputRef.current.style.width = `${Math.max(
                    50,
                    measuredWidth
                )}px`
            }
        }, [formulaValue, showFormulaInput])

        useLayoutEffect(() => {
            if (formulaToMeasure && formulaRenderMeasurerRef.current) {
                const renderedWidth =
                    formulaRenderMeasurerRef.current.offsetWidth
                if (
                    renderedWidth > 0 &&
                    inputRef.current &&
                    widthMeasurerRef.current
                ) {
                    const inputStyle = window.getComputedStyle(inputRef.current)
                    const spaceMeasurer = widthMeasurerRef.current
                    spaceMeasurer.style.font = inputStyle.font
                    spaceMeasurer.textContent = '\u00A0'
                    const charWidth = spaceMeasurer.offsetWidth || 8
                    const placeholder = '\u00A0'.repeat(
                        Math.ceil(renderedWidth / charWidth)
                    )

                    const newFormula: FormulaItem = {
                        id: Date.now().toString(),
                        textFormula: formulaToMeasure,
                        coords: { ...formulaCoords },
                        width: renderedWidth,
                        placeholder,
                        startPos: cursorPos,
                        inputId,
                    }

                    const before = internalValue.slice(0, cursorPos)
                    const after = internalValue.slice(cursorPos)
                    const newValue = `${before}${placeholder}${after}`

                    setFormulas((prev) => [...prev, newFormula])
                    setInternalValue(newValue)
                    onChange(newValue)
                    setFormulaToMeasure(null)
                }
            }
        }, [
            formulaToMeasure,
            internalValue,
            cursorPos,
            formulaCoords,
            onChange,
        ])

        const handleChange = (e: React.ChangeEvent<any>) => {
            setInternalValue(e.target.value)
            onChange(e.target.value)
        }

        const handleToggleFormulaInput = () => {
            if (!inputRef.current) return
            setShowFormulaInput(true)
            setFormulaValue('')
            const pos = inputRef.current.selectionStart ?? 0
            setCursorPos(pos)
            const coords = getCaretCoordinates(inputRef.current, pos)
            setFormulaCoords({ top: coords.top, left: coords.left })
            requestAnimationFrame(() => formulaInputRef.current?.focus())
        }

        const handleInsertFormula = () => {
            if (!formulaValue.trim()) {
                setShowFormulaInput(false)
                return
            }
            setFormulaToMeasure(formulaValue)
            setShowFormulaInput(false)
            setFormulaValue('')
        }

        const handleEditFormula = (id: string) => {
            const formulaToEdit = formulas.find((f) => f.id === id)
            if (!formulaToEdit) return

            const { startPos, placeholder } = formulaToEdit
            const before = internalValue.slice(0, startPos)
            const after = internalValue.slice(startPos + placeholder.length)
            const newValue = before + after

            setInternalValue(newValue)
            onChange(newValue)
            setFormulas((prev) => prev.filter((f) => f.id !== id))

            setShowFormulaInput(true)
            setFormulaValue(formulaToEdit.textFormula)
            setFormulaCoords(formulaToEdit.coords)
            setCursorPos(formulaToEdit.startPos)

            requestAnimationFrame(() => {
                inputRef.current?.focus()
                inputRef.current?.setSelectionRange(
                    formulaToEdit.startPos,
                    formulaToEdit.startPos
                )
                formulaInputRef.current?.focus()
            })
        }

        const handleFormulaKeyDown = (
            e: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                handleInsertFormula()
            } else if (e.key === 'Escape') {
                setShowFormulaInput(false)
                setFormulaValue('')
            }
        }

        function getCaretCoordinates(
            input: HTMLInputElement | HTMLTextAreaElement,
            position: number
        ) {
            const div = document.createElement('div')
            const style = getComputedStyle(input)
            for (const prop of style as any) {
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
            span.textContent = '\u200b'
            div.textContent = text
            div.appendChild(span)
            document.body.appendChild(div)
            const { offsetLeft: left, offsetTop: top } = span
            document.body.removeChild(div)
            return { left, top }
        }

        // ✅ метод для зовнішнього компонента — отримати текст з формулами
        useImperativeHandle(ref, () => ({
            getTextWithFormulas: () => {
                if (formulas.length === 0) return internalValue
                const sorted = [...formulas]
                    .filter((f) => f.inputId === inputId)
                    .sort((a, b) => a.startPos - b.startPos)

                let result = ''
                let currentIndex = 0
                for (const formula of sorted) {
                    result += internalValue.slice(
                        currentIndex,
                        formula.startPos
                    )
                    result += `\`${formula.textFormula}\``
                    currentIndex = formula.startPos + formula.placeholder.length
                }
                result += internalValue.slice(currentIndex)
                return result
            },
        }))

        const insertFormula = (latex: string) => {
            const textarea = inputRef.current
            if (!textarea) return

            const start = textarea.selectionStart
            const end = textarea.selectionEnd

            const placeholder = '⧠'
            const newText =
                internalValue.substring(0, start) +
                placeholder +
                internalValue.substring(end)

            const formula: FormulaItem = {
                id: crypto.randomUUID(),
                textFormula: latex,
                coords: { top: 0, left: 0 },
                width: 0,
                placeholder,
                startPos: start,
                inputId,
            }

            setFormulas((prev) => [...prev, formula])
            setInternalValue(newText)
            onChange(newText)
        }

        return (
            <div className="relative w-full">
                <div className="relative">
                    <div className="flex gap-2 items-center math-input-main-controls">
                        {inputType === 'textarea' ? (
                            <textarea
                                ref={inputRef}
                                value={internalValue}
                                onChange={handleChange}
                                className={`flex-1 border p-2 rounded resize-none ${
                                    className ?? ''
                                }`}
                                placeholder={
                                    placeholder ?? 'Введіть текст або формулу'
                                }
                                style={{
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5',
                                }}
                                rows={2}
                            />
                        ) : (
                            <input
                                ref={inputRef}
                                value={internalValue}
                                onChange={handleChange}
                                className={`flex-1 border p-2 rounded ${
                                    className ?? ''
                                }`}
                                placeholder={
                                    placeholder ?? 'Введіть текст або формулу'
                                }
                                style={{
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5',
                                }}
                            />
                        )}
                        <button
                            type="button"
                            onClick={handleToggleFormulaInput}
                            className="text-sm bg-blue-500 text-white px-3 py-2 rounded h-full"
                        >
                            ∑ Формула
                        </button>
                    </div>

                    {/* Формули поверх тексту */}
                    <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none p-2"
                        style={{ fontFamily: 'monospace', lineHeight: '1.5' }}
                    >
                        {formulas.map((formula) => (
                            <div
                                key={formula.id}
                                onClick={() => handleEditFormula(formula.id)}
                                className="absolute z-10 bg-blue-100 border border-blue-300 rounded-md cursor-pointer pointer-events-auto flex items-center justify-center"
                                style={{
                                    top: `${formula.coords.top}px`,
                                    left: `${formula.coords.left}px`,
                                    width: `${formula.width}px`,
                                    height: '28px',
                                }}
                            >
                                <LatexTransform
                                    content={`\`${formula.textFormula}\``}
                                    className="text-base scale-90"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Вимірювачі */}
                <span
                    ref={widthMeasurerRef}
                    className="absolute invisible whitespace-pre"
                />
                {formulaToMeasure && (
                    <div
                        ref={formulaRenderMeasurerRef}
                        className="absolute invisible z-[-1] top-[-1000px] left-[-1000px] p-1"
                    >
                        <LatexTransform
                            content={`\`${formulaToMeasure}\``}
                            className="text-base scale-90"
                        />
                    </div>
                )}

                {/* Інпут формули */}
                {showFormulaInput && (
                    <div
                        className="absolute z-50"
                        style={{
                            top: inputRef.current
                                ? inputRef.current.offsetTop + formulaCoords.top
                                : 0,
                            left: inputRef.current
                                ? inputRef.current.offsetLeft +
                                  formulaCoords.left
                                : 0,
                        }}
                    >
                        <input
                            ref={formulaInputRef}
                            value={formulaValue}
                            onChange={(e) => setFormulaValue(e.target.value)}
                            onKeyDown={handleFormulaKeyDown}
                            className="border border-blue-500 rounded p-1 bg-white shadow-lg text-[16px]"
                            style={{ fontFamily: 'monospace' }}
                            placeholder="x^2+y^2=r^2"
                        />
                    </div>
                )}
            </div>
        )
    }
)

export default React.memo(MathInput)
