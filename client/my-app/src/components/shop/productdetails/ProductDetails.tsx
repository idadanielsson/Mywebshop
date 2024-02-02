import { useContext, useEffect, useState } from 'react';
import { IColorWithPrice, IProduct, ISize } from '../../../models/IProduct';
import { getProductById } from '../../../services/productServices';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';
import { MyContext } from '../../../App';
import { CartItem } from '../../../models/CartItem';
import { Carousel } from 'react-responsive-carousel';

const ProductDetails = () => {
	const [product, setProduct] = useState<IProduct>();
	const [selectedSize, setSelectedSize] = useState<ISize>();
	const [selectedColor, setSelectedColor] = useState<IColorWithPrice>();
	const { id } = useParams();
	const context = useContext(MyContext);

	let newId = Number(id);

	useEffect(() => {
		getProductById(newId).then((result) => {
			setProduct(result);

			if (result) {
				const initialSize =
					result.sizes.find((s) => s.name === 'One size') || result.sizes[0];
				setSelectedSize(initialSize);
				if (initialSize && initialSize.colors.length > 0) {
					setSelectedColor(initialSize.colors[0]);
				}
			}
		});
	}, [newId]);

	const getCurrentPrice = () => {
		return selectedColor ? selectedColor.price : 'Välj storlek och färg';
	};

	const handleAddToCart = () => {
		if (product && selectedSize && selectedColor) {
			const newItem = new CartItem(product, selectedSize, selectedColor, 1);
			context!.addProductToCart(newItem);
		}
	};

	useEffect(() => {}, [selectedColor]);

	const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const sizeId = Number(event.target.value);
		const newSize = product?.sizes.find((s) => s.id === sizeId);
		if (newSize) {
			setSelectedSize(newSize);
			if (newSize.colors && newSize.colors.length > 0) {
				setSelectedColor(newSize.colors[0]);
			} else {
				setSelectedColor(undefined);
			}
		}
	};

	const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const colorId = Number(event.target.value);
		const newColor = selectedSize?.colors.find((c) => c.id === colorId);
		if (newColor) {
			setSelectedColor(newColor);
		}
	};

	return (
		<div>
			<div className='product-details'>
				<div className='product-details-wrapper'>
					<div className='product-details__img'>
						<Carousel showThumbs={false} showStatus={false}>
							{selectedColor?.images.map((url, index) => (
								<div key={index}>
									<img src={url} alt={`Bild ${index + 1}`} />
								</div>
							))}
						</Carousel>
					</div>
				</div>
				<div className='product-details-wrapper-2'>
					<div className='product-details-wrapper-2__title'>
						<h3>{product?.name}</h3>
						<p>{getCurrentPrice()} kr</p>
						<p>{product?.price}</p>
					</div>

					<section className='product-details-variants'>
						<div>
							<div className='product-details-variants__size'>
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

							<div className='product-details-variants__color'>
								{selectedSize?.colors && selectedSize.colors.length > 0 && (
									<select onChange={handleColorChange}>
										{selectedSize.colors.map((color) => (
											<option key={color.id} value={color.id}>
												{color.name}
											</option>
										))}
									</select>
								)}
							</div>
						</div>

						<div className='product-details-wrapper-2__add'>
							<button onClick={handleAddToCart}>Lägg i varukorg</button>
						</div>
						<section className='product-details-info'>
							<p>{product?.description}</p>
						</section>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
