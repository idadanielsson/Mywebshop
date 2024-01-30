import { Link, useNavigate } from 'react-router-dom';
import '../products/Products.scss';
import { useContext, useEffect, useState } from 'react';
import { getProductNews } from '../../../services/productServices';
import { IProduct } from '../../../models/IProduct';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { MyContext } from '../../../App';
import { FaHeart } from 'react-icons/fa6';
import ProductList from '../productlist/ProductList';

export const News = () => {
	const [news, setNews] = useState<IProduct[]>([]);

	const context = useContext(MyContext);

	// const handleAddToCart = (product: IProduct) => {
	// 	if (context) {
	// 		context.addProductToCart(product);
	// 	}
	// };

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
