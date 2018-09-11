'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('home');
  });
  app.post('/login', (req, res, next) => {
    res.render('coachLandng');
  });
}