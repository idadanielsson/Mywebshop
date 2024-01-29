import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IProduct } from '../../../models/IProduct';
import {
	getProductNews,
	getProducts,
	getProductsByCategory,
	getProductsBySubcategory,
} from '../../../services/productServices';
import './Products.scss';

import { ColorFilter } from '../colorfilter/ColorFilter';
import { getProductsByColor } from '../../../services/colorServices';

const Products = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const { categoryId, subcategoryId, colorId } = useParams();

	const category = Number(categoryId);
	const subcategory = Number(subcategoryId);
	const color = Number(colorId);

	useEffect(() => {
		if (subcategoryId) {
			getProductsBySubcategory(subcategory).then((result) => {
				setProducts(result);
			});
		} else if (categoryId) {
			getProductsByCategory(category).then((result) => {
				setProducts(result);
			});
		} else if (colorId) {
			getProductsByColor(color).then((result) => {
				setProducts(result);
			});
		} else if (colorId) {
			getProductNews().then((result) => {
				setProducts(result);
			});
		} else {
			getProducts().then((result) => {
				setProducts(result);
			});
		}
	}, [categoryId, subcategoryId, colorId]);

	return (
		<>
			<div>
				<ColorFilter />
			</div>
			<div className='products'>
				<ul className='products__list'>
					{products.map((product: IProduct) => (
						<div key={product.id} className='item-wrapper'>
							<li className='item-wrapper__item'>
								<Link className='link' to={`/shop/product/${product.id}`}>
									<div className='product-img'>
										<img src={product.url} alt='product-img' />
									</div>
								</Link>
								<div className='content-wrapper'>
									<span>{product.brand_name}</span>
									<h3>{product.name}</h3>
									{/* <p>{product.price} kr</p> */}
								</div>
							</li>
						</div>
					))}
				</ul>
			</div>
		</>
	);
};

export default Products;
