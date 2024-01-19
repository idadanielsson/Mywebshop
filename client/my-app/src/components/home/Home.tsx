import { Link } from 'react-router-dom';
import './Home.scss';
import Products from '../products/Products';

export const Home = () => {
	return (
		<>
			<div className='hero'>
				<p className='hero__text'></p>
				<Link to='/shop'>
					<button className='hero__button' id='indexbutton'>
						Köp nu
					</button>
				</Link>
			</div>
			<div className='shop'>
				<Products></Products>
			</div>
		</>
	);
};
