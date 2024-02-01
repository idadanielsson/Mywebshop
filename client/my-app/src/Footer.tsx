import { Link } from 'react-router-dom';
import './components/home/Home.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer__title'>
					<h3>Skandinavisk Design</h3>
				</div>
				<div className='footer__wrapper'>
					<div className='footer-wrapper'>
						<h6 className='footer-wrapper__title'>Företagsinformation</h6>
						<ul className='footer-wrapper__list'>
							<li className='footer-wrapper__item'>
								<Link to={'terms'} className='footer-link'>
									Villkor
								</Link>
							</li>

							<li className='footer-wrapper__item'>
								<Link to={'faq'} className='footer-link'>
									FAQ
								</Link>
							</li>
							<li className='footer-wrapper__item'>
								<Link to={'contact'} className='footer-link'>
									Kontaka oss
								</Link>
							</li>
						</ul>
					</div>

					<div className='footer-wrapper'>
						<h6 className='footer-wrapper__title'>Om Skandinavisk Design</h6>
						<ul className='footer-wrapper__list'>
							<li className='footer-wrapper__item'>
								<Link to={''} className='footer-link'>
									Om oss
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-social'>
					<ul className='footer-social__list'>
						<li className='footer-social__item'>
							<a href='' className='footer-social__link'>
								<FaFacebookF />
							</a>
						</li>
						<li className='footer-social__item'>
							<a href='' className='footer-social__link'>
								<FaInstagram />
							</a>
						</li>
						<li className='footer-social__item'>
							<a href='' className='footer-social__link'>
								<FaPinterestSquare />
							</a>
						</li>
						<li className='footer-social__item'>
							<a href='' className='footer-social__link'>
								<FaTiktok />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
