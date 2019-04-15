var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var bodyParser = require('body-parser');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userlogin=require('./routes/userlogin_router');
var userpassword=require('./routes/user_password_router');
var userss =require('./routes/user_router');
var verifyuser=require('./routes/verifyuser_router');
var resendotp=require('./routes/resendotp_router')
var vehicle_type=require('./routes/vehicle_type_router');
var vehicle=require('./routes/vehicle_router');
var vehicle_user=require('./routes/vehicle_byuser');
var vehiclebyid=require('./routes/vehicle_route');
var payment_method=require('./routes/paymentmethod_router');
var payment=require('./routes/payment_router');
var payment_user=require('./routes/payment_user');
var tollplaza=require('./routes/tollplaza_router');
var toll=require('./routes/toll_router');
var mail=require('./routes/mailRouter');
var connect=require('./routes/connect_router');
var nearlocations=require('./routes/near_location_router');
var transaction=require('./routes/transaction_router');
var transactionuser=require('./routes/transcationuser_router');
var motp=require('./routes/multiple_otp_router');
var cities=require('./routes/citypath');
var payment=require('./routes/paypal');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userss',userss);
app.use('/vehicle_type',vehicle_type);
app.use('/vehicles',vehicle);
app.use('/vehiclebyid',vehiclebyid);
app.use('/vehicle_user',vehicle_user);
app.use('/payment_method',payment_method);
app.use('/payment',payment);
app.use('/payment_user',payment_user);
app.use('/tollplaza',tollplaza);
app.use('/userlogin',userlogin);
app.use('/userpassword',userpassword)
app.use('/tolldetail',toll);
app.use('/connect',connect);
app.use('/nearlocations',nearlocations);
app.use('/transaction',transaction);
app.use('/mail',mail);
app.use('/verifyuser',verifyuser);
app.use('/resendotp',resendotp);
app.use('/motps',motp);
app.use('/cities',cities);
app.use('/createPayment',payment);
app.use('/transactionuser',transactionuser);
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
