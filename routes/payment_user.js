var express = require('express');
var router = express.Router();
var pu = require('../models/payment_model');

router.get('/:id',function(req,res){
    pu.getPaymentDetailByUser(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
})

module.exports=router;