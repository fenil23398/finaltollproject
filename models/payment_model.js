var db=require('../connection');
var payment={
    getAllPayments:function(callback){
        return db.query("select * from payment_detail",callback);
    },
    getPaymentDetailById:function(id,callback){
        return db.query("select pd.*,pt.*,u.* from payment_detail pd,payment_method pt,user u where pd.method_id=pt.method_id and pd.user_id=u.user_id and pd.payment_id=?",[id],callback);
    },
    addPayment:function(pay,callback){
        return db.query("insert into payment_detail values(?,?,?,?,?,?,?)",[null,pay.user_id,pay.method_id,pay.card_no,pay.expiry_month,pay.expiry_year,pay.card_name],callback);
    },
    getPaymentDetailByUser:function(id,callback){
        return db.query("select pd.*,pt.*,u.* from payment_detail pd,payment_method pt,user u where pd.method_id=pt.method_id and pd.user_id=u.user_id and u.user_id=?",[id],callback);
    },
    updatePaymentById:function(pay,callback){
        return db.query("update payment_detail set user_id=?,method_id=?,card_no=?,expiry_month=?,expiry_year=?,card_name=? where payment_id=?",[pay.user_id,pay.method_id,pay.card_no,pay.expiry_month,pay.expiry_year,pay.card_name,pay.payment_id],callback);
    },
    deletePaymentId:function(id,callback){
        return db.query("delete from payment_detail where payment_id=?",[id],callback);
    }

}
module.exports=payment;