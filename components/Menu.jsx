import React from 'react';
import Link from 'next/link';

import { urlFor } from "../utils/client";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const Menu = ({ food: { image, title, price, slug } }) => {
  return (
        <Link href={`/menuitem/${slug.current}`}>
            <div 
              className={`mt-5 w-full flex items-center justify-center bg-white flex-col`}
              >
              <div className="w-full max-w-sm rounded overflow-hidden bg-gray-100 rounded-lg text-white dark:bg-orange-600">
              <img
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="w-full"
              />
              <div className="px-6 py-4">
                <div className="text-gray-200 dark:text-gray-200 font-bold text-xl mb-2">
                   {title}
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">      
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ksh. {price}
                </p>
              <button className="relative inline-flex items-center justify-start ml-5 mb-1 px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
                  Pick Me.
                  </span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <ShoppingBagIcon className="h-6 w-6 cursor-pointer text-orange-600 opacity-75 transition hover:opacity-100 inline-block ml-35" />
                  {" "}Pick Me.
                  </span>
              </button>
               </div>
              </div>
             </div>
        </Link>
  )
}

export default Menu