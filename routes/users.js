var express = require('express');
var userCtrl = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.post('/register', userCtrl.register)


module.exports = router;
