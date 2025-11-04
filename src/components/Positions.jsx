import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoreVertical } from 'lucide-react';
import { useTradeStore } from '../store/tradeStore';
import { PositionItem } from './PositionItem.jsx';

export const Positions = () => {
  const positions = useTradeStore((state) => state.positions);
  const activeTab = useTradeStore((state) => state.activePositionTab);
  const setActiveTab = useTradeStore((state) => state.setActivePositionTab);
  const closePosition = useTradeStore((state) => state.closePosition);

  const itemRefs = useRef({});
  const [visibleIds, setVisibleIds] = useState({}); // id -> boolean

  const handleClose = (id) => {
    // Avoid focus-induced scroll jumps
    if (typeof document !== 'undefined' && document.activeElement && 'blur' in document.activeElement) {
      try { document.activeElement.blur(); } catch {}
    }
    setVisibleIds((prev) => ({ ...prev, [id]: false }));
  };

  // Ensure any newly added positions are visible
  useEffect(() => {
    setVisibleIds((prev) => {
      const next = { ...prev };
      for (const pos of positions) {
        if (!(pos.id in next)) next[pos.id] = true;
      }
      return next;
    });
  }, [positions]);

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
      <div className="flex flex-col items-start p-4 gap-4 w-full max-w-full" style={{ overflowAnchor: 'none' }}>
        <AnimatePresence initial={false} mode="wait">
          {positions.map((pos) => {
            const isCollapsing = visibleIds[pos.id] === false;
            return (
              <motion.div
                key={pos.id}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isCollapsing ? 0 : 1, height: isCollapsing ? 0 : 'auto' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full"
                style={{ overflow: 'hidden' }}
                ref={(el) => {
                  if (el) itemRefs.current[pos.id] = el;
                  else delete itemRefs.current[pos.id];
                }}
                onAnimationComplete={() => {
                  if (isCollapsing) {
                    const beforeScroll = typeof window !== 'undefined' ? window.scrollY : 0;
                    const beforeDocH = typeof document !== 'undefined' ? (document.documentElement.scrollHeight || document.body.scrollHeight) : 0;
                    // Remove from store now
                    closePosition(pos.id);
                    // After DOM updates, offset scroll by document height change
                    if (typeof window !== 'undefined') {
                      const root = document.documentElement;
                      const body = document.body;
                      const prevRootBehavior = root.style.scrollBehavior;
                      const prevBodyBehavior = body.style.scrollBehavior;
                      root.style.scrollBehavior = 'auto';
                      body.style.scrollBehavior = 'auto';
                      requestAnimationFrame(() => {
                        const afterDocH = document.documentElement.scrollHeight || document.body.scrollHeight;
                        const deltaH = beforeDocH - afterDocH;
                        if (deltaH !== 0) {
                          window.scrollTo(0, beforeScroll - deltaH);
                        }
                        root.style.scrollBehavior = prevRootBehavior || '';
                        body.style.scrollBehavior = prevBodyBehavior || '';
                      });
                    }
                  }
                }}
              >
                <PositionItem
                  position={pos}
                  onClose={() => handleClose(pos.id)}
                />
              </motion.div>
            );
          })}
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
