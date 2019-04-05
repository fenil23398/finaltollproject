var express=require('express');
var router = express.Router();
var transactionu = require('../models/transaction_model');

router.get('/:id?',function(req,res){
    transactionu.getTransactionByUserId(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
});



module.exports=router;