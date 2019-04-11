var db=require('../connection');
var motps={
  
    verifyotp:function(id,callback){
        return db.query("select * from transaction where otp=?",[id],callback);
                         
    }
}
module.exports=motps;