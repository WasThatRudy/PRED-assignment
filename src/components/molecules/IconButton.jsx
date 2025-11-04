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
export const IconButton = ({ icon: Icon, label, onClick, className = '', active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center bg-button-bg rounded px-3 py-2 gap-2 flex-1 h-8 min-w-0 max-w-full ${className}`}
    >
      {/* Custom icons */}
      <div className="relative w-5 h-5 flex-shrink-0">
        <Icon 
          size={20} 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white-82 rounded-[2.125rem]"
        />
      </div>
      {/* View market info */}
      <span className="font-semibold text-left text-xs leading-4 text-white-82 truncate">
        {label}
      </span>
    </button>
  );
};
