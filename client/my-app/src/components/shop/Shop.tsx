import Categories from './categories/Categories';

import { Outlet, useOutletContext } from 'react-router-dom';

import Products from './products/Products';
import { MyContext } from '../../App';

const Shop = () => {
	return (
		<div>
			<Categories />

			<Outlet />
		</div>
	);
};

export default Shop;
