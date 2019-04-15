var express = require('express');
var router = express.Router();
var Users = require('../models/user_model');
var otp = require('../models/sendotp_model');
router.post('/', function (req, res, next) {
    console.log("successfully reached");

    
    var string = '0123456789abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var len = string.length;
    var otpp = '';
    for (let i = 0; i < 4; i++) {
        otpp += string[Math.floor(Math.random() * len)];
    }
    otp.sendMail(req.body, otpp, function (err, rows) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Mail Id is Invalid'
            });
        }
        else {
            
             console.log(rows.accepted.toString());  
            var email=rows.accepted.toString();
           Users.resendotp(otpp,email,function(err,row){
               if(err)
               {
                res.json(err);
                console.log("err in resend otp");

               }
               else
               {
                   console.log("resend otp success");
                   res.json(row );
               }
            })     

        }
    });
});


module.exports=router;