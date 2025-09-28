// We Will Put The Global States

import { create } from 'zustand';
console.log('Store Stated');

export const userInfo = create((set) => ({
  value: {},
  setUserInfo: (newUserInfo) => set(() => ({ value: newUserInfo })),
}));

export const counter = create((set) => ({
  value: 100,
  make150: () => set(() => ({ value: 150 })),
}));

export const loader = create((set) => ({
  index: false,
  openLoader: () => set(() => ({ index: true })),
  closeLoader: () => set(() => ({ index: false })),
}));
