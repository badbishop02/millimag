import React, { useEffect, useState } from 'react';

import logo from "../img/logo/mvv.png";
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import millimag from "../img/banner/bradcam.jpeg";

import Navbar from './Navbar';

import axios from 'axios';
import useAuthStore from "../store/authStore";

const CheckoutPage = () => {
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
    <div className="flex flex-col justify-center items-center">
    <Image 
      className="h-full w-full md:w-auto max-w-none object-cover" 
      src={millimag}
      alt="millimag"
      width={1550}
      height={450} 
    />
       
       <div className="absolute top-0 z-1 w-full items-center">
       <Navbar />
       </div>

      <div className="text-center text-3xl mt-2 mb-7">
        <h1>Checkout</h1>
      </div>

  <div className="px-2 items-center justify-center">
    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
         <div className="text-center flex justify-between">
           <h6 className="text-black text-xl font-bold">
            Checkout Page.
           </h6>
      <button 
      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
      onClick={handlePost}
      >
        Checkout
        </button>
        <button 
      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
      type="submit" 
      onClick={handleDiscard}
      >
        Discard
        </button>
      </div>
    </div>
  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
   <form method="post" role="form">
     <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase"> 
      Your Information
    </h6>
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
      </div>
    </div>
  </form>
</div>
</div>
 <footer className="relative  pt-8 pb-6 mt-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      <div className="text-sm text-blueGray-500 font-semibold py-1">
      Made <a href="https://www.zerogroupe.com" className="text-blue-500 hover:text-gray-800" target="_blank"></a> by <a href="https://www.zerogroupe.com" className="text-red-500 hover:text-pink-200" target="_blank"> Zero Groupe</a>.
    </div>
   </div>
  </div>
</div>
</footer>
</div>
</section>
    </div>
    </div>
  )
}

export default CheckoutPage