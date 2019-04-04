var express = require('express');
var router = express.Router();
var vj = require('../models/vehicle_model');

router.get('/:vtid/:uid',function(req,res){
    if(req.params.vtid && req.params.uid){
        vj.getVehcileNo(req.params.vtid,req.params.uid,function(err,rows){
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
}
});
module.exports=router;


