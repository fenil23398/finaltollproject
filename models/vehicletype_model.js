var db=require('../connection');
var vehicletype={

    getAllVehicleType:function(callback){
        return db.query("select * from vehicle_type",callback);       
    },
    getVehicleById:function(id,callback){
        return db.query("select * from vehicle_type where vehicle_type_id=?",[id],callback);
    },
    addVehicleType:function(vehiclet,callback){
        return db.query("insert into vehicle_type values(?,?)",[null,vehiclet.vehicle_type_name],callback);
    }

}
module.exports=vehicletype;