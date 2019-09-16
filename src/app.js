const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('mongodb+srv://test:laxus123@cluster0-1ocwo.mongodb.net/test?retryWrites=true&w=majority');


// Carrega os Models
const Product = require('./models/product');


// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;