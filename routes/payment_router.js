var express = require('express');
var router = express.Router();
var payment = require('../models/payment_model');

router.get('/:id?',function(req,res){
    if(req.params.id){
    payment.getPaymentDetailById(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
        })
    }
    else{
        payment.getAllPayments(function(err,rows){
            if(err){
                res.json(err);
            }
            else
                res.json(rows);
        })
    }
});

router.post('/',function(req,res){
    payment.addPayment(req.body,function(err,count){
        if(err)
            res.json(err);
        else    
            res.json(req.body);
    });
});

router.put('/',function(req,res){
    payment.updatePaymentById(req.body,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    })
});

router.delete('/:id?',function(req,res){
    payment.deletePaymentId(req.params.id,function(err,count){
        if(err)
            res.json(err);
        else
            res.json(count);
    });
});

module.exports=router;