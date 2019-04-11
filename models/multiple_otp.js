var db=require('../connection');
var motps={
  
    verifyotp:function(id,callback){
        console.log(id);
        return db.query("select * from transaction where otp=?",[id],callback);
                         
    },
}
module.exports=motps;