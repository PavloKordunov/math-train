// components/math/MathInput.tsx

import React from 'react';

interface MathInputProps {
    value: string;
    onChange: (val: string) => void;
    className?: string;
    placeholder?: string;
}

const MathInput: React.FC<MathInputProps> = ({ value, onChange, className, placeholder }) => {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full border p-2 rounded whitespace-pre-wrap ${className ?? ''}`}
            type='text'
            placeholder={placeholder ?? "Текст з формулами: Розв'яжіть рівняння `e^x = 1`"}
            style={{ fontFamily: 'monospace' }}
        />
    );
};

export default MathInput;