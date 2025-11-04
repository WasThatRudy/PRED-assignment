import React from 'react';

/**
 * LeagueIcon Atom - League logo icon
 * @param {Object} props
 * @param {string} props.src - League logo image source
 * @param {string} props.alt - Alt text
 * @param {string} props.className - Additional CSS classes
 */
export const LeagueIcon = ({ src, alt = 'league', className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[0.9rem] h-[0.9rem] object-contain ${className}`}
    />
  );
};

