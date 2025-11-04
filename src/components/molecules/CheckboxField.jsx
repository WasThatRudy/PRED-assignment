import React from 'react';

/**
 * CheckboxField Molecule - Checkbox with label
 * @param {Object} props
 * @param {string} props.label - Label text
 * @param {boolean} props.checked - Checked state
 * @param {Function} props.onChange - Change handler
 * @param {string} props.className - Additional CSS classes
 */
export const CheckboxField = ({ label, checked = false, onChange, className = '' }) => {
  return (
    <div className={`flex items-center border-t border-b border-border-light px-4 w-full h-10 py-2 px-4 gap-1 ${className}`}>
      <span className="font-medium text-left text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 min-w-0">
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e)}
        className="checkbox-transparent w-4 h-4 ml-auto"
      />
    </div>
  );
};
