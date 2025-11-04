import React from 'react';
import { ChevronsUpDown } from 'lucide-react';

/**
 * TeamSelectorButton Molecule - Combines logo, text, and chevron icon
 * @param {Object} props
 * @param {string} props.logo - Logo image source
 * @param {string} props.label - Team/League label
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
export const TeamSelectorButton = ({ logo, label, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-row justify-between rounded items-center bg-button-bg p-[0.25rem_0.5rem] gap-2 flex-1 h-8 min-w-0 sm:w-[11.625rem] ${className}`}
    >
      {/* Frame 805 */}
      <div className="flex flex-row items-center gap-1 mx-auto h-5 min-w-0 flex-shrink-0">
        {/* League logo */}
        <div className="flex flex-row items-center bg-white rounded-sm p-0.5 gap-[0.208125rem] w-5 h-5 flex-shrink-0">
          <img
            src={logo}
            alt="league"
            className="w-[0.9375rem] h-[0.9375rem] object-contain flex-shrink-0"
          />
        </div>
        {/* EPL 2025 */}
        <span className="font-semibold text-center text-[0.625rem] sm:text-xs leading-4 text-white-82 h-4 min-w-0 flex-shrink-0">
          {label}
        </span>
      </div>
      {/* Custom icons - Chevron */}
      <div className="relative w-6 h-6 mx-auto flex-shrink-0">
        <ChevronsUpDown 
          size={18} 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white-82" 
        />
      </div>
    </button>
  );
};
