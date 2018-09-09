const path = require('path');
const os = require('os');
const fs = require('fs');


module.exports = function(app) {


    app.get('/', function(req, res, next) {
    	 res.render('home');

    })


    app.post('/login', function(req, res, next) {
    	 res.render('coachLandng');

    })  


}