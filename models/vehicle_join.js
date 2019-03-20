var db=require('../connection');
var vehiclejoin={
    getVehicleByno:function(id,callback){
        return db.query("select v.*,vt.*,u.* from vehicle v,user u,vehicle_type vt where vt.vehicle_type_id=v.vehicle_type_id and v.user_id=u.user_id and v.vehicle_no=?",[id],callback);
    },
    addVehicle:function(vehicle,callback){
        return db.query("insert into vehicle values(?,?,?)",[vehicle.vehicle_no,vehicle.vehicle_type_id,vehicle.user_id],callback);
    },
    getAllVehicle:function(callback){
        return db.query("select * from vehicle",callback);
    },
    getVehicleByUser:function(id,callback){
        return db.query("select v.*,vt.*,u.* from vehicle v,user u,vehicle_type vt where vt.vehicle_type_id=v.vehicle_type_id and v.user_id=u.user_id and u.user_id=?",[id],callback);
    },
    getVehicleByVehicleType:function(id,callback)
    {
        return db.query("select v.*,vt.*,u.* from vehicle v,user u,vehicle_type vt where vt.vehicle_type_id=v.vehicle_type_id and v.user_id=u.user_id and vt.vehicle_type_id=?",[id],callback);  
<<<<<<< HEAD
=======
    },
    deleteVehicle: function(id, callback) {
        return db.query("delete from vehicle where vehicle_no=?", [id], callback);
    },
    updateVehicle: function(id,vehicle, callback) {
       
        return db.query("update vehicle set vehicle_type_id=?,user_id=? where vehicle_no=?", [vehicle.vehicle_type_id,vehicle.user_id,id], callback);
>>>>>>> 69f666655d1420c820870393bd2e550b882798f2
    }
}
module.exports=vehiclejoin;