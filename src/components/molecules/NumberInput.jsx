  import React, { useCallback } from 'react';
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
  const formatToTwoDecimals = useCallback((input) => {
    const original = String(input ?? '');
    const match = original.match(/-?\d*\.?\d+/);
    if (!match) return '';
    const num = parseFloat(match[0]);
    if (!Number.isFinite(num)) return '';
    const rounded = Math.round((num + Number.EPSILON) * 100) / 100;
    const formattedCore = String(rounded.toFixed(2))
      .replace(/\.00$/, '')
      .replace(/(\.[1-9])0$/, '$1');
    return formattedCore;
  }, []);

  const handleInputChange = useCallback((e) => {
    const raw = e.target.value || '';
    // Keep only digits and dots, reduce multiple dots to a single dot position
    const stripped = raw.replace(/[^0-9.]/g, '');
    const parts = stripped.split('.');
    const intPartOnly = parts.shift() || '';
    const decCombined = parts.join(''); // merge extra dots into decimals
    const hasDot = stripped.includes('.');
    const trimmedDec = decCombined.slice(0, 2);
    const limited = hasDot
      ? (trimmedDec.length > 0 ? `${intPartOnly}.${trimmedDec}` : `${intPartOnly}.`)
      : intPartOnly;
    // pass numeric-only value up (no $), preserve trailing '.' while typing
    onChange?.({ target: { value: limited } });
  }, [onChange]);

  const displayValue = (() => {
    if (value === undefined || value === null || value === '') return '';
    const original = String(value);
    const stripped = original.replace(/[^0-9.]/g, '');
    const parts = stripped.split('.');
    const intPartOnly = parts.shift() || '';
    const decCombined = parts.join('');
    const hasDot = stripped.includes('.');
    const trimmedDec = decCombined.slice(0, 2);
    const limited = hasDot
      ? (trimmedDec.length > 0 ? `${intPartOnly}.${trimmedDec}` : `${intPartOnly}.`)
      : intPartOnly;
    if (!limited) return '';
    return `$${limited}`;
  })();

  return (
    <div className={`flex items-center border border-border-light rounded-sm w-full h-8 px-2 py-0 gap-1 overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={onDecrement}
        className="group flex items-center justify-center w-5 h-5 bg-gray-700 hover:bg-white-6 active:scale-[0.98] rounded flex-shrink-0 transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
      >
        <Minus size={9} className="text-white opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>


      <Input
        type="text"
        inputMode="decimal"
        value={displayValue}
        onChange={handleInputChange}
        onFocus={(e) => e.target.select()}
        placeholder={placeholder}
        onBlur={onBlur}
        className="flex-1 min-w-0 text-left"
      />
      
      <button
        type="button"
        onClick={onIncrement}
        className="group flex items-center justify-center w-5 h-5 bg-gray-700 hover:bg-white-6 active:scale-[0.98] rounded flex-shrink-0 transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
      >
        <Plus size={9} className="text-white opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};
