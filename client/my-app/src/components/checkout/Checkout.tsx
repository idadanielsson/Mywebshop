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
		<div>
			<h2>Kundvagn</h2>
			<p>Totalt pris: {cartTotalPrice}</p>
		</div>
	);
};
