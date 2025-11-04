import React from 'react';

/**
 * Input Atom - Reusable input component
 * @param {Object} props
 * @param {string} props.type - Input type (default: 'text')
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.placeholder - Placeholder text
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onBlur - Blur handler
 * @param {string} props.className - Additional CSS classes
 */
export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  onBlur,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      onBlur={onBlur}
      className={`flex-1 text-center font-medium bg-transparent outline-none text-[0.625rem] sm:text-xs leading-4 h-4 ${
        parseFloat(value) > 0 ? 'text-white opacity-[0.82]' : 'text-white opacity-40'
      } ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    />
  );
};

