import { useEffect, useState } from 'react';
import { getSubCategories } from '../../../services/categoryServices';
import { Link, useParams } from 'react-router-dom';
import { ISubcategories, ISubcategory } from '../../../models/ICategory';
import './Categories.scss';

interface SubcategoriesProps {
	categoryId: number; // Definiera categoryId som en prop
}

const Subcategories: React.FC<SubcategoriesProps> = ({ categoryId }) => {
	const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
	const { id } = useParams();

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
		<div className='categories'>
			<ul className='categories__list'>
				{subcategories.map((subcat) => (
					<li className='categories__item' key={subcat.id}>
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
