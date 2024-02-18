var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("user",{
    message:"hello pakistani" ,
    result:" user 1 ",
    });
});

module.exports = router;
