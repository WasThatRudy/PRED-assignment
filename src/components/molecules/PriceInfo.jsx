import React from 'react';

/**
 * PriceInfo Molecule - Displays chance and payout information
 * @param {Object} props
 * @param {string} props.chance - Chance percentage
 * @param {string} props.currentPrice - Current price
 * @param {string} props.targetPrice - Target price
 * @param {string} props.className - Additional CSS classes
 */
export const PriceInfo = ({ chance, currentPrice, targetPrice, className = '' }) => {
  return (
    <div className={`flex flex-col items-end flex-shrink-0 h-9 ${className}`}>
      <div className="flex items-start gap-1 h-5">
        <span className="font-semibold text-right text-xs sm:text-sm leading-5 text-white opacity-[0.82] h-5">
          {chance} chance
        </span>
      </div>
      <div className="flex items-start gap-1 h-4">
        <span className="text-right text-[0.625rem] sm:text-xs leading-4 font-medium text-white opacity-60 h-4">
          ${currentPrice}→
        </span>
        <span className="text-right text-[0.625rem] sm:text-xs leading-4 font-medium text-white opacity-[0.82] h-4">
          ${targetPrice}
        </span>
      </div>
    </div>
  );
};

