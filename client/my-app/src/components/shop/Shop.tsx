import Categories from './categories/Categories';

import { Outlet } from 'react-router-dom';

import Products from './products/Products';

const Shop = () => {
	return (
		<div>
			<Categories />

			<Outlet />
		</div>
	);
};

export default Shop;
