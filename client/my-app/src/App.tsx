import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/header/nav/Nav';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import './components/home/Home.scss';
import { IProduct } from './models/IProduct';
import { CartItem } from './models/CartItem';
import { getFromLs, saveToLs } from './services/localStorage';

export type MyContextType = {
	addProductToCart: (item: CartItem) => void;
	cart: CartItem[];
	plusProduct: (p: CartItem) => void;
	minusProduct: (p: CartItem, i: number) => void;
	cartTotalPrice: number;
};

export const MyContext = React.createContext<MyContextType | null>(null);

function App() {
	const [cart, setCart] = useState<CartItem[]>(getFromLs());
	const [isCartVisible, setIsCartVisible] = useState(false);

	useEffect(() => {
		saveToLs(cart);
	}, [cart]);

	const cartTotalPrice = cart.reduce((totalPrice, item) => {
		return totalPrice + item.selectedColor.price * item.amount;
	}, 0);

	const addProductToCart = (newItem: CartItem) => {
		let existingItem = cart.find(
			(item) =>
				item.product.id === newItem.product.id &&
				item.selectedSize.id === newItem.selectedSize.id &&
				item.selectedColor.id === newItem.selectedColor.id
		);

		if (existingItem) {
			existingItem.amount++;
		} else {
			setCart([...cart, newItem]);
		}

		setIsCartVisible(true);
	};

	const plusProduct = (product: CartItem) => {
		product.amount++;
		let copy = [...cart];
		setCart(copy);
	};

	const minusProduct = (product: CartItem, i: number) => {
		if (product.amount === 1) {
			cart.splice(i, 1);
			let copy = [...cart];
			setCart(copy);
		} else {
			product.amount--;
			let copy = [...cart];
			setCart(copy);
		}
	};
	return (
		<MyContext.Provider
			value={{
				addProductToCart,
				cart,
				plusProduct,
				minusProduct,
				cartTotalPrice,
			}}
		>
			<header>
				<Nav
					cart={cart}
					cartclick={isCartVisible}
					closeCartFunction={() => setIsCartVisible(false)}
					plusProduct={plusProduct}
					minusProduct={minusProduct}
					cartTotalPrice={cartTotalPrice}
				/>
			</header>
			<main className='main'>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</MyContext.Provider>
	);
}

export default App;
