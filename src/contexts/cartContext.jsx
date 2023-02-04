import { createContext, useState, useEffect } from 'react';

export const CartItemsContext = createContext();

export const CartItemsContextProvider = ({ children }) => {
	const [CartItems, setCartItems] = useState(null);

	useEffect(() => {
		const storage = localStorage.getItem('cart-items');

		if (storage) {
			const { cartItems } = JSON.parse(storage);

			setCartItems(cartItems);
		} else {
			setCartItems([]);
		}
	}, []);

	useEffect(() => {
		if (!CartItems) return;

		const updatedStorage = localStorage.setItem(
			'cart-items',
			JSON.stringify({
				cartItems: CartItems,
			})
		);
	}, [CartItems]);

	return (
		<CartItemsContext.Provider value={[CartItems, setCartItems]}>
			{CartItems && children}
		</CartItemsContext.Provider>
	);
};
