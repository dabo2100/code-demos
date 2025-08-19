import { create } from 'zustand';

export const domain = 'http://82.112.241.233:2600';

export const useCart = create((set) => ({
  index: false,
  openCart: () => set(() => ({ index: true })),
  closeCart: () => set(() => ({ index: false })),
}));
