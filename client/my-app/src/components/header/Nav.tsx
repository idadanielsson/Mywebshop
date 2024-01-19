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
		<div className='headercontainer'>
			<div className='navcontainer'>
				<ul className='navlist'>
					<li>
						<Link className='navlinks' to='/'>
							Hem
						</Link>
					</li>
					<li>
						<Link className='navlinks' to='/shop'>
							Shop
						</Link>
					</li>
					<li className='navlinks'>Kontakt</li>

					<li>
						<Link className='navlinks' to='/faq'>
							FAQ
						</Link>
					</li>
				</ul>
				<div></div>
			</div>
		</div>
	);
};
