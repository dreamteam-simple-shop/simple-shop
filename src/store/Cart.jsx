import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      toggleCart: (product) => {
        const current = get().cart;
        const exists = current.includes(product);
        set({
          cart: exists ? current.filter((elm) => elm !== product) : [...current, product],
        });
      },
    }),
    { name: "cart-storage" }
  )
);

export default useStore;
