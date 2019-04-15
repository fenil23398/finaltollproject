var db=require('../connection');

var trans={
   getTransactionByUserId:function(id,callback){
       return db.query("select u.user_name,t.amount,t.isreturn,t.transaction_date,t.transaction_id,t.otp,t.transaction_time,t.status,pt.method_name,v.vehicle_no,vt.vehicle_type_name,tp.toll_plaza_id,tp.toll_name,tp.highway_name,tp.emergency_number,tp.city from user u,transaction t,vehicle v,vehicle_type vt,toll_plaza tp,payment_detail p,payment_method pt where t.user_id=u.user_id and t.toll_plaza_id=tp.toll_plaza_id and p.payment_id=t.payment_id and p.method_id=pt.method_id and v.vehicle_no=t.vehicle_no and v.vehicle_type_id=vt.vehicle_type_id and t.user_id=?",[id],callback);
   },
   addTransaction:function(tt,callabck){
       console.log("Transcation insert");
       console.log("insert into transaction values(?,?,?,?,?,?,?,?,?,?)",[null,tt.user_id,tt.payment_id,tt.vehicle_no,tt.toll_plaza_id,tt.transaction_date,tt.transaction_time,tt.status,tt.amount,tt.isreturn]);
        return db.query("insert into transaction values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[null,tt.user_id,tt.payment_id,tt.vehicle_no,tt.toll_plaza_id,tt.transaction_date,tt.transaction_time,tt.status,tt.amount,tt.isreturn,tt.isValid,tt.otp,tt.isPassed],callabck);
   },
   getTransactionById:function(id,callback){
    return db.query("select u.user_name,t.amount,t.isreturn,t.transaction_date,t.otp,t.transaction_time,pt.method_name,v.vehicle_no,vt.vehicle_type_name,tp.toll_plaza_id,tp.city,tp.highway_name,tp.toll_name,tp.emergency_number from user u,transaction t,vehicle v,vehicle_type vt,toll_plaza tp,payment_detail p,payment_method pt where t.user_id=u.user_id and t.toll_plaza_id=tp.toll_plaza_id and p.payment_id=t.payment_id and p.method_id=pt.method_id and v.vehicle_no=t.vehicle_no and v.vehicle_type_id=vt.vehicle_type_id and t.transaction_id=?",[id],callback);
}
}
module.exports=trans;