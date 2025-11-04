import React from 'react';

/**
 * AvailableBalance Molecule - Displays available balance
 * @param {Object} props
 * @param {number} props.balance - Available balance amount
 * @param {string} props.className - Additional CSS classes
 */
export const AvailableBalance = ({ balance, className = '' }) => {
  return (
    <div className={`flex items-center py-0.5 gap-2.5 w-full h-5 ${className}`}>
      <span className="text-right font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-60 h-4 min-w-0">
        ${balance} Available
      </span>
    </div>
  );
};
