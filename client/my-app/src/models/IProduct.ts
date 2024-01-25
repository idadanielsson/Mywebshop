export interface IProduct {
	id: number;
	name: string;
	description: string;
	short_description: string;
	fk_categoryId: number;
	fk_subcategoryId: number;
	fk_brandId: number;
	url: string;
	urls: string[];
	brand_name: string;
	price: number;
	img: string;
	date_created: string;
	isRed: boolean;
}

export interface ApiResponse {
	result: IProduct[];
}

export interface IProductResponse {
	product: IProduct;
}
