import React from 'react';
import { useTradeStore } from '../store/tradeStore';
import { 
  Info
} from 'lucide-react';
import marketsIcon from '../assets/icons/markets.svg';
import tradeIcon from '../assets/icons/trade.svg';
import statsIcon from '../assets/icons/stats.svg';
import alignCenterIcon from '../assets/icons/align-center.svg';
import { TeamSelectorButton, IconButton, TabButton } from './molecules';
import eplLogo from '../assets/images/navbar/league_logo.png';
import infoIcon from '../assets/icons/info.svg';

export const FooterNav = () => {
  const activeTab = useTradeStore((state) => state.activeFooterTab);
  const setActiveTab = useTradeStore((state) => state.setActiveFooterTab);

  const navItems = [
    { id: 'markets', label: 'Markets', icon: marketsIcon },
    { id: 'trade', label: 'Trade', icon: tradeIcon },
    { id: 'wallet', label: '$0.00', icon: statsIcon },
    { id: 'more', label: 'More', icon: alignCenterIcon },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col items-start bg-footer-gradient w-full max-w-full mx-auto h-[7.5rem]"
    >
      {/* Bottom nav - Team Selector Section */}
      <div className="flex flex-row justify-between items-center border-t border-border-light backdrop-blur-[30px] w-full h-14 p-3 flex-shrink-0">
        {/* Frame 849 - Container */}
        <div className="flex flex-row items-center gap-2 w-full h-8">
          {/* Buttons - Manchester City */}
          <TeamSelectorButton
            logo={eplLogo}
            label="Manchester city"
            onClick={() => {}}
          />

          {/* Buttons - View Team Info */}
          <IconButton
            icon={infoIcon}
            label="View team info"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Bottom nav - Tab Bar */}
      <div className="relative border-t border-border-light backdrop-blur-[30px] w-full h-16 flex-shrink-0">
        {/* Tab Bar Buttons */}
        <div className="absolute flex flex-row justify-between items-start gap-2 sm:gap-[5.1875rem] left-0 right-0 top-1/2 -translate-y-1/2 h-[2.625rem] w-full max-w-full px-4">
          {navItems.map((item) => (
            <TabButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => setActiveTab(item.id)}
              active={activeTab === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
