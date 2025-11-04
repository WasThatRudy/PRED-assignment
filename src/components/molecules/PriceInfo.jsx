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
      <div className="flex flex-row justify-end items-start gap-1 p-0 w-[70px] h-4 flex-none order-1 grow-0">
        <span className="text-right text-[0.625rem] sm:text-xs leading-4 font-medium text-white opacity-60 h-4">
          ${currentPrice}
        </span>
        <span className="text-right h-4 flex items-center text-white opacity-[0.82]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M2 8H12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M9 5L12.5 8L9 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-right text-[0.625rem] sm:text-xs leading-4 font-medium text-white opacity-[0.82] h-4">
          ${targetPrice}
        </span>
      </div>
    </div>
  );
};

