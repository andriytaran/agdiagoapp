'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = (app) => {
    // Home
    app.get('/', (req, res, next) => {
        res.render('home');
    });

    // Cultural Fit
    app.get('/cultural_fit', (req, res, next) => {
        res.render('pages/cultural_fit');
    });

    // Player Assessment
    app.get('/player_assessment', (req, res, next) => {
        res.render('pages/player_assessment');
    });

    // Login
    app.post('/login', (req, res, next) => {
        res.render('coachLandng');
    });

}
