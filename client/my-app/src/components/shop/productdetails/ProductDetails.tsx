import { useEffect, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import { getProductById, getProducts } from '../../../services/productServices';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const { id } = useParams();

	let newId = Number(id);

	useEffect(() => {
		getProductById(newId).then((result) => {
			setProduct(result);
		});
	}, [newId]);

	return (
		<div className='product-details'>
			<h3>{product?.name}</h3>
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
	);
};

export default ProductDetails;
