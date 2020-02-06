var paypal = require('../../');
require('../configure');
var execute_payment_json = {
    "payer_id": "XZVHUR4VR3ZPJ",
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "100.00"
        }
    }]
};

//https://www.google.com/?paymentId=PAYID-LY5K3BI9E183934KE2558356&token=EC-3NE13231SP703814Y&
//PayerID=XZVHUR4VR3ZPJ&gws_rd=ssl

//https://www.google.com/?paymentId=PAYID-LY4V5SA20G049307F016983H&token=EC-64C43829UM249233S&
//PayerID=XZVHUR4VR3ZPJ&gws_rd=ssl
//state is approved
var paymentId = 'PAYID-LY5K3BI9E183934KE2558356';

paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
    }
});