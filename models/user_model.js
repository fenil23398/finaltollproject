var db = require('../connection');
var userss = {

    getallusers: function (callback) {
        return db.query("select * from user", callback);
    },
    getUsersById: function (id, callback) {
        return db.query("select * from user where user_id=?", [id], callback);
    },
    adduser: function (userss, callback) {
        return db.query("Insert into user values(?,?,?,?,?,?,?)", [userss.user_id, userss.user_name, userss.user_password, userss.user_email, userss.contact_no, userss.user_otp, userss.verify], callback);
    },
    userlogin: function (userss, callback) {
        console.log(userss);
        return db.query("select * from user where user_email=? and user_password=?", [userss.user_email, userss.user_password], callback);
    },
    user_verify: function (id, callback) {
        return db.query("update user set verify=1 where user_email=?", [id], callback);
    },
    getUsersByEmail: function (email, callback) {
        return db.query("select * from user where user_email=?", [email], callback);
    },
    updatepassword: function (mail, hashpassword, callback) {

        return db.query("update user set user_password=? where user_email=?", [hashpassword.user_password, mail], callback);
    }

}
module.exports = userss;