/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-ATFN-A9AM-FK8J-7ZEK";

var options = {
	"subject": "Past due",
    "note": "Canceling invoice",
    "send_to_merchant": true,
    "send_to_payer": true
};

//Cannot be in DRAFT status for cancelling
paypal.invoice.cancel(invoiceId, options, function (error, rv) {
	if (error) {
		console.log(error.response);
		throw error;
	} else {
		console.log("Cancel Invoice Response");
		console.log(rv);
	}
});
