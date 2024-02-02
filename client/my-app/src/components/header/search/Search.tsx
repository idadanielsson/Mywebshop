import { useEffect, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import { searchProducts } from '../../../services/productServices';
import { useLocation } from 'react-router-dom';
import ProductList from '../../shop/productlist/ProductList';

export const Search = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const searchTerm = params.get('term');

		if (!searchTerm) {
			setProducts([]);
			return;
		}

		const fetchProducts = async () => {
			try {
				const result = await searchProducts(searchTerm);
				setProducts(result);
			} catch (error) {}
		};

		fetchProducts();
	}, [location]);

	return (
		<>
			<ProductList products={products} />
		</>
	);
};
