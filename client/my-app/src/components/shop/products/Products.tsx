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
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

import { MyContext } from '../../../App';
import { ColorFilter } from '../colorfilter/ColorFilter';
import { getProductsByColor } from '../../../services/colorServices';

const Products = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const { categoryId, subcategoryId, colorId } = useParams();

	const category = Number(categoryId);
	const subcategory = Number(subcategoryId);
	const color = Number(colorId);

	const context = useContext(MyContext);

	const handleAddToCart = (product: IProduct) => {
		if (context) {
			context.addProductToCart(product);
		}
	};

	const toggleColor = (productId: number) => {
		setProducts((currentProducts) =>
			currentProducts.map((product) =>
				product.id === productId
					? { ...product, isRed: !product.isRed }
					: product
			)
		);
	};

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
						<div className='item-wrapper'>
							<li key={product.id} className='item-wrapper__item'>
								<Link className='link' to={`/shop/product/${product.id}`}>
									<div className='product-img'>
										<img src={product.url} alt='product-img' />
									</div>
								</Link>
								<div className='content-wrapper'>
									<span>{product.brand_name}</span>
									<h3>{product.name}</h3>
									<p>{product.price} kr</p>
								</div>
								<div className='buy-btn'>
									<FaHeart
										className='buy-btn__icon-heart'
										style={{ color: product.isRed ? 'red' : 'black' }}
										onClick={() => toggleColor(product.id)}
									/>
									<LiaShoppingBagSolid
										onClick={() => handleAddToCart(product)}
										className='buy-btn__icon'
									/>
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
