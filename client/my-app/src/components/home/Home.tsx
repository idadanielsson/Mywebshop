import { Link, Outlet } from 'react-router-dom';
import './Home.scss';
import { News } from '../shop/news/News';

export const Home = () => {
	return (
		<>
			<div className='overlay'>
				<div className='hero'>
					<h3 className='hero__text'>Hem & inredning</h3>
					<Link to='/shop'>
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

						<Link to={'/shop/category/1'}>Upptäck här</Link>
					</div>
				</section>

				<div className='news'>
					<News />
				</div>

				<div>
					<Outlet />
				</div>
			</div>
		</>
	);
};
