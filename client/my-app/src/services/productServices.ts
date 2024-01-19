import axios from 'axios';
import { ApiResponse, IProduct } from '../models/IProduct';

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await axios.get<ApiResponse>( // Använd det nya gränssnittet här
			'http://localhost:8888/mywebshop/server/index.php?action=products'
		);
		console.log('Svar mottaget:', response.data.result); // Logga datan från 'result'
		return response.data.result;
	} catch (error) {
		console.error('Ett fel uppstod:', error); // Logga eventuellt fel
		throw error;
	}
};
