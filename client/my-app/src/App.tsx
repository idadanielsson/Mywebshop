import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/products/Products';
import { Nav } from './components/header/Nav';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import './components/home/Home.scss';

function App() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
