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
	img: string;
	price: number;
	date_created: string;
	sizes: ISize[];
	colors: IColor[];
}

export interface ApiResponse {
	result: IProduct[];
}

export interface IProductResponse {
	product: IProduct;
}

export interface IColor {
	id: number;
	name: string;
}

export interface ISize {
	id: number;
	name: string;
	prices: IPrice[];
}

export interface IPrice {
	color_id: number;
	color_name: string;
	price: number;
}
