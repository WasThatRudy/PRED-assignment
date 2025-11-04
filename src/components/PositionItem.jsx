import React from 'react';
import { PositionHeader, PositionDetails, CloseButton } from './molecules';

export const PositionItem = ({ position, onClose }) => {
  const isLong = position.type === 'long';

  return (
    <div className="relative flex flex-col items-start px-0 py-4 gap-4 w-full max-w-full h-[13.5rem] isolate">
      {/* Frame 565 - Top Row */}
      <PositionHeader
        team={position.team || 'Arsenal'}
        market={position.market || 'Winner'}
        type={isLong ? 'Long' : 'Short'}
        profit={position.profit || 200}
        profitPercent={position.profitPercent || 12.5}
      />

      {/* Frame 815 - Details Section */}
      <PositionDetails
        avgPrice={position.avgPrice || 53.5}
        markPrice={position.markPrice || 53.5}
        shares={position.shares || 3200}
        currentValue={position.currentValue || 12200}
      />

      {/* Rectangle 891942 - Green Vertical Bar */}
      <div className="absolute w-0.5 h-6 -left-4 top-[1.375rem] z-[2] bg-brand-green" />

      {/* Frame 877 - Close Buttons */}
      <div className="flex flex-row items-center gap-2 w-full max-w-full h-8 z-[3] min-w-0">
        <CloseButton
          onClick={onClose}
          label="Market close"
        />
        <CloseButton
          onClick={onClose}
          label="Limit close"
        />
      </div>
    </div>
  );
};
