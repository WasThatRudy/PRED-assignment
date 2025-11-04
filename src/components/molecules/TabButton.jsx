import React from 'react';
import { motion } from 'framer-motion';

/**
 * TabButton Molecule - Tab button with icon and label
 * @param {Object} props
 * @param {React.Component} props.icon - Icon component
 * @param {string} props.label - Tab label
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.active - Active state
 * @param {string} props.className - Additional CSS classes
 */
export const TabButton = ({ icon, label, onClick, active = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-0.5 mx-auto flex-1 h-[2.625rem] min-w-0 sm:w-[6.4375rem] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 ${className}`}
    >
      {/* Icon buttons */}
      <div className="flex flex-row justify-center items-center px-[0.1875rem] gap-1 w-6 h-6 rounded-sm flex-shrink-0">
        <motion.img
          src={icon}
          alt="icon"
          className={`w-5 h-5 filter ${active ? 'invert brightness-0' : 'invert-0 brightness-100 saturate-0'}`}
          animate={{ opacity: active ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
        />
      </div>
      {/* Label */}
      <motion.span
        className={`font-semibold text-center text-[0.625rem] sm:text-xs leading-4 h-4 w-full text-white`}
        animate={{ opacity: active ? 1 : 0.4 }}
        transition={{ duration: 0.25 }}
      >
        {label}
      </motion.span>
    </button>
  );
};
