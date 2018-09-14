'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = (app) => {
    //GET
    app.get('/', (req, res, next) => {
        res.render('home');
    });
    app.get('/cultural_fit', (req, res, next) => {
        res.render('pages/cultural_fit');
    });

    //POST
    app.post('/login', (req, res, next) => {
        res.render('coachLandng');
    });
  
}
