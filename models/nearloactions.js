var db=require('../connection');

var nearl={
    getLocations:function(lat,lon,callback){
    
        return db.query("select latitude,longitude from toll_plaza",callback);
   
    }
}
module.exports=nearl;
