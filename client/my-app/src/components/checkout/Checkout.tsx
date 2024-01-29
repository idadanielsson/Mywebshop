import { useContext } from 'react';
import './Checkout.scss';
import { MyContext } from '../../App';

export const Checkout = () => {
	const context = useContext(MyContext);

	if (!context) {
		return <div>Kunde inte ladda contexten</div>;
	}
	const { cart, minusProduct, plusProduct, cartTotalPrice } = context;

	return (
		<div className='checkout'>
			<h2 className='checkout__title'>Kundvagn</h2>
			<p className='checkout__price'>Totalt pris: {cartTotalPrice}</p>
		</div>
	);
};
