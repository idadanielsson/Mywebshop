import '../products/Products.scss';
import { useContext, useEffect, useState } from 'react';
import { getProductNews } from '../../../services/productServices';
import { IProduct } from '../../../models/IProduct';
import { MyContext } from '../../../App';
import ProductList from '../productlist/ProductList';

export const News = () => {
	const [news, setNews] = useState<IProduct[]>([]);

	const context = useContext(MyContext);

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
