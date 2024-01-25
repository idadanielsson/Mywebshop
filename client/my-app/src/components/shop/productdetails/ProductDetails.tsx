import { useContext, useEffect, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import { getProductById, getProducts } from '../../../services/productServices';
import { useOutletContext, useParams } from 'react-router-dom';
import './ProductDetails.scss';
import { MyContext } from '../../../App';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const { id } = useParams();
	const context = useContext(MyContext);

	let newId = Number(id);

	useEffect(() => {
		getProductById(newId).then((result) => {
			setProduct(result);
		});
	}, [newId]);

	const handleAddToCart = () => {
		if (product && context) {
			context.addProductToCart(product);
		}
	};

	return (
		<div className='product-details'>
			<div className='product-details-wrapper'>
				<div className='product-details__primaryimg'>
					<img src={product?.img} alt='' />
				</div>
				<div className='product-details__img'>
					{product?.urls &&
						product.urls.map((url, index) => (
							<img key={index} src={url} alt={`Image ${index + 1}`} />
						))}
				</div>
			</div>
			<div className='product-details-wrapper-2'>
				<div className='product-details-wrapper-2__title'>
					<h3>{product?.name}</h3>
					<p>{product?.price}</p>
				</div>
				<div className='product-details-wrapper-2__size'>
					<button>Storlek</button>
				</div>
				<span>beräknad leveranstid: 1-3 dagar</span>
				<div className='product-details-wrapper-2__description'>
					<p>{product?.short_description}</p>
				</div>
				<div className='product-details-wrapper-2__add'>
					<button onClick={handleAddToCart}>Lägg i varukorg</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
