import React from 'react';

/**
 * IconButton Molecule - Combines icon with text label
 * @param {Object} props
 * @param {React.Component} props.icon - Icon component
 * @param {string} props.label - Button label
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.active - Active state
 */
export const IconButton = ({ icon, label, onClick, className = '', active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-row items-center bg-button-bg hover:bg-gray-700 active:scale-[0.98] transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded px-3 py-2 gap-2 flex-1 h-8 min-w-0 max-w-full ${className}`}
    >
      {/* Custom icons */}
      <div className="relative w-5 h-5 flex-shrink-0">
        <img src={icon} alt="icon" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* View market info */}
      <span className="font-semibold text-left text-xs leading-4 text-white-82 group-hover:text-white truncate transition-colors">
        {label}
      </span>
    </button>
  );
};
