import { create } from "zustand";

export const systemPhones = create(() => ({
  phones: [
    { id: 1, name: "iPhone x", price: 500 },
    { id: 2, name: "iPhone 11", price: 550 },
    { id: 3, name: "iPhone 12", price: 600 },
    { id: 4, name: "iPhone 13", price: 650 },
    { id: 5, name: "iPhone 14", price: 700 },
  ],
}));

export const fatora = create((set) => ({
  items: [],
  addProduct: (phone) =>
    set((state) => {
      let newItem = { ...phone, qty: 1 };
      let oldItems = [...state.items];
      oldItems.push(newItem);
      return { items: oldItems };
    }),
}));
