import { useEffect, useState } from 'react';
import { IProduct } from '../../models/IProduct';
import { getProductById, getProducts } from '../../services/productServices';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const { id } = useParams();

	let newId = Number(id);

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
	}, [newId]); // Se till att reagera på förändringar i id

	// Visa produktens information här
	return (
		<div className='product-details'>
			{/* <div className='product-img'>
				<img src={product.url} alt='product-img' />
			</div> */}

			<h3>{product?.name}</h3>
		</div>
	);
};

export default ProductDetails;
