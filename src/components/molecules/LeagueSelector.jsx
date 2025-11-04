import React from 'react';
import chevronsUpDown from '../../assets/icons/updown.svg';

/**
 * LeagueSelector Molecule - Combines logo, EPL badge, text, and chevron
 * @param {Object} props
 * @param {string} props.logo - Company logo source
 * @param {string} props.eplLogo - EPL logo source
 * @param {string} props.label - League label (default: "EPL 2025")
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
export const LeagueSelector = ({ logo, eplLogo, label = 'EPL 2025', onClick, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 min-w-0 flex-shrink-0 h-8 overflow-hidden ${className}`}>
      {/* Company Logo */}
      <div className="relative w-8 h-8">
        <img src={logo} alt="logo" className="absolute inset-0 w-full h-full object-contain" />
      </div>
      
      {/* Premier League logo - white square with purple lion */}
      <div className="bg-white rounded-[0.125rem] flex items-center justify-center w-5 h-5 p-0.5">
        <img src={eplLogo} alt="epl logo" className="w-[0.9375rem] h-[0.9375rem] object-contain" />
      </div>
      
      {/* League selector */}
      <button onClick={onClick} className="flex items-center gap-1 h-5">
        <span className="text-white opacity-80 font-semibold text-[0.625rem] sm:text-xs leading-4">{label}</span>
        <img src={chevronsUpDown} alt="chevron" className="w-4 h-4 flex-shrink-0" />
      </button>
    </div>
  );
};
