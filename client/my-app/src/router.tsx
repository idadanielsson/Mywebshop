import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/products/Products';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/products',
				element: <Products />,
			},
		],
	},
]);
