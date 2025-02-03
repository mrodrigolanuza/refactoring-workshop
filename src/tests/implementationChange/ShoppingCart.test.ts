import {Price, ShoppingCart} from '../../core/implementationChange/ShoppingCart';

describe('The Shopping Cart Should', ()=>{
	it('counts number of products', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(Price.create(10));

		expect(shoppingCart.numberOfProducts()).toBe(1);
	});

	it('calculates total price', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(Price.create(10));

		expect(shoppingCart.calculateTotalPrice()
			.isEquals(Price.create(10)))
			.toBeTruthy();
	});

	it('knows when is discount applicable', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(Price.create(100));

		expect(shoppingCart.hasDiscount()).toBeTruthy();
	});

	it('knows when is not possible to apply discount', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(Price.create(99));

		expect(shoppingCart.hasDiscount()).toBeFalsy();
	});
})
