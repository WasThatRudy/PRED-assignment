import React from 'react';

/**
 * ToggleButtonGroup Molecule - Group of toggle buttons (e.g., Long/Short)
 * @param {Object} props
 * @param {string} props.value - Current selected value
 * @param {Array<{value: string, label: string}>} props.options - Array of options
 * @param {Function} props.onChange - Change handler
 * @param {string} props.className - Additional CSS classes
 */
export const ToggleButtonGroup = ({ value, options, onChange, className = '' }) => {
  return (
    <div className={`flex items-center p-[0.0625rem] border border-border-light w-full h-[1.625rem] bg-white/20 rounded-sm ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`flex items-center justify-center w-1/2 h-6 px-3 py-1 rounded-sm backdrop-blur-[30px] ${
            value === option.value ? 'bg-brand-green' : 'bg-transparent'
          }`}
        >
          <span
            className={`font-semibold text-center text-[0.625rem] sm:text-xs leading-4 h-4 ${
              value === option.value ? 'text-[#111111]' : 'text-white opacity-[0.82]'
            }`}
          >
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
};

