import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Payment = () => {
 const [mpesaToggled, setMpesaToggled] = useState(false);
 const [numberState, setNumberState] = useState("");
 

  const handleSubmit = (e) => {
   e.preventDefault();
   
   fetch("https://tinypesa.com/api/v1/express/initialize", {
    method: 'POST',
    headers: {
        Apikey: "Ev15EZlIj6Y",
        "Content-type": 'application/x-www-form-urlencoded',
    },
    body: "amount=50&msisdn={numberState}&account_no=50",
   }).then (() => {
     return (
     console.log('Sent'));
   })
  }

  return (
    <div className="flex min-h-screen items-center justify-start bg-white">
    <div className="mx-auto max-w-lg">
    <h1 className="text-4xl pl-1 font-medium text-black">Payment Options.</h1>
    <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
    <p className="text-sm text-gray-600 flex items-center">Choose to pay via Mpesa</p>
    <br></br>
      <button type="button" 
      className="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
      onClick={() => setMpesaToggled(!mpesaToggled)}
      >
       <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
        Pay with Mpesa
      </button>
      { mpesaToggled && 
    <div className="antialiased w-88 h-65 bg-White text-gray-400 font-inter p-5">
    <div className="container mx-auto">
      <div>
        <div id="title" class="text-center my-4">
          <h1 className="font-bold text-4xl text-black">Pay via Mpesa Till Number.</h1>
          <p className="text-light text-green-600 text-4xl pt-2 pb-2">
             9245163
          </p>
          <p className="text-light text-red-600 text-xl pt-2 pb-2">
            NB.. Once payment is made to the above Till number fill in your Information starting with 
            your phone number, Email Address, Location of Delivery, First and last name.
          </p>
               </div>
              </div>
            </div>
           </div>}
      <p>Or go <Link href="/"><button className="transition duration-500 ease hover:bg-purple-500 inline-block bg-pink-600 text-lg rounded-full text-white px-8 mt-16 py-3 cursor-pointer">Back</button></Link></p>
    </form>
    </div>
    </div>
  )
}

export default Payment