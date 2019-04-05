var db=require('../connection');

var vehiclemodel={
    getVehcileNo:function(vtid,uid,callback)
    {
        return db.query("select * from vehicle where vehicle_type_id=? AND user_id=?",[vtid,uid],callback);
    }
}
module.exports=vehiclemodel;