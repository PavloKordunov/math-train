'use client'

import { useEffect, useRef, useState } from 'react';

interface MathInputProps {
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

const MathInput = ({ value = '', onChange, className }: MathInputProps) => {
  const mathfieldRef = useRef<any>(null);
  const lastValueRef = useRef(value);
  const [isTextMode, setIsTextMode] = useState(true);
  const modeLockRef = useRef(false);

  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('KaTeX') || args[0]?.includes('font')) return;
      originalError(...args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  useEffect(() => {
    if (!mathfieldRef.current) return;

    const mathfield = mathfieldRef.current;

    mathfield.value = value;
    lastValueRef.current = value;

    mathfield.smartSuperscript = false;
    mathfield.defaultMode = isTextMode ? 'text' : 'math';
    mathfield.mode = isTextMode ? 'text' : 'math';
        mathfield.inlineShortcuts = {
      "in": "\\in",
      "notin": "\\notin",
      "infty": "\\infty",
      "->": "\\to",
      "=>": "\\Rightarrow",
      "<=": "\\le",
      ">=": "\\ge",
      "!=": "\\ne",
      "**": "\\cdot",
      "xx": "\\times",
      "//": "\\frac",
      "\\\\": "\\setminus"
    };

    const handleInput = () => {
      const newValue = mathfield.value;
      if (newValue !== lastValueRef.current) {
        lastValueRef.current = newValue;
        onChange?.(newValue);
      }
      
      if (modeLockRef.current) {
        mathfield.mode = isTextMode ? 'text' : 'math';
      }
    };

    mathfield.addEventListener('input', handleInput);
    return () => {
      mathfield.removeEventListener('input', handleInput);
    };
  }, [onChange, isTextMode]);

  useEffect(() => {
    if (mathfieldRef.current && value !== lastValueRef.current) {
      mathfieldRef.current.value = value;
      lastValueRef.current = value;
    }
  }, [value]);

  const toggleMode = () => {
    modeLockRef.current = true;
    setIsTextMode(prev => !prev);
    
    if (mathfieldRef.current) {
      mathfieldRef.current.mode = !isTextMode ? 'text' : 'math';
      mathfieldRef.current.focus();
    }
  };

  return (
    <div className="w-full  flex items-center gap-2">
      {/* @ts-ignore */}
      <math-field
        ref={mathfieldRef}
        className={`${className} max-w-full overflow-hidden`}
        style={{ minHeight: '40px' }}
        smart-mode="true"
        default-mode={isTextMode ? 'text' : 'math'}
      />

      <button
        type="button"
        onClick={toggleMode}
        className="px-4 py-2 rounded-md bg-blue-500 text-white text-md hover:bg-blue-600 transition"
      >
        {isTextMode ? 'Текст' : 'Формула'}
      </button>
    </div>
  );
};

export default MathInput;