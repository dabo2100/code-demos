import { create } from "zustand";

export const counter = create((set) => ({
  intial: 0,
  incrementCounter: () => set((state) => ({ intial: state.intial + 1 })),
  decrementCounter: () => set((state) => ({ intial: state.intial - 1 })),
}));

export const isDark = create((set) => ({
  value: true,
  toggle: () => set((state) => ({ value: !state.value })),
}));
