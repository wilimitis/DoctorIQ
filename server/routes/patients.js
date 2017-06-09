const router = require('express').Router();

/* GET patients */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      name: 'asdfsadf',
      age: 21
    },
    {
      id: 2,
      name: 'qwerqwer',
      age: 69
    }
  ]);
});

module.exports = router;
