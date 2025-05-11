'use client'

import { useEffect, useRef } from 'react';

interface MathInputProps {
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

const MathInput = ({ value = '', onChange, className }: MathInputProps) => {
  const mathfieldRef = useRef<any>(null);
  const lastValueRef = useRef(value);

  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('KaTeX') || args[0]?.includes('font')) return;
      originalError(...args);
    };
    return () => {
      console.error = originalError;
    };
  }, [onChange]);

  useEffect(() => {
    if (!mathfieldRef.current) return;

    const mathfield = mathfieldRef.current;
    
    mathfield.value = value;
    lastValueRef.current = value;

    mathfield.smartMode = true;
    mathfield.smartSuperscript = true;

    const handleInput = () => {
      const newValue = mathfield.value;
      if (newValue !== lastValueRef.current) {
        lastValueRef.current = newValue;
        onChange?.(newValue);
      }
    };

    mathfield.addEventListener('input', handleInput);
    return () => {
      mathfield.removeEventListener('input', handleInput);
    };
  }, [onChange]);

  useEffect(() => {
    if (mathfieldRef.current && value !== lastValueRef.current) {
      mathfieldRef.current.value = value;
      lastValueRef.current = value;
    }
  }, [value]);

  return (
    //@ts-ignore
    <math-field
      ref={mathfieldRef}
      className={className}
      style={{ minHeight: '40px' }}
    />
  );
};

export default MathInput;