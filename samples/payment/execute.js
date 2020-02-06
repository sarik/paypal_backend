/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

var create_payment_json = {
    "intent": "authorize",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://www.google.com",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        for (var index = 0; index < payment.links.length; index++) {
        //Redirect user to this endpoint for redirect url
            if (payment.links[index].rel === 'approval_url') {
                console.log(payment.links[index].href);
            }
        }
        console.log(payment);
    }
});

var execute_payment_json = {
    "payer_id": "XZVHUR4VR3ZPJ",
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
};

//https://www.google.com/?paymentId=PAYID-LY4V5SA20G049307F016983H&token=EC-64C43829UM249233S&
//PayerID=XZVHUR4VR3ZPJ&gws_rd=ssl
var paymentId = 'PAYID-LY4V5SA20G049307F016983H';

paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
    }
});
