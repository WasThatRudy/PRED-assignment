import React from 'react';

/**
 * CloseButton Molecule - Close position button
 * @param {Object} props
 * @param {Function} props.onClick - Click handler
 * @param {string} props.label - Button label (default: "Close")
 * @param {string} props.className - Additional CSS classes
 */
export const CloseButton = ({ onClick, label = 'Close', className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center p-[0.5rem_0.75rem] h-8 bg-button-bg backdrop-blur-[30px] flex-1 min-w-0 ${className}`}
    >
      <span className="font-semibold text-[0.625rem] sm:text-xs leading-4 text-white-82 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
    </button>
  );
};
