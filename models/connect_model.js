var db=require('../connection');

var conn={
    getdestination:function(id,callback){
        return db.query("select tp.* from connect_tbl c,toll_plaza tp,toll t where c.to=tp.toll_plaza_id and t.toll_id=tp.toll_plaza_id and c.from=?",[id],callback);
    }
}
module.exports=conn;