import axios from 'axios';
import { ApiResponse, IProduct } from '../models/IProduct';
import { IColor, IColors } from '../models/IColor';

export const getColors = async (): Promise<IColor[]> => {
	try {
		const response = await axios.get<IColors>(
			'http://localhost:8888/mywebshop/server/index.php?action=colors'
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getColorById = async (id: number): Promise<IColor[]> => {
	try {
		const response = await axios.get<IColors>(
			`http://localhost:8888/mywebshop/server/index.php?action=colors-id&id=${id}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getProductsByColor = async (id: number): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-color&id=${id}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};
