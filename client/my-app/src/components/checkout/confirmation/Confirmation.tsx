import { GiPartyPopper } from 'react-icons/gi';
import './Confirmation.scss';
import { useContext } from 'react';
import { MyContext } from '../../../App';
import { getFromLs } from '../../../services/localStorage';
import { CartItem } from '../../../models/CartItem';

export const Confirmation = () => {
	const cartFromLocalStorage = getFromLs();
	const context = useContext(MyContext);

	return (
		<div className='confirmation'>
			<div className='confirmation__heading'>
				<h1>
					Tack för ditt köp! <GiPartyPopper className='confirmation__icon' />
				</h1>
			</div>
			<h2 className='confirmation__title'>Orderbekräftelse</h2>
			{cartFromLocalStorage.length === 0 ? (
				<p className='confirmation__text'>Din varukorg är tom.</p>
			) : (
				<ul className='confirmation__list'>
					{cartFromLocalStorage.map((item: CartItem, index: number) => (
						<li className='confirmation__item' key={index}>
							<div className='confirmation__img'>
								<img src={item.product.urls[0]} alt='' />
							</div>
							<span className='confirmation__name'>{item.product.name}</span>
							<span className='confirmation__price'>{item.price} kr</span>
							<span className='confirmation__amount'>Antal: {item.amount}</span>
						</li>
					))}
				</ul>
			)}
			<p className='confirmation__total'>
				Totalsumma: {context?.cartTotalPrice} kr
			</p>
		</div>
	);
};
