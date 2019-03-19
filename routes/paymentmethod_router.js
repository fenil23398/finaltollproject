var express = require('express');
var router = express.Router();
var pm = require('../models/payment_method_model');

router.get('/:id?',function(req,res){
    if(req.params.id){
        pm.getPaymentById(req.params.id,function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

    }
    else{
        pm.getAllPaymentType(function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
});

router.post('/',function(req,res){
    pm.addPaymentMethod(req.body,function(err,count){
        if(err)
            res.json(err);
        else
            res.json(req.body);
    })
})

module.exports=router;