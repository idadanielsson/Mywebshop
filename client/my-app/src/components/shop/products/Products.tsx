import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IProduct } from '../../../models/IProduct';
import {
	getProducts,
	getProductsByCategory,
	getProductsBySubcategory,
} from '../../../services/productServices';
import './Products.scss';

const Products = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const { categoryId, subcategoryId } = useParams();

	const category = Number(categoryId);
	const subcategory = Number(subcategoryId);

	useEffect(() => {
		if (subcategoryId) {
			getProductsBySubcategory(subcategory).then((result) => {
				setProducts(result);
			});
		} else if (categoryId) {
			getProductsByCategory(category).then((result) => {
				setProducts(result);
			});
		} else {
			getProducts().then((result) => {
				setProducts(result);
			});
		}
	}, [categoryId, subcategoryId]);

	return (
		<>
			<div className='products'>
				<ul className='products__list'>
					{products.map((product: IProduct) => (
						<Link key={product.id} to={`/shop/product/${product.id}`}>
							<div className='item-wrapper'>
								<li key={product.id} className='item-wrapper__item'>
									<div className='product-img'>
										<img src={product.url} alt='product-img' />
									</div>
									<p>{product.brand_name}</p>
									<h3>{product.name}</h3>
									<p>{product.price} kr</p>
								</li>
							</div>
						</Link>
					))}
				</ul>
			</div>
		</>
	);
};

export default Products;
