import React, { useEffect, useState } from 'react';
import logo from "../../img/logo/mvv.png";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import millimag from "../../img/banner/bradcam.jpeg";

import axios from 'axios';
import useAuthStore from "../../store/authStore";

const Reservations = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');
  const [time, setTime] = useState('');
  const [events, setEvents] = useState('');
  const [orders, setOrders] = useState('');
  const [message, setMessage] = useState('');
  const [savingPost, setSavingPost] = useState(false);

  const router = useRouter();
 
  const handlePost = async () => {
    if (name && email && lastname && phone && people && time && events && orders && message) {
      setSavingPost(true);

      const doc = {
        _type: 'booking',
        name,
        lastname,
        email,
        orders,
        phone,
        people,
        time,
        events,
        message,
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
    setEvents('');
    setTime('');
    setOrders('');
    setPeople('');
    setMessage('');
  };

  return (
    <div className="relative bg-white pb-2 h-full justify-center items-center">
        <header className="w-full h-96 bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
        Make reservations 
        <span className="text-orange-600"> with us.</span>
      </h1>
      <p className="mt-5 text-center text-lg text-white opacity-70">
        Our Eatery location and services makes it convinient and ideal choice for event reservations.
      </p>
    </div>
  </header>
           
           <div className="absolute top-0 z-1 w-full items-center">
           <Navbar />
           </div>

          <div className="text-center text-3xl mt-2 mb-7">
            <h1>Reservations</h1>
          </div>

      <div className="px-2 items-center justify-center">
        <section className=" py-1 bg-blueGray-50">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
             <div className="text-center flex justify-between">
               <h6 className="text-black text-xl font-bold">
                Table Reservation.
               </h6>
          <button 
          className="bg-orange-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
          onClick={handlePost} 
          >
            Reserve
            </button>
            <button 
          className="bg-orange-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
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
              placeholder=" 0700 123 456"
              required
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

        <hr className="mt-6 border-b-1 border-blueGray-300" />

        <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
          More Details needed.
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
                Meals Orders
              </label>
              <input 
              type="text" 
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="orders" 
              id="orders"
              placeholder="Meal Orders" 
              value={orders} 
              onChange={(e) => setOrders(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
                Date and Time
              </label>
              <input 
              type="text" 
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="time" 
              id="time" 
              placeholder='Date and Time' 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
                Event
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="events" 
              id="events"
              placeholder="Event"
              value={events} 
              onChange={(e) => setEvents(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
              Number of People 
              </label>
              <input 
              type="text" 
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="people" 
              id="people" 
              placeholder="# of people" 
              data-rule="minlen:1"
              value={people} 
              onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300" />

        <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
          Your Message
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-black text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea 
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
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
          Made <p href="https://www.zerogroupe.com" className="text-blue-500 cursor-pointer hover:text-gray-800" target="_blank"></p> by <p href="https://www.zerogroupe.com" className="text-red-500 hover:text-blue-500 cursor-pointer" target="_blank"> Zero Groupe</p>.
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

export default Reservations