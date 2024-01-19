import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/products/Products';
import { Home } from './components/home/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		index: true,
	},

	{
		path: '/shop',
		element: <Products />,
		children: [{ path: '/shop', element: <Products />, index: true }],
	},
]);
