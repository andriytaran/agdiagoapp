'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = (app) => {
    //GET
    app.get('/', (req, res, next) => {
        res.render('home');
    });
    app.get('/page_product', (req, res, next) => {
        res.render('pages/products/page_product');
    });

    //POST
    app.post('/login', (req, res, next) => {
        res.render('coachLandng');
    });
  
}
