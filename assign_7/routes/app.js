const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
require('./db');

const app = express();
app.use(express.json());
app.use('/product', productRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
