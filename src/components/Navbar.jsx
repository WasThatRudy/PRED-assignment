import React from 'react';
import { LeagueSelector, EarnRewardsButton, ProfileAvatar } from './molecules';
import logo from '../assets/images/company_logo.svg';
import eplLogo from '../assets/images/teamlogos/league_logo.svg';
import dollar from '../assets/icons/dollar.svg';

export const Navbar = () => {
  return (
    <header
      className="w-full flex items-center justify-between p-4 h-16 bg-overlay-blend backdrop-blur-[30px]"
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
