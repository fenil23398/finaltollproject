var express = require('express');
var router = express.Router();
var motp = require('../models/multiple_otp');

router.get('/:id?',function(req,res){
    // var i=0;
    // while(i<req.params.id){
    var val = Math.floor(1000 + Math.random() * 900000);
    if(req.params.id){
                motp.verifyotp(val,function(err,rows){
                    if(err){
                        res.json(err);
                    }
                    else{
                        if(rows=="[]")
                        {
                            return res.json({
                              msg:'no data'
                            });
                        }
                        else{
                            return res.json({
                                msg: 'data'
                            });
                        }
                        ;
                    }
                })
          }
        // }
    });
    

module.exports=router;