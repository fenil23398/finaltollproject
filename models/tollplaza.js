var db=require('../connection');
var tollplaza={

    getAllTollPlaza:function(callback){
        return db.query("select * from toll_plaza",callback);       
    },
    getAllTollPlazaById:function(id,callback){
        return db.query("select * from toll_plaza where toll_plaza_id=?",[id],callback);
    }
}
module.exports=tollplaza;
