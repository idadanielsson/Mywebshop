import { Link } from 'react-router-dom';
import { IProduct } from '../../../models/IProduct';

const ProductList = ({ products }: { products: IProduct[] }) => {
	return (
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
							<p>{product.price} kr</p>
						</div>
					</li>
				</div>
			))}
		</ul>
	);
};

export default ProductList;
