import React from 'react';
import { Gift } from 'lucide-react';

export const OrderBook = () => {
  // Mock order book data
  const sellOrders = [
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
  ];

  const buyOrders = [
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
    { price: 34.9, shares: 210000 },
  ];

  const currentPrice = 29.9;

  return (
    <div className="flex flex-col border-l border-border-light min-w-[8.75rem] sm:min-w-[11.125rem] w-full h-full">
      {/* Labels */}
      <div className="flex items-center justify-end px-2 sm:px-4 py-3 border-b border-border-light w-full h-10 min-w-0">
        <div className="flex items-center justify-between gap-1 sm:gap-2 w-full px-1 sm:px-2 h-4 min-w-0">
          <span className="font-medium flex-1 text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 truncate">
            Price
          </span>
          <span className="font-medium text-right flex-1 text-[0.625rem] sm:text-xs leading-4 text-white opacity-40 h-4 truncate">
            Shares
          </span>
        </div>
      </div>

      {/* Sell Orders */}
      {sellOrders.map((order, index) => (
        <div
          key={`sell-${index}`}
          className="flex items-center justify-end px-2 sm:px-4 w-full h-8 gap-2 sm:gap-4 min-w-0"
        >
          <div className="flex items-center justify-between gap-1 sm:gap-2 w-full px-1 sm:px-2 h-4 min-w-0">
            <span className="font-normal flex-1 text-[0.800rem] sm:text-xs leading-4 text-[#FF7361] h-4 sm:truncate">
              {order.price.toFixed(1)}¢
            </span>
            <span className="font-normal text-right flex-1 text-[0.800rem] sm:text-xs leading-4 text-white opacity-60 h-4 sm:truncate">
              {order.shares.toLocaleString()}
            </span>
          </div>
        </div>
      ))}

      {/* Spread - Current Price */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-t border-b border-border-light w-full h-10 gap-2 sm:gap-2.5 backdrop-blur-[20px] min-w-0">
        <div className="flex items-center justify-between gap-1 sm:gap-2 w-full px-1 sm:px-2 h-6 min-w-0">
          <span className="font-semibold flex-1 text-[1rem] sm:text-xs md:text-sm leading-5 text-white opacity-[0.82] h-5 sm:truncate">
            {currentPrice.toFixed(1)}¢
          </span>
          <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 px-[0.1875rem] rounded-sm">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-60" />
          </div>
        </div>
      </div>

      {/* Buy Orders */}
      {buyOrders.map((order, index) => (
        <div
          key={`buy-${index}`}
          className="flex items-center justify-end px-2 sm:px-4 w-full h-8 gap-2 sm:gap-4 min-w-0"
        >
          <div className="flex items-center justify-between gap-1 sm:gap-2 w-full px-1 sm:px-2 h-4 min-w-0">
            <span className="font-normal flex-1 text-[0.800rem] sm:text-xs leading-7 text-brand-green h-4 sm:truncate">
              {order.price.toFixed(1)}¢
            </span>
            <span className="font-normal text-right flex-1 text-[0.800rem] sm:text-xs leading-7 text-white opacity-60 h-4 sm:truncate">
              {order.shares.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
