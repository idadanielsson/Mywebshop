import React, { useEffect, useState } from 'react';
import './Categories.scss';
import { getCategories } from '../../../services/categoryServices';
import { ICategory } from '../../../models/ICategory';
import { useNavigate } from 'react-router-dom';
import Subcategories from './Subcategories';

const Categories = () => {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);
	const navigate = useNavigate();

	useEffect(() => {
		getCategories()
			.then((result: ICategory[]) => {
				setCategories(result);
				setLoading(false);
			})
			.catch((err: Error) => {
				console.error('Error:', err);
				setError('An error occurred while fetching data');
				setLoading(false);
			});
	}, []);

	function handleCategoryClick(categoryId: number) {
		setSelectedCategoryId(categoryId);
		navigate(`/shop/category/${categoryId}`);
	}

	if (loading) return <div>Loading data...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<>
			<div className='categories'>
				<h1>Shop by category</h1>
				<ul className='categories__list'>
					{categories.map((category: ICategory) => (
						<li key={category.id} className='categories__item'>
							<button onClick={() => handleCategoryClick(category.id)}>
								{category.name}
							</button>
							{selectedCategoryId === category.id && (
								<Subcategories categoryId={category.id} />
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Categories;
