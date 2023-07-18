"use client"
import React from 'react'
import Image from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={null}>
        <img
          className="d-block w-100"
          src="Demo-landing-slide.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="coming-soon.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="coming-soon.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="coming-soon.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    <div>
      <h1 className='text-[#CB1F13] text-center pt-[96px] pb-[32px] font-alegreya'>A Fountain Explodes... A Scroll Discovered... An Adventure Begins </h1>
      <p className='text-center text-lg'>Set in Spanish Inquisition Spain, Unscrolled takes you ona journey of self discovery. 
        
        <br/> You'll travel the world, play action games, and make important decisions. </p>
        <div className='ml-[55%] mt-[-65px]'>
        <img src='critical-thinking.png' />
        </div>
        <div className='flex gap-10 justify-center mb-10'>
          <img src='apple.png' className='gap-3'/>
          <img src='google-play.png'/>
        </div>
    </div>
 
    </>
  );
}

export default Homepage
