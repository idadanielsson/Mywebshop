import React, { useEffect, useState } from 'react';
import { IProduct } from '../../models/IProduct';
import { getProducts } from '../../services/productServices';
import '../products/Products.scss';

const Products = () => {
	const [data, setData] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		getProducts()
			.then((result) => {
				setData(result);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error:', err);
				setError('An error occurred while fetching data');
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading data...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className='products'>
			<ul className='products__list'>
				{data.map((product: IProduct) => (
					<div className='item-wrapper'>
						<li key={product.id} className='item-wrapper__item'>
							<h3>{product.name}</h3>
							<p>{product.short_description}</p>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Products;
