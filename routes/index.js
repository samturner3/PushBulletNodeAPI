var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', text: 'Hello World' });
  // res.send('Hello World!');
});

module.exports = router;
