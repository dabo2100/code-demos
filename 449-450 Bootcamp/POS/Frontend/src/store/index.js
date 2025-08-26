import toast from 'react-hot-toast';
import { create } from 'zustand';

export const domain = 'http://82.112.241.233:2600';

export const useCart = create((set, get) => ({
  index: false,
  cartContent: [],
  openCart: () => set(() => ({ index: true })),
  closeCart: () => set(() => ({ index: false })),
  addToCart: (product) =>
    set((state) => {
      let copy = null;
      let productIndex = state.cartContent.findIndex((el) => el.documentId == product.documentId);
      if (productIndex == -1) {
        copy = [...state.cartContent, { ...product, qty: 1 }];
      } else {
        copy = [...state.cartContent];
        copy[productIndex].qty++;
      }
      toast.success('Product Added To Cart');
      return { cartContent: copy };
    }),
  incrementQty: (index) =>
    set((state) => {
      let copy = [...state.cartContent];
      copy[index].qty++;
      return { cartContent: copy };
    }),

  decrementQty: (index) =>
    set((state) => {
      let copy = [...state.cartContent];
      copy[index].qty > 1 && copy[index].qty--;
      return { cartContent: copy };
    }),
  removeItem: (index) =>
    set((state) => {
      let copy = [...state.cartContent];
      copy.splice(index, 1);
      return { cartContent: copy };
    }),
  clearCart: () => set(() => ({ cartContent: [] })),
}));

export const useCheckOut = create((set) => ({
  index: false,
  openCheckout: () => set({ index: true }),
  closeCheckout: () => set({ index: false }),
}));
