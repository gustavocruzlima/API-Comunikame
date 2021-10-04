var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Product = module.exports = mongoose.model('product', productSchema);module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}