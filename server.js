var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// redis server connection and role type check
var { checkAPP, checkAdmin, checkUser } = require('./util/middleware');

// controller import
var baseRouter = require('./routes/baseRoute');
var usersRouter = require('./routes/usersRoute');
var adminRouter = require('./routes/adminRoute');

var app = express();

// cors issue fix
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app connection test or static file host
app.use(express.static(path.join(__dirname, 'public')));

// test app connection
app.get('/test',(req,res)=>{
    res.send("app is connected")
})
// route 
app.use('/', checkAPP, baseRouter)
app.use('/users', checkAPP, usersRouter);
app.use('/admin', [checkAPP, checkUser, checkAdmin], adminRouter)
// below code will be used in the www file
// app.listen(process.env.PORT || 3000,()=>{
//     console.log(`app is runing at ${PORT}`)
// })
module.exports = app;

