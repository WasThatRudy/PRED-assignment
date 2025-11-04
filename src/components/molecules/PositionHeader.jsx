import React from 'react';
import ChevronUp from '../../assets/icons/up.svg';

/**
 * PositionHeader Molecule - Displays team name, market, type, and P&L
 * @param {Object} props
 * @param {string} props.team - Team name
 * @param {string} props.market - Market type
 * @param {string} props.type - Position type (long/short)
 * @param {number} props.profit - Profit amount
 * @param {number} props.profitPercent - Profit percentage
 * @param {string} props.className - Additional CSS classes
 */
export const PositionHeader = ({ team, market, type, profit, profitPercent, className = '' }) => {
  return (
    <div className={`flex flex-row justify-between items-center gap-[1.875rem] w-full h-8 z-0 ${className}`}>
      {/* Frame 37 - Left Side */}
      <div className="flex flex-col justify-center items-start min-w-0 flex-1 h-8 flex-shrink-0">
        {/* Arsenal */}
        <span className="font-semibold text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4 flex-shrink-0">
          {team}
        </span>
        
        {/* Frame 712 - Market and Type */}
        <div className="flex flex-row items-start min-w-0 h-4 gap-1 flex-shrink-0">
          <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
            {market}
          </span>
          <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0" aria-hidden="true">·</span>
          <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 flex-shrink-0">
            {type}
          </span>
        </div>
      </div>

      {/* Frame 40 - Right Side P&L */}
      <div className="flex flex-col justify-center items-end min-w-0 flex-shrink-0 h-8">
        {/* $200 */}
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-brand-green h-4 text-right flex-shrink-0">
          ${profit}
        </span>
        
        {/* Frame 629 - Profit % */}
        <div className="flex flex-row justify-end items-center min-w-0 h-4 gap-1 flex-shrink-0">
          {/* Custom icons - Chevron */}
          <div className="relative w-3 h-3 flex-shrink-0">
            <img src={ChevronUp} alt="chevron" className="w-3 h-3" />
          </div>
          {/* 12.5% */}
          <span className="font-normal text-[0.625rem] sm:text-xs leading-4 text-brand-green h-4 text-right flex-shrink-0">
            {profitPercent}%
          </span>
        </div>
      </div>
    </div>
  );
};
