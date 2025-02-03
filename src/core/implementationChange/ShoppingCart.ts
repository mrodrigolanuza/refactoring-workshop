export class ShoppingCart {
	private priceList: Price[] = [];
	add(price: Price) {
		this.priceList.push(price);
	}
	calculateTotalPrice(): Price {
		return this.priceList
			.reduce((acc, next) => acc.add(next), Price.create(0));
	}

	hasDiscount(): boolean {
		return (this.calculateTotalPrice().isEqualOrGreatherThan(100));
	}

	numberOfProducts(): number {
		return this.priceList.length;
	}
}

export class Price {
	private constructor(readonly value: number) {}
	static create(price: number) {
		if (price < 0) {
			throw new Error("price must be greater than 0");
		}
		return new Price(price);
	}
	
	add(otherPrice: Price): Price {
		return Price.create(this.value + otherPrice.value);
	}
	
	isEqualOrGreatherThan(value: number): boolean {
		return this.value >= value;
	}
	
	isEquals(otherPrice: Price): boolean {
		return this.value === otherPrice.value;
	}
}