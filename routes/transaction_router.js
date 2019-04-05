var express=require('express');
var router = express.Router();
var transaction = require('../models/transaction_model');

router.get('/:id?',function(req,res){
    transaction.getTransactionById(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
});

router.post('/',function(req,res){
    transaction.addTransaction(req.body,function(err,count){
            if(err)
                res.json(err);
            else    
                res.json(req.body);
    });
});

module.exports=router;