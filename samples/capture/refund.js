"use strict";

var paypal = require('../../');
require('../configure');

var refund_details = {
    "amount": {
        "currency": "USD",
        "total": "110.54"
    }
};

paypal.capture.refund("8F148933LY9388354", refund_details, function (error, refund) {
    if (error) {
        console.error(error);
    } else {
        console.log(refund);
    }
});
