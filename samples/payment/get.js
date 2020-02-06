/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

//var paymentId = "PAY-0XL713371A312273YKE2GCNI";
var paymentId = "PAYID-LY4VSYQ3189542736475254D";

paypal.payment.get(paymentId, function (error, payment) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
    }

});
