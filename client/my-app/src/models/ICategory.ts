export interface ICategory {
	id: number;
	name: string;
	subcategories: ISubcategory[];
}

export interface ISubcategory {
	id: number;
	name: string;
	fk_categoryId: number;
}

export interface ICategories {
	result: ICategory[];
}

export interface ISubcategories {
	result: ISubcategory[];
}
