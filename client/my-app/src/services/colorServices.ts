import axios from 'axios';
import { ApiResponse, IProduct } from '../models/IProduct';
import { IColor, IColors } from '../models/IColor';

export const getColors = async (): Promise<IColor[]> => {
	try {
		const response = await axios.get<IColors>(
			'http://localhost:8888/mywebshop/server/index.php?action=colors'
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getColorById = async (id: number): Promise<IColor[]> => {
	try {
		console.log(id);
		const response = await axios.get<IColors>(
			`http://localhost:8888/mywebshop/server/index.php?action=colors-id&id=${id}`
		);
		console.log('Svar mottaget färger:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getProductsByColor = async (id: number): Promise<IProduct[]> => {
	try {
		console.log(id);
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-color&id=${id}`
		);
		console.log('Svar mottaget färger:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};
