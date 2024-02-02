import '../products/Products.scss';
import { useEffect, useState } from 'react';
import { getProductNews } from '../../../services/productServices';
import { IProduct } from '../../../models/IProduct';
import ProductList from '../productlist/ProductList';

export const News = () => {
	const [news, setNews] = useState<IProduct[]>([]);

	useEffect(() => {
		getProductNews().then((result: IProduct[]) => {
			setNews(result);
		});
	}, []);

	return (
		<>
			<div className='news-title'>
				<h3>Nyheter</h3>
			</div>
			<ProductList products={news} />
		</>
	);
};
