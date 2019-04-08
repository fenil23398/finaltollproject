var db = require('../connection');
var userss = {

    getallusers: function (callback) {
        return db.query("select * from user", callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where user_id=?",[id],callback);
    },
    adduser: function (userss,otp,callback) {
        var time=new Date().toLocaleTimeString();
        return db.query("Insert into user values(?,?,?,?,?,?,?,?)", [userss.user_id, userss.user_name, userss.user_email, userss.user_password, userss.contact_no,otp,time, 0], callback);
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
    },
    verifyUser:function(email,callback){
        var time=new Date().toLocaleTimeString(); //current time
        var arr=time.split(":");
        var min=parseInt(arr[1]);
        if(min=>0 && min<15)
        {
            min=min-0;
            min=60-(15-min);
            if(arr[0]==0)
            arr[0]=11;
            else
            arr[0]=arr[0]-1;
        }
        //get the column result suppose dat reult column name is timeotp
        var timeotp="6:19:33 PM";
        var arrverify=timeotp.split(":");
        if(arrverify[1]>=45 && arrverify[1]<60)
        arrverify[1]=arrverify[1]-15;

        if(arrverify[1]-min<15)
        {
           // dn do call otp match function
        }
        else{
            //update otp function called & notify user to verify otp
        }
        return db.query("select otp_timestamp from user where user_email=?",[email],callback);
    },
    getTimeOtp(otp,email){
        return db.query("select * from user where user_otp=? and user_email=?"[otp,email],callback);
    },
    updateStatus(email){
        return db.query("update user set verify=1 where user_email=?",[email],callabck);
    }

}
module.exports = userss;