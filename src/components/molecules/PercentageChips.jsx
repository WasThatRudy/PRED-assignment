import React from 'react';

/**
 * PercentageChips Molecule - Percentage selection chips
 * @param {Object} props
 * @param {Array<number>} props.percentages - Array of percentage values
 * @param {Function} props.onSelect - Selection handler (receives decimal value)
 * @param {string} props.className - Additional CSS classes
 */
export const PercentageChips = ({ percentages = [25, 50, 100], onSelect, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {percentages.map((percent) => (
        <button
          key={percent}
          onClick={() => onSelect(percent / 100)}
          className="flex items-center justify-center border border-border-light rounded-sm h-5 px-1 py-0.5 gap-2.5"
        >
          <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-60 h-4">
            {percent}%
          </span>
        </button>
      ))}
    </div>
  );
};

