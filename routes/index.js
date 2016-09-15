var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express app' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'Express app' });
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

router.get('/profile/:name', function (req, res) {
    res.render('contact', {
    title: 'Contact',
    name: req.params.name,
    });
});

module.exports = router;
