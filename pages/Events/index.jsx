import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Timeline from '../../components/Timeline';

import { client, urlFor } from "../../utils/client";

const Events = ({ timelineData, socialsData }) => {
  return (
    <div>
    <Navbar />
    <div className="px-2 items-center justify-center bg-white">
    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
         <div className="text-center flex justify-between">
           <h6 className="text-black text-xl font-bold hover:text-purple-700">
            Events.
           </h6>
    <form> 
    <div className="rounded-full">
    {timelineData?.map((events) => (<Timeline key={timelineData._id} events={events} />  ))};
    </div>
  </form>
  </div>
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
    <Footer socialsInfo={socialsData?.length && socialsData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
    const eventsQuery = '*[_type == "events"]';
    const timelineData = await client.fetch(eventsQuery);

    const socialsQuery = '*[_type == "socialmedia"]';
    const socialsData = await client.fetch(socialsQuery);
  
    return {
      props: { timelineData, socialsData }
    }
  }

export default Events