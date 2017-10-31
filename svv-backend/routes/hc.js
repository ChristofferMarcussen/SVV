var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST method route
router.post('/', function (req, res) {
  res.send('POST request to the homepage')
});

// PUT method route
router.put('/', function (req, res) {
  res.send('PUT request to the homepage')
});


// PUT method route
router.delete('/', function (req, res) {
  res.send('PUT request to the homepage')
});
	

module.exports = router;
