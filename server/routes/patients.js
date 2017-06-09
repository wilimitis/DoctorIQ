const router = require('express').Router();

/* GET patients */
router.get('/', function(req, res, next) {
  res.json([
    {
      name: 'asdfsadf',
      age: 21
    },
    {
      name: 'qwerqwer',
      age: 69
    }
  ]);
});

module.exports = router;
