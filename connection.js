var mysql = require('mysql');
var cnn = mysql.createPool({
    host:'db4free.net',
    user:'se_team_2',
    password:'nopassword1234',
    database:'toll_collection'
    
  
//    host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'toll_collection'

    
});

module.exports = cnn;

