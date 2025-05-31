const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add product
router.post('/add', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

// View all products
router.get('/view', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
