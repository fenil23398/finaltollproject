var db=require('../connection');

var nearl={
    getLocations:function(lat,lon,callback){
        // var l1=parseInt((lat+"").split(".")[1]);
        // var l2=parseInt((lon+"").split(".")[1]);
        // var t1=l1+2000;
        // var t2=l2+2000;
        // var t3=l1-2000;
        // var t4=l2-2000;
        // var lats;
        return db.query("select latitude,longitude from toll_plaza",callback);
    //     lats.forEach(element => {
    //         var tmp1=parseInt((element+"").split(".")[1]);
    //         if(tmp1>t1 && tmp1<t3){
    //             console.log(element);
    //         }
    //     });
    //    return lats;
    }
}
module.exports=nearl;
