import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/products/Products';
import { Home } from './components/home/Home';
import ProductDetails from './components/products/ProductDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		index: true,
	},

	{
		path: '/products',
		element: <Products />,
		children: [
			{ path: '/products', element: <Products />, index: true },
			{ path: '/products/:id', element: <ProductDetails /> },
		],
	},
]);
