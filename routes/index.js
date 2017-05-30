var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Synistralia Software, LLC' });
});

router.get('/mark-resume', function(req, res) {
  res.render('mark-resume', { title: 'Synistralia Software, LLC | Resume for Mark Watson' });
});

module.exports = router;
