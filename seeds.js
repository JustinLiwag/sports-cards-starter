const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose
	.connect('mongodb://localhost:27017/expressStore', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Mongo Connection Open');
	})
	.catch((error) => handleError(error));

const cards = [
	{
		name: 'Michael Jordan',
		price: 5000,
		category: 'basketball',
	},
	{
		name: 'Tom Brady',
		price: 4000,
		category: 'football',
	},
	{
		name: 'Kobe Bryant',
		price: 3000,
		category: 'basketball',
	},
	{
		name: 'Mookie Betts',
		price: 2000,
		category: 'baseball',
	},
	{
		name: 'Steph Curry',
		price: 2700,
		category: 'basketball',
	},
	{
		name: 'Mike Trout',
		price: 1500,
		category: 'baseball',
	},
	{
		name: 'Lebron James',
		price: 4000,
		category: 'basketball',
	},
	{
		name: 'Patrick Mahomes',
		price: 3300,
		category: 'football',
	},
];

Product.insertMany(cards)
	.then((res) => console.log(res))
	.catch((e) => console.log(e));
