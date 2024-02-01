import { useContext, useState } from 'react';
import './Checkout.scss';
import { MyContext } from '../../App';
import React from 'react';
import { Confirmation } from './confirmation/Confirmation';

export const Checkout = () => {
	const context = useContext(MyContext);
	const [purchaseCompleted, setPurchaseCompleted] = useState(false);

	if (!context) {
		return <div>Kunde inte ladda contexten</div>;
	}
	const { cart, minusProduct, plusProduct, cartTotalPrice, clearCart } =
		context;

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setPurchaseCompleted(true);
		// clearCart();
	};

	return (
		<div className='checkout'>
			{purchaseCompleted ? (
				<>
					<Confirmation />
				</>
			) : (
				<>
					<h2 className='checkout__title'>Kundvagn</h2>

					<ul className='checkout__list'>
						{cart.map((item, index) => (
							<li className='checkout__item' key={index}>
								<div className='checkout__img'>
									<img src={item.product.urls[0]} alt='' />
								</div>
								<span className='item__name'>{item.product.name}</span>
								<span className='item__price'>{item.price}:-</span>
								<div className='item__controls'>
									<button
										className='item__minus'
										onClick={() => minusProduct(item, index)}
									>
										−
									</button>
									<span className='item__quantity'>{item.amount}</span>
									<button
										className='item__plus'
										onClick={() => plusProduct(item)}
									>
										+
									</button>
								</div>
							</li>
						))}
					</ul>

					<form className='checkout__form' onSubmit={handleFormSubmit}>
						<h3 className='form__title'>Leveransinformation</h3>
						<input
							className='form__input'
							type='text'
							placeholder='Namn'
							required
						/>
						<input
							className='form__input'
							type='text'
							placeholder='E-post'
							required
						/>
						<input
							className='form__input'
							type='text'
							placeholder='Adress'
							required
						/>
						<div className='form__city'>
							<input
								className='form__input'
								type='text'
								placeholder='Postnummer'
								required
							/>
							<input
								className='form__input'
								type='text'
								placeholder='Stad'
								required
							/>
						</div>
						<select className='form__select' required>
							<option value=''>Välj fraktmetod</option>
							<option value='standard'>Standardfrakt</option>
							<option value='express'>Expressfrakt</option>
						</select>
						<select className='form__select' required>
							<option value=''>Välj betalmetod</option>
							<option value='credit_card'>Kreditkort</option>
							<option value='paypal'>PayPal</option>
						</select>
						<div className='checkout-submit'>
							<p className='checkout__price'>
								Totalt pris: {cartTotalPrice} kr
							</p>

							<button className='form__submit' type='submit'>
								Slutför köp
							</button>
						</div>
					</form>
				</>
			)}
		</div>
	);
};
