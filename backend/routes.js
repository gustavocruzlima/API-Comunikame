// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to REST API',
    });
});

var productController = require('./Controllers/productController');

//machine 
router.route('/product')
    .get(productController.index)//get all products
    .post(productController.new); //create product
    
router.route('/product/:product_id')
    .get(productController.view)//get one product
    .put(productController.update)//update product

module.exports = router;