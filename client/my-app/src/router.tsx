import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/products/Products';
import { Home } from './components/home/Home';
import ProductDetails from './components/products/ProductDetails';
import { About } from './components/home/about/About';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		index: true,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/products',
		element: <Products />,
	},
	{
		path: '/product/:id',
		element: <ProductDetails />,
	},
]);
