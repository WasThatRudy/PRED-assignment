import React from 'react';
import { motion } from 'framer-motion';
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
      className={`group flex items-center justify-center flex-shrink-0 h-7 gap-1 px-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 ${className}`}
    >
      {iconType === 'play' && (
        <motion.div className="w-4 h-4" animate={{ opacity: active ? 1 : 0.7 }} transition={{ duration: 0.25 }}>
          <img src={playIcon} alt="play" className="w-4 h-4" />
        </motion.div>
      )}
      {iconType === 'league' && icon && (
        <motion.div
          className="bg-white flex items-center justify-center w-4 h-4 p-[0.12rem] rounded"
          animate={{ opacity: active ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
        >
          {icon}
        </motion.div>
      )}
      <motion.span
        className={`relative font-semibold whitespace-nowrap text-xs sm:text-sm leading-5 group-hover:text-white transition-colors`}
        animate={{ opacity: active ? 0.82 : 0.4, color: '#FFFFFF' }}
        transition={{ duration: 0.25 }}
      >
        {label}
      </motion.span>
    </button>
  );
};

