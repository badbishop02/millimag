import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useRouter } from 'next/router';
import millimag from "../img/logo/mm.png";

import Cart from "./Cart";
import { UStateContext } from "../context/StateContext";

import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
    ShieldCheckIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";

const Navbar = () => {
      const { showCart, setShowCart, totalQuantities } = UStateContext();
      const [isOpen, setIsOpen] = useState(false);
      const user = false;
      const [searchValue, setSearchValue] = useState('');
      const router = useRouter();
      
      const handleSearch = (e) => {
         e.preventDefault();
         
         if(searchValue) {
           router.push(`/search/${searchValue}`);
         }
       };     

      return (
        <div>
          <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  <Image 
                    src={ millimag }
                    alt="user image"
                    className="cursor-pointer rounded-full"
                    width={85}
                    height={85}
                  />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                         Home.
                      </p>
                    </Link>
                    <Link href="/About">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                        About Us.
                      </p>
                    </Link>
                    <Link href="/Reservations">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                         Reservations.
                      </p>
                    </Link>
                    <Link href="/Contact">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                         Contacts.
                      </p>
                    </Link>
                    <Link href="/Gallery">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                         Gallery.
                      </p>
                    </Link>

                     <Link href="/Events">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                         Events.
                      </p>
                    </Link>

                    <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-black px-8 py-3 rounded-full text-sm text-white hover:text-gray-200  shadow-xl hover:shadow-2xl hover:shadow-orange-500/80 shadow-orange-400/40 hover:bg-orange-500">Contact Us</button>                     
    
                  <button className="cursor-pointer pl-9 pt-2" onClick={() => setShowCart(true)}>
                    <ShoppingBagIcon className="cart-icon" />
                   <span className="cart-item-qty">{totalQuantities}</span>
                  </button>
                    </div>
                    {showCart && <Cart />}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <div className="flex items-center">
             
        </div>
                  <button className="cursor-pointer mr-5" onClick={() => setShowCart(true)}>
                    <ShoppingBagIcon className="cart-icon" />
                   <span className="cart-item-qty">{totalQuantities}</span>
                   {showCart && <Cart />}
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 hover:shadow-md shadow-gray-400 text-gray-600 body-font">
                    <Link href="/">
                    <p
                      className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                    >
                       Home.
                    </p>
                    </Link>
                    <Link href="/Contact">
                    <p
                      className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                    >
                        Contacts.
                    </p>
                    </Link>
                    <Link href="/About">
                    <p
                      className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                    >
                        About Us.
                    </p>
                    </Link>
                    <Link href="/Reservations">
                    <p
                      className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                    >
                       Reservations.
                    </p>
                    </Link>
                    <Link href="/Gallery">
                    <p 
                      className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                    >
                       Gallery.
                    </p>
                    </Link>
                    <Link href="/Events">
                      <p
                        className="text-black hover:shadow-md hover:shadow-orange-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-orange-500 rounded-lg py-1 px-2 hover:text-gray-900"
                      >
                        Events.
                      </p>
                    </Link>
                  </div>
                  <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-black px-8 py-3 rounded-full text-sm text-white hover:text-gray-200  shadow-xl hover:shadow-2xl hover:shadow-orange-500/80 shadow-orange-400/40 hover:bg-orange-500">Contact Us</button> 
                </div>
              )}
            </Transition>
          </nav>
        </div>
      )
};

export default Navbar;