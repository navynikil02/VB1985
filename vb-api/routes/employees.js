var express = require('express');
var router = express.Router();

const employeeModel = require('../models/employees.model');
const galleryModel = require('../models/gallery.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
