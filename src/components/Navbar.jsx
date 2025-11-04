import React from 'react';
import { LeagueSelector, EarnRewardsButton, ProfileAvatar } from './molecules';
import logo from '../assets/images/company_logo.png';
import eplLogo from '../assets/images/navbar/league_logo.png';
import dollar from '../assets/icons/dollar.svg';

export const Navbar = () => {
  return (
    <header
      className="w-full flex items-center justify-between px-4 py-4 border-b border-border-light backdrop-blur-[30px] h-16"
      style={{ 
        background: '#2525250D, #9C9C9C',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Left Group - Logo and League */}
      <LeagueSelector
        logo={logo}
        eplLogo={eplLogo}
        label="EPL 2025"
        onClick={() => {}}
      />

      {/* Right Group - Earn Rewards and Profile */}
      <div className="flex items-center gap-2 min-w-0 flex-1 justify-end h-8">
        <EarnRewardsButton
          icon={dollar}
          label="Earn Rewards"
          onClick={() => {}}
        />

        <ProfileAvatar />
      </div>
    </header>
  );
};
