var express = require('express');
var router = express.Router();
var vj = require('../models/vehicle_join');

router.get('/:id?',function(req,res){
    if(req.params.id){
        vj.getVehicleByno(req.params.id,function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

    }
    else{
        vj.getAllVehicle(function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
});

router.post('/',function(req,res){
    vj.addVehicle(req.body,function(err,count){
        if(err)
            res.json(err);
        else
            res.json(req.body);
    })
});

router.delete('/:id',function(req,res){
    
    vj.deleteVehicle(req.params.id,function(err,count){
     
        if(err)
            {
                  res.json(err);
            }
         else
            {
                 res.json(count);
            }
     
         });
});

router.put('/:id',function(req,res){
         
        vj.updateVehicle(req.params.id,req.body,function(err,rows){
       
        if(err)
          {
          res.json(err);
          }
          else
          {
          res.json(rows);
          }
          });
 });

module.exports=router;
