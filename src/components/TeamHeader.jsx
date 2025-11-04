import React from 'react';
import manchesterCityLogo from '../assets/images/teamlogos/manc.svg';
import { TeamInfo, PriceInfo } from './molecules';

export const TeamHeader = () => {
  return (
    <div
      className="flex items-start justify-between px-4 py-4 w-full h-[4.25rem] bg-overlay-blend"
    >
      {/* Team Item */}
      <TeamInfo
        logo={manchesterCityLogo}
        name="MANC"
        volume="1,389,829M Vol."
      />

      {/* Price Info */}
      <PriceInfo
        chance="30%"
        currentPrice="100"
        targetPrice="130"
      />
    </div>
  );
};

