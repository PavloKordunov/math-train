'use client'

import { useState } from "react";

// const CustomRadio = ({ name, value, selectedValue, onChange }) => {
    const CustomRadio = () => {
    // const checked = selectedValue === value;
    const [checked, setChecked] = useState(false)
  
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
        //   name={name}
        //   value={value}
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="hidden"
        />
        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all
          ${checked
            ? "bg-blue-500 shadow-[0_0_4px_4px_rgba(59,130,246,0.3)]"
            : "border-2 border-blue-300"}
        `}>
          {checked && (
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
          )}
        </div>
      </label>
    );
  };

  export default CustomRadio
  