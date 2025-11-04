import { create } from 'zustand';

const MARKET_PRICE = 29.9;

const DEFAULT_POSITION = {
  id: 'default-1',
  team: 'Arsenal',
  market: 'Winner',
  type: 'long',
  profit: 200,
  profitPercent: 12.5,
  avgPrice: 53.5,
  markPrice: 53.5,
  shares: 3200,
  currentValue: 12200,
};

export const useTradeStore = create((set) => ({
  // Tab states
  activeMarketTab: 'winner',
  activePositionTab: 'positions',
  activeFooterTab: 'trade',
  
  // Order type (long/short)
  orderType: 'long',
  setOrderType: (type) => set({ orderType: type }),
  
  // Amount
  amount: '',
  setAmount: (amount) => set({ amount }),
  setAmountByPercentage: (percentage) => {
    const balance = 265;
    const newAmount = (balance * percentage).toFixed(2);
    set({ amount: newAmount });
  },
  incrementAmount: () => set((state) => {
    const current = parseFloat(state.amount) || 0;
    return { amount: (current + 0.01).toFixed(2) };
  }),
  decrementAmount: () => set((state) => {
    const current = parseFloat(state.amount) || 0;
    const newAmount = Math.max(0, current - 0.01).toFixed(2);
    return { amount: newAmount };
  }),
  
  // Price type (market/limit)
  priceType: 'market',
  setPriceType: (type) => set({ priceType: type }),
  
  // Currency (USDC/Shares)
  currency: 'USDC',
  setCurrency: (currency) => set({ currency }),
  
  // Reduce only
  reduceOnly: false,
  setReduceOnly: (checked) => set({ reduceOnly: checked }),
  
  // Positions
  positions: [DEFAULT_POSITION],
  addPosition: () => set((state) => {
    const amountValue = parseFloat(state.amount) || 0;
    if (amountValue === 0) return state;
    
    const shares = state.currency === 'USDC' 
      ? Math.floor(amountValue / MARKET_PRICE * 100) 
      : parseFloat(state.amount);
    
    const newPosition = {
      id: `pos-${Date.now()}`,
      team: 'MANC',
      market: 'Winner',
      type: state.orderType,
      profit: state.orderType === 'long' ? amountValue * 0.30 : amountValue * 0.20,
      profitPercent: state.orderType === 'long' ? 30 : 20,
      avgPrice: MARKET_PRICE,
      markPrice: MARKET_PRICE,
      shares: shares,
      currentValue: amountValue,
    };
    
    return {
      positions: [...state.positions, newPosition],
      amount: '0.00',
    };
  }),
  closePosition: (id) => set((state) => ({
    positions: state.positions.filter((pos) => pos.id !== id),
  })),
  
  // Tab setters
  setActiveMarketTab: (tab) => set({ activeMarketTab: tab }),
  setActivePositionTab: (tab) => set({ activePositionTab: tab }),
  setActiveFooterTab: (tab) => set({ activeFooterTab: tab }),
}));

