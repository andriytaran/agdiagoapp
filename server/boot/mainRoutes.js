'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = (app) => {
  // Home
  app.get('/', (req, res, next) => {
    res.render('home');
  });

  app.get('/profile', function(req, res, next) {
    res.render('pages/profile');
  });

  app.get('/contact', function(req, res, next) {
    res.render('pages/contact');
  });

  app.get('/faq', function(req, res, next) {
    res.render('pages/faq');
  });

  app.get('/branding', function(req, res, next) {
    res.render('pages/branding_page');
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
};
