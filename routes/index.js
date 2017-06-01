var express = require('express');
var router = express.Router();

/* GET home page. */

// App metadata
var metadata = {
  title: 'Synistralia Software, LLC',
  description: 'Synistralia Software, LLC is a software development and consulting company based in Bryan, TX.',
  keywords: 'software development, software developers, MongoDB, Express, AngularJS, Node.js, Redis, Socket.io',
  siteUrl: 'http://synistralia.com',
  logoUrl: 'http://synistralia.com/img/logo.jpg',
  twitterId: '@mrwatson2'
};

var indexMetadata = metadata;
router.get('/', function(req, res) {
  res.render('index', metadata);
});

var resumeMetadata = {
  title: 'Synistralia Software, LLC | Resume for Mark Watson',
  description: 'Mark Watson is a software developer with 20 years of experience in a variety of languages and technologies.',
  keywords: 'software development, software developers, MongoDB, Express, AngularJS, Node.js, Redis, Socket.io',
  siteUrl: 'http://synistralia.com',
  logoUrl: 'http://synistralia.com/img/logo.jpg',
  twitterId: '@mrwatson2'
};

router.get('/mark-resume', function(req, res) {
  res.render('mark-resume', resumeMetadata);
});

module.exports = router;
