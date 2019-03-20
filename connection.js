var mysql = require('mysql');
var cnn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'toll_collection'    
});
module.exports = cnn;