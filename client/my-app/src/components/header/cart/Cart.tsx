import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CartItem } from '../../../models/CartItem';
import { motion } from 'framer-motion';
import '../cart/Cart.scss';

interface ICartProps {
	cart: CartItem[];
	cartclick: Boolean;
	openCartFunction(): void;
	closeCartFunction(): void;
}

export const Cart = (props: ICartProps) => {
	const cartQuantity = props.cart.reduce(
		(quantity, item) => item.amount + quantity,
		0
	);

	return (
		<div className='cartsmall' onClick={props.openCartFunction}>
			<LiaShoppingBagSolid className='cartsmall__icon' />

			<div className='counterwrapper'>
				{props.cart.length > 0 && (
					<motion.p
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						className='counter'
					>
						{cartQuantity}
					</motion.p>
				)}
			</div>
		</div>
	);
};
