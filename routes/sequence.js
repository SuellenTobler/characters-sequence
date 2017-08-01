var express = require('express');
var router = express.Router();

var sequenceApp = require('../app/app.sequence'); 

router.post('/', sequenceApp.index);

module.exports = router;