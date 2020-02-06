/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var webhookId = "70Y03947RF112050J";

paypal.notification.webhook.del(webhookId, function (error, response) {
    if (error) {
        throw error;
    } else {
        console.log("webhook deleted");
        console.log(response.httpStatusCode);
    }
});
