var db=require('../connection');
var userss={

    getallusers:function(callback){
        return db.query("select * from user",callback);       
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where user_id=?",[id],callback);
    },
    adduser:function(userss,callback)
    {
        return db.query("Insert into user values(?,?,?,?,?)",[userss.user_id,userss.user_name,userss.user_password,userss.user_email,userss.contact_no],callback);
    },
    userEmailMatch:function(useremail,callback){
        return db.query("select user_email from user where user_email=?",[useremail],callback);
    },
    userlogin:function(userss,callback)
    {
   
        return db.query("select * from user where user_email=? and user_password=?",[userss.user_email,userss.user_password],callback);
    }

}
module.exports=userss;