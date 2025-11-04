import React from 'react';
import { Input } from '../atoms';
import { Plus, Minus } from 'lucide-react';

/**
 * NumberInput Molecule - Input with increment/decrement buttons
 * @param {Object} props
 * @param {string|number} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onIncrement - Increment handler
 * @param {Function} props.onDecrement - Decrement handler
 * @param {Function} props.onBlur - Blur handler
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.className - Additional CSS classes
 */
export const NumberInput = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  onBlur,
  placeholder,
  className = '',
}) => {
  return (
    <div className={`flex items-center border border-border-light rounded-sm w-full h-8 px-2 py-0 gap-1 overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={onDecrement}
        className="flex items-center justify-center w-5 h-5 bg-gray-700 rounded flex-shrink-0"
      >
        <Minus size={9} className="text-white opacity-60" />
      </button>
      
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className="flex-1"
      />
      
      <button
        type="button"
        onClick={onIncrement}
        className="flex items-center justify-center w-5 h-5 bg-gray-700 rounded flex-shrink-0"
      >
        <Plus size={9} className="text-white opacity-60" />
      </button>
    </div>
  );
};
