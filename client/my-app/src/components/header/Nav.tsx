import { Link } from 'react-router-dom';
import '../header/Nav.scss';
import { useState } from 'react';

// interface INavProps {
// 	cart: CartItem[];
// 	plusProduct(p: CartItem): void;
// 	minusProduct(p: CartItem, i: number): void;
// 	cartTotalPrice: number;
// }

export const Nav = () => {
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
					<li className='navlinks'>Kontakt</li>

					<li>
						<Link className='navlinks' to='/about'>
							Om oss
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
