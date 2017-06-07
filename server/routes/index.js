const express = require('express');
const path = require('path');

const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = router;
