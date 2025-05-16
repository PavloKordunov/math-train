'use client'

interface CustomRadioProps {
  checked?: boolean;
  onChange?: () => void;
  isCorrect?: boolean | null;
  readonly?: boolean
}

const CustomRadio = ({ checked, onChange, isCorrect = null, readonly }: CustomRadioProps) => {
  // Determine the colors based on isCorrect status
  const getRadioColors = () => {
    if (isCorrect === true) {
      return {
        outer: 'bg-green-500 shadow-[0_0_4px_4px_rgba(34,197,94,0.3)]',
        inner: 'bg-white'
      };
    }
    if (isCorrect === false) {
      return {
        outer: 'bg-red-500 shadow-[0_0_4px_4px_rgba(239,68,68,0.3)]',
        inner: 'bg-white'
      };
    }
    // Default colors when isCorrect is null (original behavior)
    return {
      outer: checked 
        ? 'bg-blue-500 shadow-[0_0_4px_4px_rgba(59,130,246,0.3)]' 
        : 'border-2 border-blue-300',
      inner: 'bg-white'
    };
  };

  const colors = getRadioColors();

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        readOnly={readonly}
        className="hidden"
      />
      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all
        ${isCorrect !== null 
          ? colors.outer 
          : checked 
            ? 'bg-blue-500 shadow-[0_0_4px_4px_rgba(59,130,246,0.3)]' 
            : 'border-2 border-blue-300'}
      `}>
        {checked && (
          <div className={`w-2.5 h-2.5 rounded-full ${colors.inner}`} />
        )}
      </div>
    </label>
  );
};

export default CustomRadio;