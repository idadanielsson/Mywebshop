import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/shop/products/Products';
import { Home } from './components/home/Home';
import { About } from './components/home/about/About';
import { Faq } from './components/home/faq/Faq';
import { Contact } from './components/home/contact/Contact';
import Categories from './components/shop/categories/Categories';
import Subcategories from './components/shop/categories/Subcategories';
import ProductDetails from './components/shop/productdetails/ProductDetails';
import Shop from './components/shop/Shop';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home />, index: true },
			{ path: '/about', element: <About /> },
			{
				path: '/shop',
				element: <Shop />,
				children: [
					{ path: '', element: <Products />, index: true },
					{ path: 'product/:id', element: <ProductDetails /> },
					{ path: 'category/:categoryId', element: <Products /> },
					{
						path: 'category/:categoryId/subcategory/:subcategoryId',
						element: <Products />,
					},
				],
			},
		],
	},
]);
