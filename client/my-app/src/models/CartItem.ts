import { IColorWithPrice, IProduct, ISize } from './IProduct';

export class CartItem {
	public price: number;

	constructor(
		public product: IProduct,
		public selectedSize: ISize,
		public selectedColor: IColorWithPrice,
		public amount: number
	) {
		const selectedSizeWithColors = product.sizes.find(
			(size) => size.id === selectedSize.id
		);

		const colorInfo = selectedSizeWithColors?.colors.find(
			(color) => color.id === selectedColor.id
		);

		if (!colorInfo) {
			this.price = 0;
		} else {
			this.price = colorInfo.price;
		}
	}
}
