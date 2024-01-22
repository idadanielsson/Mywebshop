import { Link } from 'react-router-dom';
import './Home.scss';
import Products from '../products/Products';
import { Nav } from '../header/Nav';
import Categories from '../products/Categories';
import { Footer } from '../../Footer';

export const Home = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<div className='hero'>
				<h3 className='hero__text'>Hem & inredning</h3>
				<Link to='/products'>
					<button className='hero__button' id='indexbutton'>
						Köp nu
					</button>
				</Link>
			</div>
			<section className='sale'>
				<div className='sale__img-3'>
					<p>Final sale</p>
					<h3>Up to 70% off</h3>
					<p>on selected items</p>
				</div>
				<div className='sale__img-2'>
					<h3>Dukning & servering</h3>

					<a href='#'>Upptäck här</a>
				</div>
			</section>
			<div className='category'>
				<Categories></Categories>
			</div>
			<div className='shop'>
				<Products></Products>
			</div>
			<Footer />
		</>
	);
};
