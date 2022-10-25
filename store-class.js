"use strict";

class Product {

	/*Each product must have a unique identifier, a text description and a unit price*/
	constructor(id, description, price, quantity) {
		this._id = id;
		this._description = description;
		this._price = price;
		this._quantity = quantity;
		this._extValue = price * quantity;
	}

	/*Use setters and getters to manage the product properties*/
	get id() {
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
	get description() {
		return this._description;
	}
	set description(description) {
		this._description = description;
	}
	get price() {
		return this._price;
	}
	set price(price) {
		this._price = price;
	}
	get quantity() {
		return this._quantity;
	}
	set quantity(quantity) {
		this._quantity = quantity;
	}

	/*Include a label method that can print a formatted label for each product*/
	getLabel() {
		return `Product ID: ${this._id}\n${this._description}\n$${this._price}\n`;
	}

}

class Store {

	/*The store must have a way to keep track of inventory — must be able to count the number of products in stock and the value of the inventory*/
	constructor(totalQuantity) {
		this._totalQuantity = totalQuantity;
		this._products = [];
	}

	get products() {
		return this._products;
	}
	set products(products) {
		this._products = [];
	}

	addProduct(product) {
		this._products.push(product);
	}

	reportProducts() {
		let total = 0;
		const l = this._products.length;
		for (let i = 0; i < l; i++) {
			total += this._products[i];
		}
		return `There are ${total} products`;	// ???? keeps giving zero
	}

}

/*The store must have at least 5 products*/
const productOne = new Product(111111, "Product One", 9.99, 10);
const productTwo = new Product(222222, "Product Two", 14.98, 20);
const productThree = new Product(333333, "Product Three", 27.49, 30);
const productFour = new Product(444444, "Product Four", 29.99, 40);
const productFive = new Product(555555, "Product Five", 49.99, 50);

console.log(productOne.getLabel());
console.log(productTwo.getLabel());
console.log(productThree.getLabel());
console.log(productFour.getLabel());
console.log(productFive.getLabel());

/*An inventory report must be provided to list the id of each product, the description. unit price, quantity in stock and extended value (unit price * quantity in stock)*/
const storeOne = new Store(150);
storeOne.addProduct(productOne);
storeOne.addProduct(productTwo);
storeOne.addProduct(productThree);
storeOne.addProduct(productFour);
storeOne.addProduct(productFive);
console.log(storeOne.reportProducts());

/*The system must also provide a reorder report that lists products which are out of stock ????*/