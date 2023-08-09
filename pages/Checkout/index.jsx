import React, { useEffect, useState } from 'react';

import logo from "../../img/logo/mvv.png";
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { millimag } from "../../img/banner/bradcam.jpeg";
import { client } from '../../utils/client';
import axios from 'axios';
import useAuthStore from "../../store/authStore";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CheckoutPage from '../../components/CheckoutPage';

const Checkout = ({ socialsData }) => {
  
    return (
      <div className="relative bg-white pb-2 h-full justify-center items-center">
         <CheckoutPage />
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
  

export default Checkout