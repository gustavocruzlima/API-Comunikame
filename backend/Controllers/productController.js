Parameters = require('../Models/productModel');// Handle index actions
exports.index = function (req, res) {
    Parameters.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Parameters retrieved successfully",
            data: products
        });
    });
};

exports.new = function (req, res) {
    var product = new Parameters();
    product.productId = req.body.productId ? req.body.productId : product.productId;
    product.productName = req.body.productName;
    product.productPrice = req.body.productPrice;
    product.productQuantity = req.body.productQuantity;
    product.productImageLink = req.body.productImageLink;
    product.description = req.body.description;
    product.category = req.body.category;
    product.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New product added',
            data: product
        });
    });
};

exports.view = function (req, res) {
    Parameters.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};

exports.update = function (req, res) {
    Parameters.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
            product.productId = req.body.productId ? req.body.productId : product.productId;
            product.productName = req.body.productName;
            product.productPrice = req.body.productPrice;
            product.productQuantity = req.body.productQuantity;
            product.productImageLink = req.body.productImageLink;
            product.description = req.body.description;
            product.category = req.body.category;
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });
};