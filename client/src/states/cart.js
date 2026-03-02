import { create } from "zustand";

export const useCart = create((set) => ({
  products: {},

  add: (id) =>
    set((state) => {
      if (state.products[id]) return state;
      return {
        products: { ...state.products, [id]: true },
      };
    }),
  remove: (id) =>
    set((state) => {
      if (!state.products[id]) return state;
      const newProducts = { ...state.products };
      delete newProducts[id];
      console.log({ products: newProducts });

      return { products: newProducts };
    }),
  reset: () => set({ products: {} }),
}));
