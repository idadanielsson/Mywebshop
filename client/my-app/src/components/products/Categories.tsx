import React, { useEffect, useState } from 'react';
import '../products/Categories.scss';
import { getCategories } from '../../services/categoryServices';
import { ICategory } from '../../models/ICategory';

const Categories = () => {
	const [data, setData] = useState<ICategory[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		getCategories()
			.then((result) => {
				setData(result);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error:', err);
				setError('An error occurred while fetching data');
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading data...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<>
			<div className='category-title'>
				<h1>Shop by category</h1>
			</div>
			<div className='categories'>
				<ul className='categories__list'>
					{data.map((category: ICategory) => (
						<li key={category.id} className='categories__item'>
							<a href='#'>{category.name}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Categories;
