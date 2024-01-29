import { useContext, useEffect, useState } from 'react';
import { IColor, IProduct, ISize } from '../../../models/IProduct';
import { getProductById, getProducts } from '../../../services/productServices';
import { useOutletContext, useParams } from 'react-router-dom';
import './ProductDetails.scss';
import { MyContext } from '../../../App';
import { CartItem } from '../../../models/CartItem';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const [selectedSize, setSelectedSize] = useState<ISize>();
	const [selectedColor, setSelectedColor] = useState<IColor>();
	const { id } = useParams();
	const context = useContext(MyContext);

	let newId = Number(id);

	useEffect(() => {
		getProductById(newId).then((result) => {
			setProduct(result);

			if (result) {
				setSelectedSize(
					result.sizes.find((s) => s.name === 'One size') || result.sizes[0]
				);
				setSelectedColor(result.colors[0]);
			}
		});
	}, [newId]);

	const getCurrentPrice = () => {
		if (selectedSize && selectedColor) {
			const priceInfo = selectedSize.prices.find(
				(p) => p.color_id === selectedColor.id
			);
			return priceInfo ? priceInfo.price : 'Pris ej tillgängligt';
		}
		return 'Välj storlek och färg';
	};

	const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const sizeId = Number(event.target.value);
		const selectedSize = product?.sizes.find((s) => s.id === sizeId);
		if (selectedSize) {
			setSelectedSize(selectedSize);
		}
	};

	const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const colorId = Number(event.target.value);
		const selectedColor = product?.colors.find((c) => c.id === colorId);
		if (selectedColor) {
			setSelectedColor(selectedColor);
		}
	};
	const handleAddToCart = () => {
		if (product && selectedSize && selectedColor && context) {
			const newItem = new CartItem(
				product,
				selectedSize,
				selectedColor,

				1
			);
			context.addProductToCart(newItem);
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
					<p>{getCurrentPrice()} kr</p>
					<p>{product?.price}</p>
				</div>
				<div className='product-details-wrapper-2__size'>
					{product?.sizes && product.sizes.length > 0 && (
						<select onChange={handleSizeChange}>
							{product.sizes.map((size) => (
								<option key={size.id} value={size.id}>
									{size.name}
								</option>
							))}
						</select>
					)}
				</div>

				<div className='product-details-wrapper-2__color'>
					{product?.colors && product.colors.length > 0 && (
						<select onChange={handleColorChange}>
							{product.colors.map((color) => (
								<option key={color.id} value={color.id}>
									{color.name}
								</option>
							))}
						</select>
					)}
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
