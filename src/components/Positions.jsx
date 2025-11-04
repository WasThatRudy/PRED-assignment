import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useTradeStore } from '../store/tradeStore';
import { PositionItem } from './PositionItem.jsx';

export const Positions = () => {
  const positions = useTradeStore((state) => state.positions);
  const activeTab = useTradeStore((state) => state.activePositionTab);
  const setActiveTab = useTradeStore((state) => state.setActivePositionTab);
  const closePosition = useTradeStore((state) => state.closePosition);

  const tabs = [
    { id: 'positions', label: 'Position' },
    { id: 'open-orders', label: 'Open orders' },
    { id: 'trade-history', label: 'Trade History' },
  ];

  return (
    <div className="flex flex-col w-full max-w-full mx-auto">
      {/* Section Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-border-light bg-gradient-overlay h-12 gap-[4.75rem]"
        style={{ backgroundBlendMode: 'overlay, normal' }}
      >
        <span className="font-medium text-[0.625rem] sm:text-xs leading-4 text-white opacity-[0.82] h-4">
          EPL
        </span>
        <div className="flex items-center justify-center w-6 h-6">
          <button className="flex items-center justify-center w-6 h-6 px-[0.1875rem] rounded-sm">
            <MoreVertical size={16} className="text-white opacity-60" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-border-light p-4 gap-2.5 h-12">
        <div className="flex items-center gap-4 h-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center justify-center h-4 gap-2.5"
              >
                <span
                  className={`font-semibold text-[0.625rem] sm:text-xs leading-4 h-4 ${
                    isActive ? 'text-white opacity-[0.82]' : 'text-white opacity-40'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Positions List */}
      <div className="flex flex-col items-start p-4 gap-4 w-full max-w-full h-[13.5rem] isolate overflow-y-auto scrollbar-hide">
        {positions.length === 0 ? (
          <p className="text-center text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 py-8 w-full">
            No open positions
          </p>
        ) : (
          positions.map((pos) => (
            <PositionItem
              key={pos.id}
              position={pos}
              onClose={() => closePosition(pos.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};
