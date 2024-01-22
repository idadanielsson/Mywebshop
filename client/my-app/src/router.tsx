import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './components/shop/products/Products';
import { Home } from './components/home/Home';
import ProductDetails from './components/shop/product/ProductDetails';
import { About } from './components/home/about/About';
import { Faq } from './components/home/faq/Faq';
import { Contact } from './components/home/contact/Contact';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home />, index: true },
			{ path: '/about', element: <About /> },
			{ path: '/products', element: <Products /> },
			{ path: '/product/:id', element: <ProductDetails /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/contact', element: <Contact /> },
		],
	},
]);
