import React from 'react';
import Link from 'next/link';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { client, urlFor } from "../../utils/client";
import Aboutus from '../../components/Aboutus';

const About = ({ aboutsData, socialsData }) => {
 // const { image, title, story } = abouts;
  return (
    <div>
    <Navbar />
    <Aboutus aboutInfo={aboutsData?.length && aboutsData[0]} />
    <Footer socialsInfo={socialsData?.length && socialsData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const aboutsQuery = '*[_type == "about"]';
  const aboutsData = await client.fetch(aboutsQuery);

  const socialsQuery = '*[_type == "socialmedia"]';
  const socialsData = await client.fetch(socialsQuery);

  return {
    props: { aboutsData, socialsData }
  }
}

export default About