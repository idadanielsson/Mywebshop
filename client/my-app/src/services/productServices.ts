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
		console.log('Svar mottaget en produkt:', response.data.product);
		return response.data.product;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getProductsByCategory = async (
	id: number
): Promise<IProduct[]> => {
	try {
		console.log(id);
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-category&id=${id}`
		);
		console.log('Svar mottaget id:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};

export const getProductsBySubcategory = async (
	id: number
): Promise<IProduct[]> => {
	try {
		console.log(id);
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-subcategory&id=${id}`
		);
		console.log('Svar mottaget underkategori:', response.data.result);
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error);
		throw error;
	}
};
