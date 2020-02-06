/* Copyright 2015-2016 PayPal, Inc. 

Execute a billing agreement after it has been created. See 
billing_agreements/create.js to see a sample for creating an 
agreement.

*/
"use strict";

var paypal = require('../../../');
require('../../configure');

var paymentToken = 'BA-3EN36227S1549541S';

//Retrieve payment token appended as a parameter to the redirect_url specified in
//billing plan was created. It could also be saved in the user session
paymentToken = 'EC-2V0782854X675410W';

paypal.billingAgreement.execute(paymentToken, {}, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Billing Agreement Execute Response");
        console.log(JSON.stringify(billingAgreement));
    }
});
