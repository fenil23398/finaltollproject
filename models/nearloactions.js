var db=require('../connection');

var nearl={
    getLocations:function(callback){
        console.log("reached to query");
        return db.query("select latitude,longitude from toll_plaza",callback);
     },
}
module.exports=nearl;
