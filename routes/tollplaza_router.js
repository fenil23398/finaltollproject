var express = require('express');
var router = express.Router();
var tp = require("../models/tollplaza");

router.get('/:id?',function(req,res){
    if(req.params.id){
        tp.getAllTollPlazaById(req.params.id,function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

    }
    else{
        tp.getAllTollPlaza(function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
});
module.exports=router;
