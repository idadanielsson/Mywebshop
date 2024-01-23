import React, { useEffect, useState } from 'react';
import './Categories.scss';
import {
	getCategories,
	getSubCategories,
} from '../../../services/categoryServices';
import { ICategory, ISubcategory } from '../../../models/ICategory';
import { Link } from 'react-router-dom';

const Categories = () => {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);

	useEffect(() => {
		Promise.all([getCategories(), getSubCategories()])
			.then(([categoryData, subcategoryData]) => {
				setCategories(categoryData);
				setSubcategories(subcategoryData);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error:', err);
				setError('An error occurred while fetching data');
				setLoading(false);
			});
	}, []);

	const toggleSubcategories = (categoryId: number) => {
		setSelectedCategoryId(
			selectedCategoryId === categoryId ? null : categoryId
		);
	};

	if (loading) return <div>Loading data...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<>
			<div className='category-title'>
				<h1>Shop by category</h1>
			</div>
			<div className='categories'>
				<ul className='categories__list'>
					{categories.map((category) => (
						<li key={category.id} className='categories__item'>
							<Link to={`/category/${category.id}/subcategories`}>
								{category.name}
							</Link>
							{selectedCategoryId === category.id && (
								<ul className='subcategories__list'>
									{subcategories
										.filter((subcat) => subcat.fk_categoryId === category.id)
										.map((subcategory) => (
											<li key={subcategory.id}>{subcategory.name}</li>
										))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Categories;
