var express = require('express');
var router = express.Router();
var motp = require('../models/multiple_otp');

router.get('/:id?',function(req,res){
    // var i=0;
    // while(i<req.params.id){
    var val = Math.floor(1000 + Math.random() * 900000);
    if(req.params.id){
                motp.verifyotp(req.params.id,function(err,result){
                    if(err){
                        res.json(err);
                    }
                    else{
                        console.log(count);
                       
                        if(result.length>0)
                        {
                            return res.json({

                                msg: 'data'
                            });
                            
                        }
                        else{
                            return res.json({
                                msg:'no data'
                              });
                        }
                        ;
                    }
                })
          }
        // }
    });
    

module.exports=router;