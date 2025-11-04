import React, { useMemo } from 'react';
import { useTradeStore } from '../store/tradeStore';
import { TeamHeader } from './TeamHeader';
import { OrderBook } from './OrderBook';
import { Dropdown, Button } from './atoms';
import {
  NumberInput,
  ToggleButtonGroup,
  PercentageChips,
  CheckboxField,
  InfoDisplay,
  AvailableBalance,
} from './molecules';

export const TradingSection = () => {
  const orderType = useTradeStore((state) => state.orderType);
  const amount = useTradeStore((state) => state.amount);
  const priceType = useTradeStore((state) => state.priceType);
  const currency = useTradeStore((state) => state.currency);
  const reduceOnly = useTradeStore((state) => state.reduceOnly);

  const setOrderType = useTradeStore((state) => state.setOrderType);
  const setAmount = useTradeStore((state) => state.setAmount);
  const setAmountByPercentage = useTradeStore((state) => state.setAmountByPercentage);
  const incrementAmount = useTradeStore((state) => state.incrementAmount);
  const decrementAmount = useTradeStore((state) => state.decrementAmount);
  const addPosition = useTradeStore((state) => state.addPosition);
  const setPriceType = useTradeStore((state) => state.setPriceType);
  const setCurrency = useTradeStore((state) => state.setCurrency);
  const setReduceOnly = useTradeStore((state) => state.setReduceOnly);

  // Dropdown options
  const priceTypeOptions = [
    { value: 'market', label: 'Market Price' },
    { value: 'limit', label: 'Limit Price' },
  ];

  const currencyOptions = [
    { value: 'USDC', label: 'USDC' },
    { value: 'Shares', label: 'Shares' },
  ];

  // Toggle button options
  const orderTypeOptions = [
    { value: 'long', label: 'Long/Buy' },
    { value: 'short', label: 'Short/Sell' },
  ];

  const mainButtonText = `${orderType === 'long' ? 'Long' : 'Short'} MANC`;
  const userBalance = 265;
  const toWin = useMemo(() => {
    const amountValue = parseFloat(amount) || 0;
    if (amountValue === 0) return 0;
    return orderType === 'long' ? amountValue * 0.30 : amountValue * 0.20;
  }, [amount, orderType]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow in-progress values like '.', '123.', etc.; just store the string
    if (value === '' || value === '.' || /\d+\.$/.test(value)) {
      setAmount(value);
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setAmount(value);
    }
  };

  return (
    <>
      {/* Team Header */}
      <TeamHeader />

      {/* Orderbook Section - Split Layout */}
      <div className="flex items-stretch border-t border-b border-border-light w-full min-w-0">
        {/* Left Container - Inputs */}
        <div className="flex flex-col flex-shrink-0 min-w-0 flex-1 sm:flex-initial sm:w-[57%] py-3 px-0">
          {/* Header - Button Group */}
          <div className="px-4 mb-2.5 w-full h-[1.625rem]">
            <ToggleButtonGroup
              value={orderType}
              options={orderTypeOptions}
              onChange={setOrderType}
            />
          </div>

          {/* Dropdown Section */}
          <div className="px-4 flex flex-col gap-4 w-full">
            {/* Market Price Dropdown */}
            <Dropdown
              value={priceType}
              options={priceTypeOptions}
              onChange={setPriceType}
            />

            {/* USDC Dropdown */}
            <Dropdown
              value={currency}
              options={currencyOptions}
              onChange={setCurrency}
            />

            {/* Number Input Section */}
            <div className="flex flex-col w-full">
              {/* Available Amount */}
              <AvailableBalance balance={userBalance} />

              {/* Number Input Field */}
              <NumberInput
                value={amount}
                onChange={handleAmountChange}
                onIncrement={incrementAmount}
                onDecrement={decrementAmount}
                placeholder="$0.00"
                onBlur={() => {
                  const numValue = parseFloat(amount);
                  if (isNaN(numValue)) {
                    setAmount('0.00');
                  } else {
                    const clamped = Math.max(0, Math.min(userBalance, numValue));
                    setAmount(clamped.toFixed(2));
                  }
                }}
              />

              {/* Chips Section */}
              <div className="flex flex-col py-2 gap-2.5 w-full h-9">
                <div className="flex justify-end w-full">
                  <PercentageChips
                    percentages={[25, 50, 100]}
                    onSelect={setAmountByPercentage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reduce Only */}
          <CheckboxField
            label="Reduce only"
            checked={reduceOnly}
            onChange={(e) => setReduceOnly(e.target.checked)}
          />

          {/* To Win Section */}
          <div className="px-4 flex flex-col justify-between w-full">
            <InfoDisplay
              label="To Win🎉"
              sublabel="Avg Price 30¢"
              value={`$${toWin}`}
            />

            {/* Action Button */}
            <Button
              onClick={addPosition}
              variant="primary"
              size="md"
              className="mx-auto w-full mt-5 font-bold"
            >
              {mainButtonText}
            </Button>
          </div>
        </div>

        {/* Right Orderbook */}
        <div className="flex-1 min-w-0">
          <OrderBook />
        </div>
      </div>
    </>
  );
};
