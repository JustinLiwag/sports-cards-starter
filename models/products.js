const mongoose = require('mongoose');

const productSchemaa = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		enum: ['basketball', 'baseball', 'football'],
	},
});

const Product = mongoose.model('Product', productSchemaa);

module.exports = Product;
