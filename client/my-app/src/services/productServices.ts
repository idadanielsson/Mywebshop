import axios from 'axios';
import { ApiResponse, IProduct, IProductResponse } from '../models/IProduct';

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			'http://localhost:8888/mywebshop/server/index.php?action=products'
		);
		console.log('Svar mottaget:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getProductById = async (id: number): Promise<IProduct> => {
	try {
		const response = await axios.get<IProductResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-id&id=${id}`
		);
		console.log('Svar mottaget:', response.data.product);
		return response.data.product;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};
