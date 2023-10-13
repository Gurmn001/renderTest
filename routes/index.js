var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', homeActive: true });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', aboutActive: true });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', projectsActive: true });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me', contactActive: true });
});

module.exports = router;
