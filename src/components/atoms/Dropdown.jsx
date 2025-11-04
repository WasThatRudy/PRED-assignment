import React, { useState, useRef, useEffect } from 'react';
import chevronsUpDown from '../../assets/icons/updown.svg';

/**
 * Dropdown Atom - Reusable dropdown component
 * @param {Object} props
 * @param {string} props.value - Current selected value
 * @param {Array<{value: string, label: string}>} props.options - Array of options
 * @param {Function} props.onChange - Callback when option is selected
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.placeholder - Placeholder text
 */
export const Dropdown = ({ value, options, onChange, className = '', placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder || value;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border border-border-light rounded-sm w-full h-8 px-2 py-0 gap-2"
      >
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 whitespace-nowrap">
          {displayValue}
        </span>
        <div className="flex items-center justify-center w-6 h-6 px-[0.1875rem] rounded-sm">
          <img src={chevronsUpDown} alt="chevron" className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 border border-border-light rounded-sm bg-navbar backdrop-blur-[30px] z-50 overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full px-2 py-2 text-left font-medium text-[0.625rem] sm:text-xs leading-4 h-8 ${
                value === option.value
                  ? 'text-white opacity-[0.82] bg-white/10'
                  : 'text-white opacity-60 hover:bg-white/5'
              }`}
            >
              <span className="whitespace-nowrap">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

