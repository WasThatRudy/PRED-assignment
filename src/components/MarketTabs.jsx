import React from 'react';
import { useTradeStore } from '../store/tradeStore';
import { MarketTabButton } from './molecules';
import { LeagueIcon } from './atoms';
import eplLogo from '../assets/images/teamlogos/league_logo.svg';
import playIcon from '../assets/icons/play.svg';

export const MarketTabs = () => {
  const activeTab = useTradeStore((state) => state.activeMarketTab);
  const setActiveTab = useTradeStore((state) => state.setActiveMarketTab);

  const tabs = [
    { 
      id: 'live', 
      label: 'Live & Upcoming'
    },
    { 
      id: 'winner', 
      label: 'Winner'
    },
    { 
      id: 'mvp', 
      label: 'MVP'
    },
    { 
      id: 'top3', 
      label: 'Top 3 teams'
    },
  ];

  return (
    <div className="flex items-center border-t border-b border-border-light relative px-4 py-3 gap-2 h-14">
      {/* Live & Upcoming - Static label (not a tab) */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <img src={playIcon} alt="play" className="w-4 h-4 opacity-70" />
        <span className="text-white text-xs sm:text-sm opacity-70 whitespace-nowrap">{tabs[0].label}</span>
      </div>

      {/* Divider */}
      <div className="border-l border-border-light flex-shrink-0 w-px h-8" />

      {/* Scrollable Tabs */}
      <div className="flex items-center overflow-x-auto scrollbar-hide flex-1 gap-2">
        {tabs.slice(1).map((tab, index) => (
          <React.Fragment key={tab.id}>
            <MarketTabButton
              label={tab.label}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              iconType="league"
              icon={<LeagueIcon src={eplLogo} alt="league" />}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
