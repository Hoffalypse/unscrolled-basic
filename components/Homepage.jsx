"use client"
import React from 'react'
import { Carousel } from 'react-bootstrap';

const Homepage = () => {
  return (
    <Carousel>
      <Carousel.Item>
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
  );
}

export default Homepage
