'use client'

interface CustomRadioProps {
  checked: boolean;
  onChange: () => void;
}

const CustomRadio = ({ checked, onChange }: CustomRadioProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all
        ${checked
          ? "bg-blue-500 shadow-[0_0_4px_4px_rgba(59,130,246,0.3)]"
          : "border-2 border-blue-300"}
      `}>
        {checked && (
          <div className="w-2.5 h-2.5 bg-white rounded-full" />
        )}
      </div>
    </label>
  );
};

export default CustomRadio;