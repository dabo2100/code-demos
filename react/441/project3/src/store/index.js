import { create } from "zustand";

export const globalModalIndex = create((set) => ({
  // global States
  modalIndex: false,
  // Actions
  openModal: () => {
    set(() => ({ modalIndex: true }));
  }, // تم تصحيح التحديث هنا
  closeModal: () => set(() => ({ modalIndex: false })),
}));

export const $counter = create((set) => ({
  // global States
  counter: 0,
  // Actions
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrmenet: () => set((state) => ({ counter: state.counter - 1 })),
}));
