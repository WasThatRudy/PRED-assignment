import React from 'react';

/**
 * Button Atom - Reusable button component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button variant: 'primary', 'secondary', 'ghost'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 */
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'flex items-center justify-center font-semibold rounded-sm transition-colors transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 active:scale-[0.98]';
  
  const variantClasses = {
    primary: 'bg-brand-green text-[#111111] hover:brightness-95',
    secondary: 'bg-white/12 text-white opacity-80 hover:opacity-100 hover:bg-white/16',
    ghost: 'bg-transparent text-white opacity-80 hover:opacity-100 hover:bg-white/6',
  };

  const sizeClasses = {
    sm: 'h-6 px-2 py-1 text-xs leading-4',
    md: 'h-8 px-3 py-2 text-xs leading-4',
    lg: 'h-10 px-4 py-3 text-sm leading-5',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

