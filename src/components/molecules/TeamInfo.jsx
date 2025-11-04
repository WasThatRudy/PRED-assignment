import React from 'react';
import { TeamLogo } from '../atoms/TeamLogo';

/**
 * TeamInfo Molecule - Displays team logo, name, and volume
 * @param {Object} props
 * @param {string} props.logo - Logo image source
 * @param {string} props.name - Team name
 * @param {string} props.volume - Volume text
 * @param {string} props.className - Additional CSS classes
 */
export const TeamInfo = ({ logo, name, volume, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 min-w-0 h-9 ${className}`}>
      {/* Team Logo */}
      <TeamLogo src={logo} alt={`${name} logo`} />

      {/* Team Info */}
      <div className="flex flex-col min-w-0 h-9">
        <div className="flex items-center min-w-0 h-5">
          <span className="font-semibold text-xs sm:text-sm leading-5 text-white opacity-[0.82] h-5 whitespace-nowrap">
            {name}
          </span>
        </div>
        <span className="text-right text-[0.625rem] sm:text-xs leading-4 font-medium text-white opacity-60 h-4">
          {volume}
        </span>
      </div>
    </div>
  );
};

