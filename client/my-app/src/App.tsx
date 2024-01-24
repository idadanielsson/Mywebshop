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

export type MyContext = {
	addProductToCart(p: IProduct): void;
	cart: CartItem[];
	plusProduct(p: CartItem): void;
	minusProduct(p: CartItem): void;
	cartTotalPrice: number;
};

function App() {
	const [cart, setCart] = useState<CartItem[]>(getFromLs());

	useEffect(() => {
		saveToLs(cart);
	}, [cart]);

	const cartTotalPrice = cart.reduce(
		(price, item) => item.product.price * item.amount + price,
		0
	);

	const addProductToCart = (product: IProduct) => {
		let existingItem: CartItem | undefined = cart.find(
			(cart) => product.id === cart.product.id
		);

		if (existingItem) {
			existingItem.amount++;
			let copy = [...cart];
			setCart(copy);
		} else {
			setCart([...cart, new CartItem(product, 1)]);
		}
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
		<>
			<header>
				<Nav
					cartTotalPrice={cartTotalPrice}
					cart={cart}
					plusProduct={plusProduct}
					minusProduct={minusProduct}
				/>
			</header>
			<main className='main'>
				<Outlet
					context={{
						addProductToCart,
						cart,
						plusProduct,
						minusProduct,
						cartTotalPrice,
					}}
				></Outlet>
			</main>
		</>
	);
}

export default App;
