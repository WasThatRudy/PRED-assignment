import React from 'react';

/**
 * InfoDisplay Molecule - Displays information with label and value
 * @param {Object} props
 * @param {string} props.label - Main label
 * @param {string} props.sublabel - Sub label (optional)
 * @param {string|number} props.value - Display value
 * @param {string} props.className - Additional CSS classes
 */
export const InfoDisplay = ({ label, sublabel, value, className = '' }) => {
  const formatToTwoDecimals = (input) => {
    const original = String(input);
    const match = original.match(/-?\d*\.?\d+/);
    if (!match) return input;
    const num = parseFloat(match[0]);
    if (!Number.isFinite(num)) return input;
    const rounded = Math.round((num + Number.EPSILON) * 100) / 100;
    const formatted = String(rounded.toFixed(2))
      .replace(/\.00$/, '')
      .replace(/(\.[1-9])0$/, '$1');
    return original.replace(match[0], formatted);
  };

  const displayValue = formatToTwoDecimals(value);

  return (
    <div className={`flex justify-end items-start gap-2 pt-4 w-full h-12 ${className}`}>
      <div className="flex flex-col min-w-0 flex-1 h-8">
        <span className="font-semibold text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 min-w-0">
          {label}
        </span>
        {sublabel && (
          <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-60 h-4 min-w-0">
            {sublabel}
          </span>
        )}
      </div>
      <span className="font-medium text-right text-xs sm:text-sm leading-5 text-white opacity-40 h-5 min-w-0 flex-shrink-0">
        {displayValue}
      </span>
    </div>
  );
};
