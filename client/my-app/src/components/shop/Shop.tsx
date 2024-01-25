import Categories from './categories/Categories';
import { Outlet } from 'react-router-dom';
import { ColorFilter } from './colorfilter/ColorFilter';
import { useState } from 'react';

const Shop = () => {
	const [selectedColor, setSelectedColor] = useState<number | null>(null);

	const handleColorChange = (colorId: number | null) => {
		setSelectedColor(colorId);
	};

	return (
		<>
			<Categories />
			<Outlet />
		</>
	);
};

export default Shop;
