const router = require('express').Router();
const users =  require('../data/users');

/* GET users listing. */
router.post('/', (req, res, next) => {
  // Would prefer to use bcrypt and keep hashes only
  const user = users.find(u =>
    u.email === req.body.email && u.password === req.body.password);

  if (user) {
    res.json({token: 'iu2938d23dui', grant: user.grant});
  } else {
    res.sendStatus(401).end();
  }
});

module.exports = router;
