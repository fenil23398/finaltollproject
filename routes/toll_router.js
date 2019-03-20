var express = require('express');
var router = express.Router();
var t = require('../models/toll_table');

router.get('/:id?',function(req,res){
    t.getAllTollPlazaById(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    })
});

module.exports=router;