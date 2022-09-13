var express = require('express');
var router = express.Router();
// controller import
var { userLogin, userRegister } = require('../controller/userControll')
var { checkUser } = require('../util/middleware')

// route and path
router.post('/login', userLogin);
router.post('/register', userRegister);
router.use('/user', checkUser, require('./userNeedCheckRoute'))


module.exports = router;
