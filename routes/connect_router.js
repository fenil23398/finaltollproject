var express=require('express');
var router = express.Router();
var cn = require('../models/connect_model');

router.get('/:id?',function(req,res){
    if(req.params.id){
        cn.getdestination(req.params.id,function(err,rows){
                if(err)
                    res.json(err);
                else    
                    res.json(rows);
        })
    }
})

module.exports=router;