var db=require('../connection');
var paymenttype={

    getAllPaymentType:function(callback){
        return db.query("select * from payment_method",callback);       
    },
    getPaymentById:function(id,callback){
        return db.query("select * from payment_method where method_id=?",[id],callback);
    },
    addPaymentMethod:function(pay,callback){
        return db.query("insert into payment_method values(?,?)",[null,pay.method_name],callback);
    }

}
module.exports=paymenttype;