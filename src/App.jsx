import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { MarketTabs } from './components/MarketTabs.jsx';
import { TradeCard } from './components/tradeCard.jsx';
import { Positions } from './components/Positions.jsx';
import { FooterNav } from './components/FooterNav.jsx';

function App() {
  return (
    <div className="relative overflow-y-auto overflow-x-hidden font-sans min-h-screen bg-[#010101] w-full max-w-full mx-auto">
      {/* Background gradient blur - Ellipse 1523 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '50.875rem',
          height: '71.670625rem',
          top: 'calc(50% - 71.670625rem/2 - 16.883125rem)',
          background: 'radial-gradient(74.47% 74.47% at 50.03% 25.53%, rgba(98, 98, 98, 0.296) 0%, rgba(45, 106, 126, 0.296) 52.4%, rgba(22, 43, 50, 0.37) 99.04%)',
          filter: 'blur(3.27803125rem)'
        }}
      />

      {/* Main Content Frame */}
      <div className="relative flex flex-col pb-[10rem] w-full min-w-0">
        {/* Header */}
        <Navbar />

        {/* Top Navigation Tabs */}
        <MarketTabs />

        {/* Main Trading Section - Team Header + Orderbook */}
        <TradeCard />

        {/* Positions Section */}
        <Positions />
      </div>

      {/* Footer Navigation - Fixed at bottom */}
      <FooterNav />
    </div>
  );
}

export default App;
