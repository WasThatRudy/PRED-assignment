import React from 'react';

/**
 * ProfileAvatar Molecule - User profile avatar
 * @param {Object} props
 * @param {string} props.src - Avatar image source (optional)
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
export const ProfileAvatar = ({ src, onClick, className = '' }) => {
  return (
    <div className="border border-border-light rounded-sm h-[1.75rem] w-[1.75rem] flex items-center justify-center">
      <div className={`relative w-[1.5rem] h-[1.5rem] rounded-full border-[1px] border-white overflow-hidden flex-shrink-0 ${className}`}>
        <div className="w-full h-full bg-gradient-avatar" />
      </div>
    </div>
  );
};

