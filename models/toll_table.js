var db=require('../connection');
var tollplaza={

    getAllTollPlazaById:function(id,callback){
        return db.query("select t.* from toll t,toll_plaza tp where tp.toll_plaza_id=t.toll_plaza_id and tp.toll_plaza_id=?",[id],callback);
    }
}
module.exports=tollplaza;
