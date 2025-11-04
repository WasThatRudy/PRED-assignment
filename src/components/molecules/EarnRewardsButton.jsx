import React from 'react';

export const EarnRewardsButton = ({ icon, label = 'Earn Rewards', onClick, className = '' }) => {
  return (
    <div className={`relative rounded-sm overflow-hidden p-[0.125rem] max-w-[77%] h-8 ${className}`}>
      
      {/* The Animated Line that traces the border */}
      <div 
        className="absolute animate-border-rotate"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #4A9A5A 20%, #8CF056 50%, #4A9A5A 80%, transparent 100%)',
          boxShadow: '0 0 0.5rem rgba(140, 240, 86, 0.6), 0 0 1rem rgba(140, 240, 86, 0.4)',
        }}
      />
      
      {/* The Button on Top */}
      <button
        onClick={onClick}
        className="group relative w-full h-full bg-[#1B3037] hover:bg-[#1f3740] active:scale-[0.98] transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 border border-border-light flex items-center justify-center gap-2 px-3 rounded-sm z-10"
      >
        <img src={icon} alt="dollar" className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
        <span className="text-white opacity-80 group-hover:opacity-100 font-semibold text-[0.625rem] sm:text-xs leading-4 transition-opacity">{label}</span>
      </button>
    </div>
  );
};
