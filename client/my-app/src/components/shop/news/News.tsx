import { Link, useNavigate } from 'react-router-dom';
import '../products/Products.scss';
import { useContext, useEffect, useState } from 'react';
import { getProductNews } from '../../../services/productServices';
import { IProduct } from '../../../models/IProduct';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { MyContext } from '../../../App';

export const News = () => {
	const [news, setNews] = useState<IProduct[]>([]);

	const context = useContext(MyContext);

	const handleAddToCart = (product: IProduct) => {
		if (context) {
			context.addProductToCart(product);
		}
	};
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
			<div className='products'>
				<ul className='products__list'>
					{news.map((news: IProduct) => (
						<div className='item-wrapper'>
							<li key={news.id} className='item-wrapper__item'>
								<Link className='link' to={`/shop/product/${news.id}`}>
									<div className='product-img'>
										<img src={news.url} alt='product-img' />
									</div>
								</Link>
								<div className='content-wrapper'>
									<span>{news.brand_name}</span>
									<h3>{news.name}</h3>
									<p>{news.price} kr</p>
								</div>
								<div onClick={() => handleAddToCart(news)} className='buy-btn'>
									<LiaShoppingBagSolid className='buy-btn__icon' />
								</div>
							</li>
						</div>
					))}
				</ul>
			</div>
		</>
	);
};