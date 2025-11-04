import React from 'react';
import { useTradeStore } from '../store/tradeStore';
import { MarketTabButton } from './molecules';
import { LeagueIcon } from './atoms';
import eplLogo from '../assets/images/navbar/league_logo.png';

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
    <div className="flex items-center border-t border-b border-border-light relative px-4 py-3 gap-4 h-14">
      {/* Live & Upcoming - Fixed */}
      <MarketTabButton
        label={tabs[0].label}
        active={activeTab === 'live'}
        onClick={() => setActiveTab('live')}
        iconType="play"
      />

      {/* Divider */}
      <div className="border-l border-border-light flex-shrink-0 w-px h-8" />

      {/* Scrollable Tabs */}
      <div className="flex items-center overflow-x-auto scrollbar-hide flex-1 gap-4">
        {tabs.slice(1).map((tab, index) => (
          <React.Fragment key={tab.id}>
            {index > 0 && (
              <div className="border-l border-border-light flex-shrink-0 w-px h-8" />
            )}
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
