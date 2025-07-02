'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface MathInputProps {
    value: string
    onChange: (val: string) => void
    className?: string
    placeholder?: string
    debounceTime?: number
}

const MathInput: React.FC<MathInputProps> = ({
    value,
    onChange,
    className,
    placeholder,
}) => {
    const [internalValue, setInternalValue] = useState(value)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!isTyping) {
            setInternalValue(value)
        }
    }, [value, isTyping])

    // useEffect(() => {
    //     if (internalValue === value) return;

    //     const timer = setTimeout(() => {
    //         onChange(internalValue);
    //         setIsTyping(false);
    //     }, debounceTime);

    //     return () => clearTimeout(timer);
    // }, [internalValue, onChange, value]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setIsTyping(true)
            setInternalValue(e.target.value)
        },
        []
    )

    const handleBlur = useCallback(() => {
        if (internalValue !== value) {
            onChange(internalValue)
        }
        setIsTyping(false)
    }, [internalValue, onChange, value])

    return (
        <input
            value={internalValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border p-2 rounded whitespace-pre-wrap ${
                className ?? ''
            }`}
            type="text"
            placeholder={
                placeholder ??
                "Текст з формулами: Розв'яжіть рівняння `e^x = 1`"
            }
            style={{ fontFamily: 'monospace' }}
        />
    )
}

export default React.memo(MathInput)
