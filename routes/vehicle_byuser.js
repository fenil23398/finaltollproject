var express = require('express');
var router = express.Router();
var vu = require('../models/vehicle_join');

router.get('/:id',function(req,res){
    vu.getVehicleByUser(req.params.id,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
})

module.exports=router;