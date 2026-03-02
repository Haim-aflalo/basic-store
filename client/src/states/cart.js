import { create } from "zustand";

export const useCart = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  remove: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
