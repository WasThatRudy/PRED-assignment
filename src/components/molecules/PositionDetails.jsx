import React from 'react';

/**
 * PositionDetails Molecule - Displays position details (Avg price, Mark price, Shares, Current value)
 * @param {Object} props
 * @param {number} props.avgPrice - Average price
 * @param {number} props.markPrice - Mark price
 * @param {number} props.shares - Number of shares
 * @param {number} props.currentValue - Current value
 * @param {string} props.className - Additional CSS classes
 */
export const PositionDetails = ({ avgPrice, markPrice, shares, currentValue, className = '' }) => {
  const formatPrice = (price) => `${price.toFixed(1)}¢`;
  const formatShares = (shares) => shares.toLocaleString();
  const formatCurrency = (value) => `$${value.toLocaleString()}`;

  return (
    <div className={`flex flex-col items-start gap-2 w-full h-[5.5rem] z-[1] ${className}`}>
      {/* Frame 566 - Avg. price */}
      <div className="flex flex-row justify-between items-center gap-1 w-full h-4">
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
          Avg. price
        </span>
        <span className="font-normal text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 flex-shrink-0">
          {formatPrice(avgPrice)}
        </span>
      </div>

      {/* Frame 569 - Mark price */}
      <div className="flex flex-row justify-between items-center gap-1 w-full h-4">
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
          Mark price
        </span>
        <span className="font-normal text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 flex-shrink-0">
          {formatPrice(markPrice)}
        </span>
      </div>

      {/* Frame 571 - Shares */}
      <div className="flex flex-row justify-between items-center gap-1 w-full h-4">
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
          Shares
        </span>
        <span className="font-normal text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 flex-shrink-0">
          {formatShares(shares)}
        </span>
      </div>

      {/* Frame 572 - Current value */}
      <div className="flex flex-row justify-between items-center gap-1 w-full h-4">
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
          Current value
        </span>
        <span className="font-normal text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 flex-shrink-0">
          {formatCurrency(currentValue)}
        </span>
      </div>
    </div>
  );
};

