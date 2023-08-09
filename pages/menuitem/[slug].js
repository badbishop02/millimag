import React from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Menu from "../../components/Menu";

import { client, urlFor } from "../../utils/client";
import { UStateContext } from '../../context/StateContext';


export default function itemDetails ({ foods, food, socialsData }) {
  //destructure the food to get the details in it.
  const useStateContext = UStateContext;
  const { image, title, detail, price, glovo, boltfood } = food;
  const { decQty, incQty, qty, onAdd, setShowCart } = UStateContext();

  return (
  <>
<Navbar />
 <section className="text-gray-400 bg-white body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img 
      alt="ecommerce" 
      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
      src={urlFor(image && image[0])}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Our Menu</h2>
        <h1 className="text-black text-3xl title-font font-medium mb-1">{title}</h1>
        <div className="flex mb-4">
        <Link href="/Reviews">
          <span className="flex items-center">
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-white">
              Our Reviews.
            </p>
          </div>
          </span>
        </Link>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{detail}</p>
        <div className="flex mt-6 pb-5 border-b-2 border-gray-800 mb-5">
          <div className="flex ml-6">
            <div className="relative">
            

<div className="custom-number-input h-10 w-32 mb-5">
  <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
    quantity:
  </label>
  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button 
      data-action="decrement" 
      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
       onClick={decQty}
      >
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <span 
    type="number" 
    className="outline-none justify-center focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black outline-none" 
    name="custom-input-number" 
    placeholder="1" 
    >
      {qty}
    </span>
  <button 
   data-action="increment" 
   className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
   onClick={incQty}
   >
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
          </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-black">Ksh. {price}</span>
  
        <a className="inline-flex overflow-hidden ml-3 text-white bg-gray-900 rounded group">
          <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </span>
          <button onClick={() => onAdd(food, qty)} className="pl-4 pr-5 py-2.5">Add to Cart</button> 
          </a>
          
          <button className="rounded-full w-10 h-10 bg-black p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <br></br>
        <a className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
          <span className="px-3.5 py-2 text-white bg-green-500 group-hover:bg-green-600 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </span>
          <button href={glovo} className="pl-4 pr-5 py-2.5">Glovo</button> 
          </a>
          <br></br>
        <div className="pt-5">
        <a className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
          <span className="px-3.5 py-2 text-white bg-orange-500 group-hover:bg-orange-600 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </span>
          <button href={boltfood} className="pl-4 pr-5 py-2.5">Bolt food</button> 
          </a>
        </div>
      </div>
    </div>
       <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
            {foods.map((item) => (
                <Menu key={item._id} food={item} />
              ))}
            </div>
          </div>
      </div>
  </div>
</section>

 <Footer socialsInfo={socialsData?.length && socialsData[0]} />
  </>
  )
}

// we get the food data but with the slug current we specify to get only the current data.
export const getStaticPaths = async () => {
  const query = `*[_type == "food"] {
    slug {
      current
    }
  }`;

  const foods = await client.fetch(query);
//return the paths and map through the food items to find the current food item
  const paths = foods.map((food) => ({
    params: { 
      slug: food.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
};

//getStaticProps gets data from Headless CMS and populates it before the page loads.
// we can destructure the url query from the params for anymore uses of the url query using params.

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "food" && slug.current == '${slug}'][0]`;
  //we will also fetch similar products with the query below.
  const foodsQuery = '*[_type == "food"]'
  //get the individual product or food below
  const food = await client.fetch(query);
  //fetch all related products 
  const foods = await client.fetch(foodsQuery);

  const socialsQuery = '*[_type == "socialmedia"]';
  const socialsData = await client.fetch(socialsQuery);
  
  return {
    props: { foods, food, socialsData }
  }
}
