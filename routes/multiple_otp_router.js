var express = require('express');
var router = express.Router();
var motp = require('../models/multiple_otp');

router.get('/:id?',function(req,res){
    if(req.params.id){
                motp.verifyotp(req.params.id,function(err,rows){
                    if(err){
                        res.json(err);
                    }
                    else{
                        if(res=="[]")
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
                    }
                })
          }
    });
    

module.exports=router;