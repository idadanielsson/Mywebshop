import { Link } from 'react-router-dom';
import './Home.scss';
import Products from '../products/Products';
import { Nav } from '../header/Nav';

export const Home = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<div className='hero'>
				<h3 className='hero__text'>Hem & inredning</h3>
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
