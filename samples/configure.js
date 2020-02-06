var paypal = require('../');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AeC-gBlnsj4a1ftkU7FWJduru9X4mGJr576aSxPbk0zzej9Ays1Vi8Ex6AnNy275Az974_pRKHlLj2Ir',
    'client_secret': 'ENToBGQtsrXMVIGpaygh-E6lnJxWRgpy2802Gl6v6igXHt1oTt9-vRxM1oNimytlzceN3gV_EIstPWAB',
    'headers' : {
		'custom': 'header'
    }
});
