import React from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client, urlFor } from "../../utils/client";
import Photos from '../../components/Photos';

const Gallery = ({ galleryData, socialsData }) => {
  return (
    <div className="bg-white">
    <Header />

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x scroll-add pt-5">
  {galleryData?.map((gallery) => (<Photos key={galleryData._id} gallery={gallery} />  ))};
</div>

    <Footer socialsInfo={socialsData?.length && socialsData[0]} />
    {/* </Layout> */}
  </div>
  )
}

export const getServerSideProps = async () => {
 
  const galleryQuery = '*[_type == "gallery"]';
  const galleryData = await client.fetch(galleryQuery);
  
  const socialsQuery = '*[_type == "socialmedia"]';
  const socialsData = await client.fetch(socialsQuery);

  return {
    props: { galleryData, socialsData }
  }
}

export default Gallery