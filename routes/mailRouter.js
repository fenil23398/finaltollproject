var express=require('express');
var router=express.Router();
var mail=require('../models/mail');
router.get('/',function(req,res,next){
    mail.sendMail(function(){
        if(err){
            res.json(err);
        }
        else{
            res.json("successfully send email");
        }
    });
});
router.post('/', function (req, res, next) {

    mail.sendMail(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            return res.json({
                success: true,
                msg: 'sent'
            });
        }
    });
});
module.exports=router;