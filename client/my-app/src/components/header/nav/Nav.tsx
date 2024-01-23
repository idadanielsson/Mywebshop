import { Link } from 'react-router-dom';
import '../nav/Nav.scss';
import { useState } from 'react';
import { Cart } from '../cart/Cart';
import { CartItem } from '../../../models/CartItem';
import { CartBig } from '../cart/CartBig';

interface INavProps {
	cart: CartItem[];
	plusProduct(p: CartItem): void;
	minusProduct(p: CartItem, i: number): void;
	cartTotalPrice: number;
}

export const Nav = (props: INavProps) => {
	const [shopActive, setShopActive] = useState(false);

	const toggleCart = () => {
		setShopActive(!shopActive);
	};
	const closeCart = () => {
		setShopActive(false);
	};

	return (
		<>
			<div className='small-wrapper'>
				<span>Fri frakt vid köp över 499:-</span>
			</div>
			<div className='navcontainer'>
				<ul className='navlist'>
					<li>
						<Link className='navlinks' to='/'>
							Hem
						</Link>
					</li>
					<li>
						<Link className='navlinks' to='/products'>
							Shop
						</Link>
					</li>

					<li>
						<Link className='navlinks' to='/about'>
							Om oss
						</Link>
					</li>
					<li>
						<Link className='navlinks' to='/faq'>
							FAQ
						</Link>
					</li>
					<li className='navlinks'>
						<Link className='navlinks' to='/contact'>
							Kontakt
						</Link>
					</li>
				</ul>
				<Cart
					closeCartFunction={closeCart}
					openCartFunction={toggleCart}
					cartclick={shopActive}
					cart={props.cart}
				/>
			</div>
			<CartBig
				cartTotalPrice={props.cartTotalPrice}
				minusProduct={props.minusProduct}
				plusProduct={props.plusProduct}
				closeCartFunction={closeCart}
				cartclick={shopActive}
				cart={props.cart}
			/>
		</>
	);
};
