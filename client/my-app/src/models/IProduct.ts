export interface IProduct {
	id: number;
	name: string;
	description: string;
	short_description: string;
	fk_categoryId: number;
	fk_subcategoryId: number;
	fk_brandId: number;
	url: string;
	brand_name: string;
	price: number;
}

export interface ApiResponse {
	result: IProduct[];
}

export interface IProductResponse {
	product: IProduct;
}
