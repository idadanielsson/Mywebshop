import axios from 'axios';
import {
	ICategories,
	ICategory,
	ISubcategories,
	ISubcategory,
} from '../models/ICategory';

export const getCategories = async (): Promise<ICategory[]> => {
	try {
		const response = await axios.get<ICategories>(
			'http://localhost:8888/mywebshop/server/index.php?action=categories'
		);
		console.log('Svar mottaget kategorier:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getCategoryById = async (id: number): Promise<ICategory[]> => {
	try {
		const response = await axios.get<ICategories>(
			`http://localhost:8888/mywebshop/server/index.php?action=categories-id&id=${id}`
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getSubCategories = async (): Promise<ISubcategory[]> => {
	try {
		const response = await axios.get<ISubcategories>(
			'http://localhost:8888/mywebshop/server/index.php?action=subcategories'
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getSubCategoryById = async (
	id: number
): Promise<ISubcategory[]> => {
	try {
		const response = await axios.get<ISubcategories>(
			`http://localhost:8888/mywebshop/server/index.php?action=subcategories-id&id=${id}`
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};
