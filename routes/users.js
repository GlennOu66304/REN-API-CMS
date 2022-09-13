var express = require('express');
var router = express.Router();

var { userLogin, userRegister } = require('../controller/user')
var { checkUser } = require('../util/middleware')

router.post('/login', userLogin);
router.post('/register', userRegister);
router.use('/user', checkUser, require('./userNeedCheck'))


// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/login', userLogin);

module.exports = router;
