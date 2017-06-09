const router = require('express').Router(),
  users =  require('../data/users'),
  tokenSchema = require('../schemas/token'),
  validate = require('../utils/validate');

const token ='iu2938d23dui';

/* GET users listing. */
router.post('/', (req, res, next) => {

  // Validation
  const errors = validate({
    email: req.body.email,
    password: req.body.password
  }, tokenSchema.request);

  if (errors) {
    res.status(400).json(errors);
    return;
  }

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
