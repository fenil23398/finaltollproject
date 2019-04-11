var express = require('express');
var router = express.Router();
var motp = require('../models/multiple_otp');

router.get('/:id?',function(req,res){
    var i=0;
    var arr=[];
     while(i<req.params.id){
    var val = Math.floor(1000 + Math.random() * 900000);
        var f=0;
                motp.verifyotp(val,function(err,result){
                    if(err){
                        res.json(err);
                    }
                    else{
                       
                        if(result.length>0)
                        {
                            return res.json({
                                msg:'number Exist'
                              });
                        }
                        else{
                           
                              for(var j=0;j<arr.length;j++){
                                if(val==arr[j])
                                f=1;
                            }
                            if(f==0){
                                i++;
                                console.log(i);
                                arr.push(val);
                            }
                            
                        }
                        
                    }
                })
          
         
         }
         res.json(arr);
    });
    

module.exports=router;