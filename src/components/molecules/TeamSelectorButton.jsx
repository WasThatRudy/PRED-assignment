import React from 'react';
import updown from '../../assets/icons/updown.svg';

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
      className={`group flex flex-row justify-between items-center rounded bg-button-bg hover:bg-gray-700 active:scale-[0.98] transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 px-3 py-2 gap-2 flex-1 h-8 min-w-0 max-w-full ${className}`}
    >
      {/* Frame 805 */}
      <div className="flex flex-row items-center gap-1 h-5 min-w-0 flex-1 overflow-hidden">
        {/* League logo */}
        <div className="flex flex-row items-center justify-center bg-white rounded-sm p-0.5 w-5 h-5 flex-shrink-0">
          <img
            src={logo}
            alt="league"
            className="w-[0.9375rem] h-[0.9375rem] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        {/* Label */}
        <span className="font-semibold text-left text-xs leading-4 text-white-82 group-hover:text-white truncate transition-colors">
          {label}
        </span>
      </div>
      {/* Custom icons - Chevron */}
      <div className="relative w-4 h-4 flex-shrink-0">
        <img src={updown} alt="updown" className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
};
