import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoreVertical } from 'lucide-react';
import { useTradeStore } from '../store/tradeStore';
import { PositionItem } from './PositionItem.jsx';

export const Positions = () => {
  const positions = useTradeStore((state) => state.positions);
  const activeTab = useTradeStore((state) => state.activePositionTab);
  const setActiveTab = useTradeStore((state) => state.setActivePositionTab);
  const closePosition = useTradeStore((state) => state.closePosition);

  const tabs = [
    { id: 'positions', label: 'Positions' },
    { id: 'open-orders', label: 'Open orders' },
    { id: 'trade-history', label: 'Trade History' },
  ];

  return (
    <div className="flex flex-col w-full max-w-full mx-auto">
      {/* Section Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-border-light bg-gradient-overlay backdrop-blur-[30px] h-12 gap-[4.75rem]"
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
        <div className="flex items-center gap-2 h-7">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center justify-center h-7 px-2"
              >
                <motion.span
                  className="font-semibold text-[0.625rem] sm:text-xs leading-4 text-white"
                  animate={{ opacity: isActive ? 0.82 : 0.4 }}
                  transition={{ duration: 0.25 }}
                >
                  {tab.label}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Positions List */}
      <div className="flex flex-col items-start p-4 gap-4 w-full max-w-full">
        <AnimatePresence initial={false} mode="wait">
          {positions.map((pos) => (
            <motion.div
              key={pos.id}
              layout
              initial={{ opacity: 0, y: 14, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -14, height: 0, marginTop: 0, marginBottom: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full"
              style={{ overflow: 'hidden' }}
            >
              <PositionItem
                position={pos}
                onClose={() => closePosition(pos.id)}
              />
            </motion.div>
          ))}
          {positions.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-center text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 py-8 w-full"
            >
              No open positions
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
