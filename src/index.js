// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/fashion-VFT', { useNewUrlParser: true });

const app = express();
const port = 3000;


// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

const path = require('path');


// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.raw());


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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





