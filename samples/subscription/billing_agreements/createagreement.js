var paypal = require('../../../');
require('../../configure');
var url = require('url');

var isoDate = new Date();
isoDate.setSeconds(isoDate.getSeconds() + 4);
isoDate.toISOString().slice(0, 19) + 'Z';

var billingAgreementAttributes = {
    "name": "Fast Speed Agreement",
    "description": "Agreement for Fast Speed Plan",
    "start_date": isoDate,
    "plan": {
        "id": "P-5N078054A2149323DCTXV3HI"
    },
    "payer": {
        "payment_method": "paypal",
        "payer_info": {
            "email": "payer@example.com",
          }
    },
    "shipping_address": {
        "line1": "StayBr111idge Suites",
        "line2": "Cro12ok Street",
        "city": "San Jose",
        "state": "CA",
        "postal_code": "95112",
        "country_code": "US"
    }
};

paypal.billingAgreement.create(billingAgreementAttributes, function (error, billingAgreement) {
    if (error) {
        console.log(error,'happening in creating agreement');
        
        throw error;
    } else {
        console.log("Create Billing Agreement Response");
        //console.log(billingAgreement);
        for (var index = 0; index < billingAgreement.links.length; index++) {
            if (billingAgreement.links[index].rel === 'approval_url') {
                var approval_url = billingAgreement.links[index].href;
                console.log("For approving subscription via Paypal, first redirect user to");
                console.log(approval_url);

                console.log("Payment token is");
                console.log(url.parse(approval_url, true).query.token);
                // See billing_agreements/execute.js to see example for executing agreement 
                // after you have payment token
            }
        }
    }
});