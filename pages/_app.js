import React from 'react';
import { Toaster } from 'react-hot-toast';  //pop-up on the window.

import { StateContext } from '../context/StateContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
 <StateContext>
  <Toaster />
   <Component {...pageProps} />
 </StateContext>
  )
}
