var express = require('express');
var router = express.Router();

var fs = require('fs');
var readline = require('readline');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', text: 'Hello World' });
  // res.send('Hello World!');
});

module.exports = router;
