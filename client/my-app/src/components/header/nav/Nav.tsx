import { Link, useNavigate } from 'react-router-dom';
import '../nav/Nav.scss';
import { useState } from 'react';
import { Cart } from '../cart/Cart';
import { CartItem } from '../../../models/CartItem';
import { CartBig } from '../cart/CartBig';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

interface INavProps {
	cart: CartItem[];
	cartclick: boolean;
	closeCartFunction(): void;
	plusProduct(p: CartItem): void;
	minusProduct(p: CartItem, i: number): void;
	cartTotalPrice: number;
}

export const Nav = (props: INavProps) => {
	const [shopActive, setShopActive] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
		setSearchTerm('');
	};

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
				<div className='list-wrapper'>
					<button className='hamburger' onClick={toggleMenu}>
						<RxHamburgerMenu />
					</button>
					<ul className={`navlist ${isMenuOpen ? 'active' : ''}`}>
						<li>
							<Link className='navlinks-home' to='/'>
								Skandinavisk Design
							</Link>
						</li>
						<li>
							<Link className='navlinks' to='/shop'>
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
				</div>

				<div className='nav-end'>
					<form onSubmit={handleSubmit} className='search'>
						<IoSearchOutline className='search__icon' />

						<input
							className='search__input'
							type='text'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder='Sök efter produkter'
						/>
					</form>
					<Cart
						closeCartFunction={closeCart}
						openCartFunction={toggleCart}
						cartclick={shopActive}
						cart={props.cart}
					/>
				</div>
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
