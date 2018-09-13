const path = require('path');
const os = require('os');
const fs = require('fs');


module.exports = function(app) {


    app.get('/', function(req, res, next) {
    	 res.render('home');

    })

    app.get('/profile', function(req, res, next) {
    	 res.render('profile');
    })

    app.get('/contact', function(req, res, next) {
    	 res.render('contact');
    })

    app.get('/faq', function(req, res, next) {
    	 res.render('faq');
    })

    app.get('/branding', function(req, res, next) {
    	 res.render('branding_page');
    })


    app.post('/login', function(req, res, next) {
    	 res.render('coachLandng');

    })


}
