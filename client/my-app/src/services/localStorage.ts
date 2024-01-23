import { CartItem } from '../models/CartItem';

export const getFromLs = () => {
	let cartFromLs = localStorage.getItem('cart');

	if (cartFromLs) {
		return JSON.parse(localStorage.getItem('cart') || '');
	} else {
		return [];
	}
};

export const saveToLs = (cart: CartItem[]) => {
	localStorage.setItem('cart', JSON.stringify(cart));
};
