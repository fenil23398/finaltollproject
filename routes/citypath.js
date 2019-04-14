var express=require('express');
var router = express.Router();
var cities = require('../models/path_model');


router.get('/:c1?/:c2?',function(req,res){
    if(req.params.c1 && req.params.c2){
            cities.getcitypath(req.params.c1,req.params.c2,function(err,rows){
                if(err){
                    res.json(err);
                }
                else{
                    if(rows.length>1)
                    res.json(rows)
                    else{
                        res.json({
                            msg:"No tolls ON this Route"
                        })
                    }
                }
            })
    }
    else{
        cities.getcities(function(err,rows){
                if(err)
                    res.json(err);
                else    
                    res.json(rows);
        })
    }
})

module.exports=router;