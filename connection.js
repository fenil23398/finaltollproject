var mysql = require('mysql');
var cnn = mysql.createPool({
    host:'db4free.net',
    user:'se_team',
    password:'nopassword@123',
    database:'toll_collections'
    
  
//    host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'toll_collection'

    
});

module.exports = cnn;

