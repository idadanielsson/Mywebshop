import { IColor, IColorWithPrice, IProduct, ISize } from './IProduct';

export class CartItem {
	public price: number;

	constructor(
		public product: IProduct,
		public selectedSize: ISize,
		public selectedColor: IColorWithPrice, // Notera: Typen har ändrats till IColorWithPrice
		public amount: number
	) {
		// Hitta den valda storleken i produktens storlekslista
		const selectedSizeWithColors = product.sizes.find(
			(size) => size.id === selectedSize.id
		);

		// Hitta den valda färgen i den valda storlekens färglista
		const colorInfo = selectedSizeWithColors?.colors.find(
			(color) => color.id === selectedColor.id
		);

		// Tilldela priset från den valda färgen
		this.price = colorInfo ? colorInfo.price : 0;
	}
}
