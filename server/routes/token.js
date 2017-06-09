const router = require('express').Router();
const users =  require('../data/users');

const token ='iu2938d23dui';

/* GET users listing. */
router.post('/', (req, res, next) => {
  // Would prefer to use bcrypt and keep hashes only
  const user = users.find(u =>
    u.email === req.body.email && u.password === req.body.password);
  if (user) {
    res.json({token: token, grant: user.grant, id: user.id});
  } else {
    res.sendStatus(401).end();
  }
});

module.exports = router;
