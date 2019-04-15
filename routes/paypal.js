var express=require('express');
var router = express.Router();
var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AZmt8CgwX5EMJWI58AXl2na40Sh1NzO-pUvHCOIQwPxSp9_Bn1860QXxBtTztuE-kmcjaSFwQS8PCWk1',
    'client_secret': 'ECqbbgdb90a3WrklptMWpjA8oYtgcZ93YnCcUJ7KX84TQX-ReHuAJvl3KiKkPtWWSvam9SX-hGdekVqB'
});

router.get('/:rs', function (req, res) {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/executePayment",
            "cancel_url": "http://localhost:3000/cancelPayment"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "rs",
                    "currency": "INR",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "INR",
                "total": "rs"
            },
            "description": "This is the payment description."
        }]
    };


    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            res.json(error);
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.json(payment);
        }
    });
});

module.exports=router;