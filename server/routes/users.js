var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({token: 'iu2938d23dui', grant: 'doctor'});
});

module.exports = router;
