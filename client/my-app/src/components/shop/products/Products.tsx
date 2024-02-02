import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import Categories from '../categories/Categories';
import ProductList from '../productlist/ProductList';

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
				<Categories />
			</div>
			<div className='filter'>
				<ColorFilter />
			</div>
			<ProductList products={products} />
		</>
	);
};

export default Products;
