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
    <div className={`relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ${className}`}>
      <div className="w-full h-full bg-gradient-avatar" />
    </div>
  );
};

