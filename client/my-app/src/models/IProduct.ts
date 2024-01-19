export interface IProduct {
	id: number;
	name: string;
	description: string;
	short_description: string;
	fk_categoryId: number;
	fk_subcategoryId: number;
	fk_brandId: number;
}

export interface ApiResponse {
	result: IProduct[];
}
