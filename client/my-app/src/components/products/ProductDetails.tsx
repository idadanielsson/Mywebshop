import { useEffect, useState } from 'react';
import { IProduct } from '../../models/IProduct';
import { getProductById, getProducts } from '../../services/productServices';
import { useParams } from 'react-router-dom';
import { url } from 'inspector';
import '../products/ProductDetails.scss';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const { id } = useParams<{ id: string }>();

	let newId = Number(id);

	const urls = Array.isArray(product?.urls) ? product?.urls : [product?.urls];
	console.log(urls);

	useEffect(() => {
		getProductById(newId)
			.then((result) => {
				setProduct(result);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Fel:', err);
				setError('Ett fel uppstod vid hämtning av data');
				setLoading(false);
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
