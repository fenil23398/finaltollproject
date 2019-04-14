var db=require('../connection');
var citypath={
  
    getcities:function(callback){
        
        return db.query("SELECT Distinct(city1) from pair_tbl",callback);
                         
    },
    getcitypath:function(id1,id2,callback)
    {
        return db.query("select distinct(toll_id) from pair_to_toll where pair_id= (select pair_id from pair_tbl where city1=? and city2=?  or city1=? and city2=?)",[id1,id2,id2,id1],callback);
    },
}
module.exports=citypath;