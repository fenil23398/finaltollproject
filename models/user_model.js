var db = require('../connection');
var userss = {

    getallusers: function (callback) {
        return db.query("select * from user", callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where user_id=?",[id],callback);
    },
    adduser: function (userss, callback) {
        var time=new Date().toLocaleTimeString();
        return db.query("Insert into user values(?,?,?,?,?,?,?,?)", [userss.user_id, userss.user_name, userss.user_email, userss.user_password, userss.contact_no, userss.user_otp,time, 0], callback);
    },
    userlogin: function (userss, callback) {
        console.log(userss);
        return db.query("select * from user where user_email=? and user_password=?", [userss.user_email, userss.user_password], callback);
    },
    user_verify: function (id, callback) {
        return db.query("update user set verify=1 where user_email=?", [id], callback);
    },
    getUsersByEmail: function (email, callback) {
        return db.query("select user_email from user where user_email=?", [email], callback);
    },
    updatepassword: function (mail, hashpassword, callback) {
        
        return db.query("update user set user_password=? where user_email=?", [hashpassword.user_password, mail], callback);
    },
    userEmailMatch:function(useremail,callback){
        return db.query("select user_email from user where user_email=?",[useremail],callback);
    },
    userlogin:function(userss,callback)
    {
   
        return db.query("select * from user where user_email=? and user_password=?",[userss.user_email,userss.user_password],callback);
    },
    updateUser:function(userss,callback){
        return db.query("update user set user_name=? ,contact_no=? where user_id=?",[userss.user_name,userss.contact_no,userss.user_id],callback);
    },
    changePassword:function(pass,id,callback){
        return db.query("update user set user_password=? where user_id=?",[pass,id],callback);
    }

}
module.exports = userss;