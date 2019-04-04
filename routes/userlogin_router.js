var express = require('express');
var router = express.Router();
var Users = require('../models/user_model');

router.post('/',function(req,res,next){
    Users.userlogin(req.body,function(err,rows){
      console.log(req.body);
      if(err)
      {
        res.json(err);
      }
      else{
        
        res.json(rows);
      }
  
    });
      
  });
  router.get('/:useremail', function(req, res) {

        Users.userEmailMatch(req.params.useremail, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
});
  module.exports=router;
