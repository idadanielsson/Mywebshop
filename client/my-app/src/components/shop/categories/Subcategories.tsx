import { useEffect, useState } from 'react';
import { getSubCategories } from '../../../services/categoryServices';
import { Link } from 'react-router-dom';
import { ISubcategory } from '../../../models/ICategory';
import './Categories.scss';

interface SubcategoriesProps {
	categoryId: number;
}

const Subcategories: React.FC<SubcategoriesProps> = ({ categoryId }) => {
	const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);

	useEffect(() => {
		getSubCategories()
			.then((allSubcategories) => {
				const filteredSubcategories = allSubcategories.filter(
					(subcat) => subcat.fk_categoryId === categoryId
				);
				setSubcategories(filteredSubcategories);
			})
			.catch(console.error);
	}, [categoryId]);

	return (
		<div className='subcategories'>
			<ul className='subcategories__list'>
				{subcategories.map((subcat) => (
					<li className='subcategories__item' key={subcat.id}>
						<Link
							key={subcat.id}
							to={`/shop/category/${categoryId}/subcategory/${subcat.id}`}
						>
							{subcat.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subcategories;
