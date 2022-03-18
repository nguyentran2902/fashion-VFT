const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./src/public'));
// ejs
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.raw());

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amado_database', { useNewUrlParser: true });

// file upload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// bcrypt
const bcrypt = require('bcrypt');

// express-session
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat'
}))

// 

app.listen(4000, () => {
    console.log('App listening on port 4000!');
})

app.get('/', (req, res) => {
    res.render('shop-index');
})
app.get('/shop-item', (req, res) => {
    res.render('shop-item');
})
app.get('/shop-account', (req, res) => {
    res.render('shop-account');
})
app.get('/shop-checkout', (req, res) => {
    res.render('shop-checkout');
})
app.get('/shop-product-list', (req, res) => {
    res.render('shop-product-list');
})
app.get('/shop-index-header-fix', (req, res) => {
    res.render('shop-index-header-fix');
})
app.get('/shop-search-result', (req, res) => {
    res.render('shop-search-result');
})
app.get('/shop-shopping-cart', (req, res) => {
    res.render('shop-shopping-cart');
})
app.get('/shop-standart-forms', (req, res) => {
    res.render('shop-standart-forms');
})
app.get('/shop-contacts', (req, res) => {
    res.render('shop-contacts');
})
app.get('/shop-shopping-cart-null', (req, res) => {
    res.render('shop-shopping-cart-null');
})

