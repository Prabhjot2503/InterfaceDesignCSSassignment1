var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});


router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
