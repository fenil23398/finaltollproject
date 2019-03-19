var db=require('../connection');
var userss={

    getallusers:function(callback){
        return db.query("select * from user",callback);       
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where user_id=?",[id],callback);
    }

}
module.exports=userss;