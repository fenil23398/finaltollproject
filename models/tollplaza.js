var db=require('../connection');
var tollplaza={

    getAllTollPlaza:function(callback){
        return db.query("select * from toll_plaza",callback);       
    },
    getAllTollPlazaById:function(id,callback){
        return db.query("select * from toll_plaza tp,toll t where t.toll_id=tp.toll_plaza_id and tp.toll_plaza_id=?",[id],callback);
    }
}
module.exports=tollplaza;
