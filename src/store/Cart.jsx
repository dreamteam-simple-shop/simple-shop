import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		(set, get) => ({
			cart: [],
      updateCart: (id, price, quantity) => {
        const current = get().cart;
        const exists = current.some((elm) => elm.id === id);
        set({
          cart: exists
            ? current.map((elm) => elm.id === id ? { ...elm, quantity: quantity } : elm)
            : [...current, { id, price, quantity }],
        });
      },
			toggleCart: (id, price, quantity) => {
				const current = get().cart;
				const exists = current.some((elm) => elm.id === id);
				set({
					cart: exists
						? current.filter((elm) => elm.id !== id)
						: [...current, { id, price, quantity }],
				});
				console.log(get().cart);
			},
		}),
		{ name: 'cart-storage' },
	),
);

export default useStore;
