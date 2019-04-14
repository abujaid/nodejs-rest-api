const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Route should handle request
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes); // use a middleware which go incoming request and use it
app.use('/orders', orderRoutes);

app.use((req, res, next) =>
{
    const error = new Error('Not Found');
    error.status = '404';
    next(error)
});
app.use((error, req, res, next) =>
{
    res.status(error.status || 500);
    res.json({
        error: error.message
    })
});
module.exports = app;
