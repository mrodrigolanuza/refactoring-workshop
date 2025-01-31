export class ShoppingCartOld {
	private price: number;

	add(price: number) {
		this.price = price;
	}

	calculateTotalPrice(): number {
		return this.price;
	}

	hasDiscount(): boolean {
		return (this.price >= 100);
	}

	numberOfProducts(): number {
		return 1;
	}
}

export class ShoppingCart {
	private priceList: number[] = [];

	add(price: number) {
		this.priceList.push(price);
	}

	calculateTotalPrice(): number {
		return this.priceList.reduce((acc, next) => acc + next, 0);
	}

	hasDiscount(): boolean {
		return (this.calculateTotalPrice() >= 100);
	}

	numberOfProducts(): number {
		return this.priceList.length;
	}
}