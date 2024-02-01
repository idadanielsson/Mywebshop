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
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getCategoryById = async (id: number): Promise<ICategory[]> => {
	try {
		const response = await axios.get<ICategories>(
			`http://localhost:8888/mywebshop/server/index.php?action=categories-id&id=${id}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getSubCategories = async (): Promise<ISubcategory[]> => {
	try {
		const response = await axios.get<ISubcategories>(
			'http://localhost:8888/mywebshop/server/index.php?action=subcategories'
		);
		return response.data.result;
	} catch (error) {
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
		return response.data.result;
	} catch (error) {
		throw error;
	}
};
