import axios from 'axios';
import { ICategories, ICategory } from '../models/ICategory';

export const getCategories = async (): Promise<ICategory[]> => {
	try {
		const response = await axios.get<ICategories>(
			'http://localhost:8888/mywebshop/server/index.php?action=categories'
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};
