var express = require('express');
var router = express.Router();
var payment = require('../models/payment_model');

router.get('/:id?',function(req,res){
    payment.getPaymentDetailById(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
});

router.post('/',function(req,res){
    payment.addPayment(req.body,function(err,count){
        if(err)
            res.json(err);
        else    
            res.json(req.body);
    });
});

module.exports=router;