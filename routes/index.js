var express = require('express');
var path=require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("Hello This is express developed by Bhavya. <h1>hehe</h1>");
  res.sendFile(path.resolve("public/index.html"));
});

// router.get('/login', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("Hello This is express developed by Bhavya<hr> <h1>hehe</h1>");
//   res.sendFile(path.resolve("public/login.html"));
// });

// router.get('/signup', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("Hello This is express developed by Bhavya<hr> <h1>hehe</h1>");
//   res.sendFile(path.resolve("public/signup.html"));
// });

// router.get('/contactus', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("Hello This is express developed by Bhavya<hr> <h1>hehe</h1>");
//   res.sendFile(path.resolve("public/contactus.html"));
// });

router.get('/pro1', function(req, res, next) {
  res.sendFile(path.resolve("public/pro1.html"));
});

// router.post('/loginsubmit', function(req, res, next) {
//   var output="user name:" + req.body.loginid +"<br>"
//   res.send(output);
// });

router.post('/pro', function(req, res, next) {
 var username=req.body.username
 var female=req.body.female
  var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+female;
  res.send(output)
 });

module.exports = router;
