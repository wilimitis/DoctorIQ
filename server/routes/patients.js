const router = require('express').Router();
const patients = require('../data/patients').patients;
const patientDetails = require('../data/patients').patientDetails;

/* GET patients list */
router.get('/list', (req, res, next) => {
  const name = req.query.name;

  if (name) {
    res.json(patients.filter(p => p.name.toLowerCase().includes(name.toLowerCase())));
  } else {
    res.json(patients);
  }
});

/* GET patients by id */
router.get('/', (req, res, next) => {
  const patient = patientDetails[req.query.id];

  if (patient) {
    res.json(patient);
  }
  else {
    res.sendStatus(404).end();
  }
});

module.exports = router;
