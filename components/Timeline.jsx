import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { textVariant } from "../utils/motion";
import { styles } from "../styles/styles";

import Millimag from "../img/banner/bradcam.jpeg";

import "react-vertical-timeline-component/style.min.css";

import { urlFor } from '../utils/client';

const Timeline = ({ events: { image, title, timespan, location, details } }) => {
  return (
    <VerticalTimeline>
    <VerticalTimelineElement
     className="vertical-timeline-element--work" 
     contentStyle={{ background: '#000', color: '#000' }}
     contentArrowStyle={{ borderRight: '7px solid', color: '#000' }}
     iconStyle={{ background: '#8000ff', color: '#000' }}
     
    >
      <p className="text-white pb-2">{timespan}</p>
     <Image 
      className="w-120 h-90" 
      src={urlFor(image)} 
      alt="magimages" 
     />
     <h3 className="vertical-timeline-element-title text-white pt-1">{title}</h3>
     <h4 className="vertical-timeline-element-subtitle text-white">{location}</h4>
     <p className="text-white">
       {details}
     </p>
    </VerticalTimelineElement>

    </VerticalTimeline>
  );
};

export default Timeline;