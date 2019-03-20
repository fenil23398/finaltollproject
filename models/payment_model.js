var db=require('../connection');
var payment={

    getPaymentDetailById:function(id,callback){
        return db.query("select pd.*,pt.*,u.* from payment_detail pd,payment_method pt,user u where pd.method_id=pt.method_id and pd.user_id=u.user_id and pd.payment_id=?",[id],callback);
    },
    addPayment:function(pay,callback){
        return db.query("insert into payment_detail values(?,?,?,?,?,?,?)",[null,pay.user_id,pay.method_id,pay.card_no,pay.expiry_month,pay.expiry_year,pay.card_name],callback);
    },
    getPaymentDetailByUser:function(id,callback){
        return db.query("select pd.*,pt.*,u.* from payment_detail pd,payment_method pt,user u where pd.method_id=pt.method_id and pd.user_id=u.user_id and u.user_id=?",[id],callback);
    }

}
module.exports=payment;