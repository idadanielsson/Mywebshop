import { IProduct } from './IProduct';

export class CartItem {
	constructor(public product: IProduct, public amount: number) {}
}
