import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import { urlFor } from '../utils/client';

const Landing = ({ landingBanner }) => {

  const Div = styled.div` 
flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center; 

.container {
  height: 100vh;
  width: 100%;
  position: relative;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  color: #ff6500;
  font-size: 120px;
  font-weight: 600;
}

.title-large {
  height: 130px;
  margin-left: -5px;
  opacity: 0.1;
}

.img-container {
  display: inline-block;
  overflow: hidden;
  margin-left: -2.8px;
  margin-right: -2.8px;
  width: 170px;
  vertical-align: top;
  border-radius: 0px 0px 80px 80px;
  animation-name: flow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-delay: -2s;
  transition-timing-function: cubic-bezier(0,.57,1,.46);
  box-shadow: 2px 2px 16px 2px rgba(0,0,0,0.5);
}

.second-animation {
  animation-delay: -1.5s;
}

.third-animation {
  animation-delay: -1s; 
}

.fourth-animation {
  animation-delay: -0.5s; 
}

.fifth-animation {
  animation-delay: 0s; 
}

.sixth-animation {
  animation-delay: 0.5s; 
}
  
.seventh-animation {
  animation-delay: 1s;
}

.img {
  object-fit: cover;
  width: 170px;
  height: 100vh;
  margin-top: -60px;
}

.nba {
  margin-top: -20px;
}

@keyframes flow {
  0% {height: 20%; border-radius: 0px 0px 30px 30px;}
  50% {height: 90%; border-radius: 0px 0px 100px 100px;}
  100% {height: 20%; border-radius: 0px 0px 30px 30px;}
}

@media only screen and (max-width: 1200px) {
  #img-7 {
    display: none;
  }
}

@media only screen and (max-width: 1028px) {
  #img-1 {
    display: none;
  }
}

@media only screen and (max-width: 860px) {
  #img-6 {
    display: none;
  }
}

.titletext {
  font-size: 64px;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    font-size: 56px;
  }
}

.text {
  margin-top: 30px;
}

a {
  display: block;
  margin-top: 40px;
  padding: 14px 42px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
`;

  return (
  <>
    <Div>
 <div className="container bg-white">
 <h1 className="title">Millimag</h1>
  <div id="img-1" className="img-container">
    <img
      className="img"
      src="https://images.unsplash.com/photo-1589779137147-3d388746b765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxwaGFiZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    />
  </div>
  <div className="img-container second-animation">
    <img
      className="img"
      src="https://images.unsplash.com/photo-1468528885091-58bab38a6632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxhbHBoYWJldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    />
  </div>
  <div className="img-container third-animation">
    <img
      className="img"
      src="https://images.unsplash.com/photo-1605794471115-ab163079ca72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFscGhhYmV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    />
  </div>
  <div className="img-container fourth-animation">
    <img className="img nba" src="https://plus.unsplash.com/premium_photo-1677706394145-4365a67dcc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHRlciUyMEV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
  </div>
  <div className="img-container fifth-animation">
    <img className="img" src="https://images.unsplash.com/photo-1579325065136-616930e0f896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFscGhhYmV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
  </div>
  <div id="img-6" className="img-container sixth-animation">
    <img
      className="img"
      src="https://images.unsplash.com/photo-1617126578357-af702557a7dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxhbHBoYWJldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    />
  </div>
  <div id="img-7" className="img-container seventh-animation">
    <img
      className="img"
      src="https://images.unsplash.com/photo-1568179576330-bf2e6e4a30fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdlbGNvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    />
  </div>
</div>
   <div>       
      <p className="titletext">Eat Better, Feel Better.</p>
        <p className="text">Don't you just love good rabbit meals.</p>
        <Link href="/Meals">Buy Now</Link>
        </div>
      </Div>
  </>
  );
};

export default Landing