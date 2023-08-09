import { Mpesa } from "mpesa-api";

const mpesa = new Mpesa(credentials, environment);

const credentials = {
    clientKey: process.env.mpesaClientKey,
    clientSecret: process.env.mpesaClientSecret,
    initiatorPassword: process.env.mpesaInitiatorPassword,
};

const environment = "production";

console.log(req.body.cartItems);

mpesa
.c2bsimulate({
    ShortCode: 9245163,
    Amount: 5,
    Msisdn: 254111225811,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://tinypesa.com/millimageatery", {
     method: 'POST',
     headers: {
         Apikey: "Ev15EZlIj6Y",
         "Content-type": 'application/x-www-form-urlencoded',
     },
     body: "name=Juicy caffe&description=Order smoothies near you&amount=50&msisdn=0111225811&account_no=50&link_mode=1 or 2 or 3",
    }).then (() => {
      console.log('Sent');
    })
   }

   var url = "https://tinypesa.com/api/v1/express/create_link";

fetch(url, {
    body: "name=Juicy caffe&description=Order smoothies near you&link_mode=1 or 2 or 3&short_code=123456&account_number=sales&bank=uuid&bank_acc_no=011342436400&call_back_url=https://ip or https://domain",
    headers: {
        Apikey: "erwyuweoyf",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
});