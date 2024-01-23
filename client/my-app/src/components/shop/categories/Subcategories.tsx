import { useEffect, useState } from 'react';
import { getSubCategories } from '../../../services/categoryServices';
import { useParams } from 'react-router-dom';
import { ISubcategories, ISubcategory } from '../../../models/ICategory';
import './Categories.scss';

const Subcategories = () => {
	const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
	const { id } = useParams();

	useEffect(() => {
		getSubCategories()
			.then((allSubcategories) => {
				const filteredSubcategories = allSubcategories.filter(
					(subcat) => subcat.fk_categoryId === Number(id)
				);
				setSubcategories(filteredSubcategories);
			})
			.catch(console.error);
	}, [id]);

	return (
		<div className='categories'>
			<ul className='categories__list'>
				{subcategories.map((subcat) => (
					<li className='categories__item' key={subcat.id}>
						<a href='#'>{subcat.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subcategories;
