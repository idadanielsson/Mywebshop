import axios from 'axios';
import { ApiResponse, IProduct, IProductResponse } from '../models/IProduct';

// GET requests to server

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			'http://localhost:8888/mywebshop/server/index.php?action=products'
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getProductById = async (id: number): Promise<IProduct> => {
	try {
		const response = await axios.get<IProductResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-id&id=${id}`
		);
		return {
			...response.data.product,
			sizes: response.data.product.sizes,
			colors: response.data.product.colors,
		};
	} catch (error) {
		throw error;
	}
};

export const getProductNews = async (): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			'http://localhost:8888/mywebshop/server/index.php?action=products-news'
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getProductsByCategory = async (
	id: number
): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-category&id=${id}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const getProductsBySubcategory = async (
	id: number
): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=products-by-subcategory&id=${id}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};

export const searchProducts = async (
	searchTerm: string
): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>(
			`http://localhost:8888/mywebshop/server/index.php?action=search-products&term=${searchTerm}`
		);
		return response.data.result;
	} catch (error) {
		throw error;
	}
};
