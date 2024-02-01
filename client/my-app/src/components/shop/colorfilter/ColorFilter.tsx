import { useEffect, useState } from 'react';
import './ColorFilter.scss';
import { IColor } from '../../../models/IColor';
import { useNavigate } from 'react-router-dom';
import { getColors } from '../../../services/colorServices';

export const ColorFilter = () => {
	const [colors, setColors] = useState<IColor[]>([]);
	const [selectedColorId, setSelectedColorId] = useState<number | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		getColors().then((result: IColor[]) => {
			setColors(result);
		});
	}, []);

	function handleColorClick(colorId: number) {
		setSelectedColorId(colorId);
		navigate(`/shop/color/${colorId}`);
	}

	return (
		<div className='color-filter'>
			<select
				className='color-filter__select'
				value={selectedColorId || ''}
				onChange={(e) => handleColorClick(Number(e.target.value))}
			>
				<option value=''>Filtrera efter färg</option>
				{colors.map((color) => (
					<option key={color.id} value={color.id}>
						{color.name}
					</option>
				))}
			</select>
		</div>
	);
};
