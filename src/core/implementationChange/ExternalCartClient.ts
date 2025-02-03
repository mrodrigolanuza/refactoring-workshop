import {Price, ShoppingCart} from './ShoppingCart';

export class ExternalCartClient {
	public formattedTotalPrice(price: number): string {
		const shoppingCart: ShoppingCart = new ShoppingCart();
		shoppingCart.add(Price.create(price));
		return `Total price is ${(shoppingCart.calculateTotalPrice().value)} euro"`;
	}
}