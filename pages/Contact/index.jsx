import React, { useEffect, useState } from 'react';
import logo from "../../img/logo/mvv.png";
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import { useRouter } from 'next/router';
import { client, urlFor } from "../../utils/client";

import contact from '../../img/banner/contact.jpg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Contact = ({ socialsData }) => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [savingPost, setSavingPost] = useState(false);

    const router = useRouter();
 
    const handlePost = async () => {
      if ( email && fullname && phone && message) {
        setSavingPost(true);
  
        const doc = {
          _type: 'contact',
          fullname,
          email,
          phone,
          message,
        };
  
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, doc);
          
        router.push('/');
      }
    };

    const handleDiscard = () => {
        setSavingPost(false);
        setFullname('');
        setEmail('');
        setPhone('');
        setMessage('');
      };
  

  return (
    <div>
      <Navbar />
      <main className="flex bg-white overflow-hidden">
            <div className="flex-1 hidden lg:block">
                <Image 
                src={contact}
                className="w-full h-screen object-cover" 
                />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </h3>
                        <p className="mt-3">
                            We’d love to hear from you! Please fill out the form below.
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                value={fullname} 
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>Ke</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+254 700 123 456"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea 
                            required 
                            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button 
                            onClick={handlePost}
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                        <button 
                            onClick={handleDiscard}
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Clear
                        </button>
                    </form>
                </div>
            </div>
        </main>
     <Footer socialsInfo={socialsData?.length && socialsData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  
    const socialsQuery = '*[_type == "socialmedia"]';
    const socialsData = await client.fetch(socialsQuery);
  
    return {
      props: { socialsData }
    }
  }

export default Contact;