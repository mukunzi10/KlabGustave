/** @format */

const item = [
	{ name: "bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "album", price: 10 },
	{ name: "book", price: 5 },
	{ name: "phone", price: 500 },
	{ name: "computer", price: 1000 },
];

// Question 1
const cheapestItem = item.reduce((first, second) =>
	first.price < second.price ? first : second
);
console.log(
	"question 1. Without money, I will Buy a " +
		cheapestItem.name +
		" with price of " +
		cheapestItem.price
);

// question................. 2......................
const expensiveItem = item.reduce((first, second) =>
	first.price > second.price ? first : second
);
console.log(
	"question  2. The expensive product is " +
		expensiveItem.name +
		" with price of " +
		expensiveItem.price
);

// question.................. 3..............
let total = 0;
item.forEach((values) => {
	total += values.price;
});
console.log("question 3. The total price of all products is " + total);

// question ...........4................
let total2 = 0;
item.forEach((values) => {
	if (values.price >= 10) {
		total2 += values.price;
	}
});
console.log("question   4. The total without whose price is < 10 is " + total2);
