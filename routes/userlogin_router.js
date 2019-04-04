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

  router.put('/',function(req,res){
    Users.updateUser(req.body,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    })
  });

  module.exports=router;
