var express = require('express');
var router = express.Router();
var Users = require('../models/user_model');
var otp=require('../models/sendotp_model');
router.get('/:id?', function(req, res) {
    if (req.params.id) {
        Users.getUsersById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        Users.getallusers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/',function(req,res,next){
console.log("successfully reached");
   
      
    var string = '0123456789abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    var len = string.length;    
    var otpp='';
    for (let i = 0; i < 4; i++ ) { 
        otpp += string[Math.floor(Math.random() * len)]; 
    }
 
     otp.sendMail(req.body,otpp,function(err,rows){
         if(err){
            return res.json({
                success: false,
                msg: 'Mail Id is Invalid'
            });
         }
         else{
             
              Users.adduser(req.body,otpp,function(err,rows){
                    if(err)
                    {
                        console.log(err);
                        res.json(err);
                    }
                    else{
                        console.log(req.body);
                        res.json(req.body);
                    }
                
            });
        }
     });
  });
  

  router.put('/:pass/:id',function(req,res){
    Users.changePassword(req.params.pass,req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    })
  });
  
module.exports=router;