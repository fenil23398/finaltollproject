var express = require('express');
var router = express.Router();
var vt = require('../models/vehicletype_model');

router.get('/:id?',function(req,res){
    if(req.params.id){
        vt.getVehicleById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        vt.getAllVehicleType(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
});

router.post('/',function(req,res){
    vt.addVehicleType(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports=router;
