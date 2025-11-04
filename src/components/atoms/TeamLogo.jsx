import React from 'react';

/**
 * TeamLogo Atom - Team logo image
 * @param {Object} props
 * @param {string} props.src - Logo image source
 * @param {string} props.alt - Alt text
 * @param {string} props.className - Additional CSS classes
 */
export const TeamLogo = ({ src, alt = 'team logo', className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-10 h-10 object-contain flex-shrink-0 ${className}`}
    />
  );
};

