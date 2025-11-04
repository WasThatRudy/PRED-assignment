import React from 'react';
import playIcon from '../../assets/icons/play.svg';

/**
 * MarketTabButton Molecule - Tab button with icon and label
 * @param {Object} props
 * @param {string} props.label - Tab label
 * @param {boolean} props.active - Active state
 * @param {Function} props.onClick - Click handler
 * @param {string} props.iconType - Icon type: 'play' or 'league' (default: null)
 * @param {React.ReactNode} props.icon - Custom icon component (for league icon when iconType is 'league')
 * @param {string} props.className - Additional CSS classes
 */
export const MarketTabButton = ({ 
  label, 
  active = false, 
  onClick, 
  iconType = null,
  icon = null,
  className = '' 
}) => {
  const textColor = active ? 'text-white opacity-[0.82]' : 'text-white opacity-40';

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center flex-shrink-0 h-5 gap-1 p-0 ${className}`}
    >
      {iconType === 'play' && (
        <div className="w-4 h-4">
          <img src={playIcon} alt="play" className="w-4 h-4" />
        </div>
      )}
      {iconType === 'league' && icon && (
        <div className="bg-white flex items-center justify-center w-4 h-4 p-[0.12rem] rounded">
          {icon}
        </div>
      )}
      <span className={`font-semibold whitespace-nowrap text-xs sm:text-sm leading-5 ${textColor}`}>
        {label}
      </span>
    </button>
  );
};

