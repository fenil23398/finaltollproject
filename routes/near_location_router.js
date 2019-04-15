var express = require('express');
var router = express.Router();
var nl = require('../models/nearloactions');
var db=require('../connection');
router.get('/:lat/:lon',function(req,res){
     var result=[];
    var l1=req.params.lat;
    var l2=req.params.lon;
    l1=l1.substring(0,4);
    l2=l2.substring(0,4);
    nl.getLocations(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
            
               for(var i=0;i<rows.length;i++){
                var lats=String(rows[i].latitude);
                var lons=String(rows[i].longitude);
                lats=lats.substring(0,4);
                lons=lons.substring(0,4);
               
                    if(lats==l1 || lons==l2){
                        var obj={'latitude':lats,'longitude':lons};
                                     result.push(obj);
                        
                    }
              }
               res.json(result);
           
            }
         })
            
    
});

module.exports=router;

// var lats,lons;
// var result=[];
  // var l1=parseFloat(req.params.lat+"")+0.020000;
    // var l2=parseFloat(req.params.lon+"")+0.020000;
    // var t1=l1-0.040000;
    //  var t2=l2-0.040000;
    //  var f=0;


 // var j=0;
    // nl.getLocations(req.params.lat,req.params.lon,function(err,rows){
    //     if(err){
    //         res.json(err);
    //     }
    //     else{
    //         //console.log(rows);
    //          lats=JSON.stringify(rows,['latitude']);
    //          lons=JSON.stringify(rows,['longitude']);
    //             lats=lats.split(",");
    //             lons=lons.split(",");
    //             lats=JSON.parse(lats);
    //             lons=JSON.parse(lons);
    //         for(var i=0;i<lats.length;i++)
    //         {
    //             var tmp1=lats[i].latitude;
    //             var tmp2=lons[i].longitude;
    //             if((tmp1<l1 && tmp1>t1) || (tmp2<l2 && tmp2>t2)){
    //              var obj={'latitude':tmp1,'longitude':tmp2};
    //             result.push(obj);
    //             }
        
    //         }
    //         console.log(result);
    //         res.json(result);
    //     }
    //  })