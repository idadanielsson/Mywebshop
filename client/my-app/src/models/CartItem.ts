import { IColor, IProduct, ISize } from './IProduct';

export class CartItem {
	public price: number;

	constructor(
		public product: IProduct,
		public selectedSize: ISize,
		public selectedColor: IColor,
		public amount: number
	) {
		const selectedSizeWithPrices = product.sizes.find(
			(size) => size.id === selectedSize.id
		);

		const priceInfo = selectedSizeWithPrices?.prices.find(
			(p) => p.color_id === selectedColor.id
		);

		this.price = priceInfo ? priceInfo.price : 0;
	}
}
