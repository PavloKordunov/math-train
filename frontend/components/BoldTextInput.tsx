import { useRef } from 'react'
import { any } from 'zod'
import ImageUpload from './testComponents/create-test-task/ImageUpload'

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

const BoldTextInput = ({
    value,
    onChange,
    placeholder,
    inputType,
    setQuestion,
    setEditedImages,
    typeAnswer,
    index,
}: {
    value: string
    onChange: (v: string) => void
    placeholder?: string
    inputType?: string
    setQuestion?: any
    setEditedImages?: any
    typeAnswer?: any
    index?: any
}) => {
    const textareaRef = useRef<any>(null)

    const handleBoldClick = () => {
        if (!textareaRef.current) return
        toggleBoldInTextarea(textareaRef.current, value, onChange)
    }

    return (
        <div className="flex relative w-full">
            <div className="flex-1 relative">
                {inputType === 'textarea' ? (
                    <textarea
                        ref={(el) => {
                            textareaRef.current = el
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className="flex-1 border p-2 pr-12 rounded resize-none w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                        style={{ fontFamily: 'monospace', lineHeight: '1.5' }}
                        rows={3}
                    />
                ) : (
                    <input
                        ref={(el) => {
                            textareaRef.current = el
                        }}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`flex-1 border p-2 pr-12 rounded resize-none w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2`}
                        placeholder={placeholder}
                        style={{
                            fontFamily: 'monospace',
                            lineHeight: '1.5',
                        }}
                    />
                )}
            </div>
            <div className="absolute top-6 right-4">
                {inputType === 'textarea' && (
                    <ImageUpload
                        setQuestion={setQuestion}
                        id={'title'}
                        setEditedImages={setEditedImages}
                        className="bottom-0 right-10"
                    />
                )}

                {typeAnswer !== 'ansWrite' && inputType !== 'textarea' && (
                    <ImageUpload
                        setQuestion={setQuestion}
                        typeAnswer={typeAnswer}
                        id={index}
                        setEditedImages={setEditedImages}
                        className="bottom-0 right-10"
                    />
                )}
            </div>
            <div className="absolute top-2 right-4">
                <button
                    type="button"
                    onClick={handleBoldClick}
                    className="px-2.5 py-1 border rounded font-bold select-none"
                    aria-label="Жирний"
                >
                    B
                </button>
            </div>
        </div>
    )
}
export default BoldTextInput
