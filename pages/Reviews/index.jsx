import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReviewsPage from '../../components/ReviewsPage';
import ReviewsForm from '../../components/ReviewsForm';

import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import { client, urlFor } from "../../utils/client";
import { useRouter } from 'next/router';
import nano from '../../img/banner/bradcam2.jpeg';
import profile from "../../img/elements/a.jpg";

const Reviews = ({ reviewsData }) => {
  
  const [fullname, setFullname] = useState('');
  const [about, setAbout] = useState('');
  const [service, setService] = useState('');
  const [time, setTime] = useState('');
  const [review, setReview] = useState('');
  const [savingPost, setSavingPost] = useState(false);

  const router = useRouter();
 
  const handlePost = async () => {
    if (fullname && about && time && service && review) {
      setSavingPost(true);

      const doc = {
        _type: 'reviews',
        fullname,
        about,
        service,
        time,
        review,
      };

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, doc);
        
      router.push('/Reviews');
    }
  };

  const handleDiscard = () => {
    setSavingPost(false);
    setFullname('');
    setAbout('');
    setService('');
    setTime('');
    setReview('');
  };

  return (
  <>
   <Navbar />
   <div className='bg-gray-100'>
 <div className="px-4 py-12">
  <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-12">
    <div className="md:flex justify-center gap-8 items-center">
      <div>
        <Image 
        src={nano}
        alt="nano" 
        width={255} 
        height={255}       
        className="lg:block md:hidden block" 
        />
      </div>
      <div className='text-black'>
        <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
          Write a Review.
        </p>
        {/* Reviews Form Page */}

<div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 bg-red-600 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">i</div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Leave A Review.</h2>
            <p className="text-sm text-red-500 font-normal leading-relaxed">Avoid the use of inappropriate language.</p>
          </div>
        </div>
      
        <div className="divide-y divide-gray-200">
          <form method="post" role="form" className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Full Name</label>
              <input 
              type="text" 
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
              placeholder="Full Name" 
              value={fullname} 
              onChange={(e) => setFullname(e.target.value)} 
              />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">About</label>
              <input 
              type="text" 
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
              placeholder="What is the Review about." 
              value={about} 
              onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Review Date.</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input 
                  type="text" 
                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                  placeholder="25/02/2020" 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  />
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Service Ordered.</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input 
                  type="text" 
                  className="pr-4 pl-5 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                  placeholder="Service Done." 
                  value={service} 
                  onChange={(e) => setService(e.target.value)} 
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Review.</label>
              <input 
              type="text" 
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
              placeholder="Your Review." 
              value={review} 
              onChange={(e) => setReview(e.target.value)} 
              />
            </div>
          </form>
          <div className="pt-4 flex items-center space-x-4">
              <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
               onClick={handleDiscard} 
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg> 
                Cancel
              </button>
              <button 
              className="bg-black flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              onClick={handlePost} 
              >
                Say it.
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>     
    <Link href="/">
        <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-5 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden block">
          Home
        </button>
    </Link>
      </div>
    </div>
    <p className="text-black text-2xl mb-5 ml-10 mt-10">
       <u>Other Customers Reviews.</u>
    </p>
    {reviewsData?.map((reviews) => (<ReviewsForm key={reviewsData._id} reviews={reviews} />  ))};
  </div>
</div>
</div>
  </>
  )
}

export const getServerSideProps = async () => {
  const reviewsQuery = '*[_type == "reviews"]';
  const reviewsData = await client.fetch(reviewsQuery);

  const socialsQuery = '*[_type == "socialmedia"]';
  const socialsData = await client.fetch(socialsQuery);

  return {
    props: { reviewsData, socialsData }
  }
}

export default Reviews