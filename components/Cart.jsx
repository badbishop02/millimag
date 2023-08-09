import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { UStateContext } from '../context/StateContext';
import { urlFor } from '../utils/client';
import CheckoutForm from './CheckoutForm';

const Cart = () => {

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = UStateContext();

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = async () => {
    const response = await fetch('/api/mpesa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    mpesa.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper cart-scroll" ref={cartRef}>
      <div className="cart-container">

      <button type="button" onClick={() => setShowCart(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only text-black">Close modal</span>
            </button>
  
 
        {cartItems.length < 1 && (
          <div className="empty-cart text-black">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty.</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
              >
                Continue Shopping.
              </button>
            </Link>
          </div>
        )}
      
     
 <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-black dark:text-gray-100">
  <h2 className="text-xl font-semibold">Your cart</h2>
   {cartItems.length >= 1 && cartItems.map((item) => 
  <div key={item._id}>
    <ul className="flex flex-col divide-y divide-gray-700">
      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
            <img 
            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" 
            src={urlFor(item?.image[0])} 
            alt={item.title}
            />
            <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                        <h3 className="text-lg text-white font-semibold leading-snug sm:pr-8">
                          {item.title}
                        </h3>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">Ksh. {item.price}</p>
                        <p className="text-sm line-through dark:text-gray-600">{item.bprice}</p>
                    </div>
                </div>
                <div className="flex text-sm divide-x">
                    <button 
                     type="button" 
                     className="flex items-center px-2 py-1 pl-0 space-x-1"
                     onClick={() => onRemove(item)}
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect width="32" height="200" x="168" y="216"></rect>
                            <rect width="32" height="200" x="240" y="216"></rect>
                            <rect width="32" height="200" x="312" y="216"></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span className="">Remove</span>
                    </button>
                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Add to favorites</span>
                    </button>
                </div>
  <div className="flex flex-row h-10 w-1/2 rounded-lg relative bg-transparent mt-1">
    <button 
      data-action="decrement" 
      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
      onClick={() => toggleCartItemQuanitity(item._id, 'dec') }
      >
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <span 
    type="number" 
    className="outline-none justify-center focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black outline-none" 
    name="custom-input-number" 
    placeholder="1" 
    >
      {item.quantity}
    </span>
  <button 
   data-action="increment" 
   className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
   onClick={() => toggleCartItemQuanitity(item._id, 'inc') }
   >
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
            </div>
        </div>
    </li>
</ul>
      </div> 
      )}
    
      {cartItems.length >= 1 && (
    <div>
      <div className="space-y-1 text-right">
          <p className="text-purple-500">Total amount:
              <span className="font-semibold"> Ksh. {totalPrice}</span>
          </p>
          <br></br>
          <p className="text-sm dark:text-gray-400">Excludes delievery costs.</p>
          <br></br>
      </div>
      <div className="flex justify-end space-x-4">
       
          <button 
          onClick={() => setShowCart(false)} 
          className="cursor-pointer px-6 py-2 border rounded-md dark:border-orange-600">
            Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
        
        {/* CHECKOUT MODAL */}
          <button 
          type="button" 
          className="px-6 py-2 border rounded-md dark:bg-orange-600 dark:text-gray-900 dark:border-orange-600"
          onClick={() => setShowModal(true)}
          >
              <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
          </button>
      </div>
    </div>
        )}
        {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-orange-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-orange-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Delievery Form
                                        </h4>

                                        {cartItems.length >= 1 && (
                                        <CheckoutForm />
                                        )}
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-orange-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                               Deliever
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
       </div>
      </div>
    </div>
  )
}

export default Cart