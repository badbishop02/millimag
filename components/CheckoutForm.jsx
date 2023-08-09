import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

import { UStateContext } from '../context/StateContext';
import { urlFor } from '../utils/client';
import mpesa from "../img/banner/contact.jpg";

import Payment from "../components/Payment";

const CheckoutForm = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = UStateContext();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [savingPost, setSavingPost] = useState(false);
  
    const router = useRouter();
   
    const handlePost = async () => {
      if (name && email && lastname && phone && location) {
        setSavingPost(true);
  
        const doc = {
          _type: 'checkout',
          name,
          lastname,
          email,
          orders,
          phone,
          location,
        };
  
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, doc);
          
        router.push('/');
      }
    };
  
    const handleDiscard = () => {
      setSavingPost(false);
      setName('');
      setLastname('');
      setEmail('');
      setPhone('');
      setLocation('');
    };
  
  return (
<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
  <form method="post" role="form">
  <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase"> 
   Enter your Delievery Information.
 </h6>
    <section className="px-2 py-1 mb-4 bg-white border-2 border-t-8 border-orange-600 rounded w-72 dark:bg-gray-800">
    <section className="w-full">
      <header className="text-3xl text-center md:mt-5 dark:text-white">
         Total Purchase Price
      </header>
      <header className="justify-center w-full mb-2 text-center md:flex">
        <span className="text-6xl text-orange-600">{totalPrice}</span>
        <span className="text-2xl dark:text-white">ksh</span>
      </header>
      <ul className="p-1 mt-5 text-gray-600 text-md dark:text-gray-200">
      <Image 
                    src={ mpesa }
                    alt="mpesa tillnumber"
                    className="cursor-pointer rounded-full"
                    width={65}
                    height={65}
                  />
      </ul>
    </section>
  </section>
 <div className="flex flex-wrap">
   <div className="w-full lg:w-6/12 px-4">
     <div className="relative w-full mb-3">
       <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
         Phone Number
       </label>
       <input 
       type="number" 
       id="phone" 
       name="phone" 
       className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
       value={phone} 
       onChange={(e) => setPhone(e.target.value)}
       />
     </div>
   </div>
   <div className="w-full lg:w-6/12 px-4">
     <div className="relative w-full mb-3">
       <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
         Email address
       </label>
       <input 
       type="email" 
       id="email" 
       name="email" 
       className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
       value={email} 
       onChange={(e) => setEmail(e.target.value)}
       />
     </div>
   </div>
   <div className="w-full lg:w-6/12 px-4">
     <div className="relative w-full mb-3">
       <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
         Location
       </label>
       <input 
       type="location" 
       id="location" 
       name="location" 
       className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
       value={location} 
       onChange={(e) => setLocation(e.target.value)}
       />
     </div>
   </div>
   <div className="w-full lg:w-6/12 px-4">
     <div className="relative w-full mb-3">
       <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
         First Name
       </label>
       <input 
       type="text" 
       name="name" 
       id="name" 
       placeholder="Your Name" 
       className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
       value={name} 
       onChange={(e) => setName(e.target.value)}
       />
     </div>
   </div>
   <div className="w-full lg:w-6/12 px-4">
     <div className="relative w-full mb-3">
       <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
         Last Name
       </label>
       <input 
       type="text" 
       id="lastname" 
       placeholder="Your Name" 
       name="lastname" 
       className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
       value={lastname} 
       onChange={(e) => setLastname(e.target.value)}
       />
     </div>
     <br></br>
      <Payment />
   </div>
 </div>
</form>
</div>
  )
}

export default CheckoutForm