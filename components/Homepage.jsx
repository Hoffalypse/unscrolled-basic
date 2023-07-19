"use client";
import React from "react";
import {Image, Row, Col } from "react-bootstrap";
import { CarouselOpen, TopText, Hero, UpToYou } from "./Landing";

const Homepage = () => {
  return (
    <>
      <CarouselOpen />
      <TopText />
      <Hero />
      <UpToYou />
      <div>
      {/* <div className=" bg-island-bk w-full">
        
        <img src="island.png" className="w-full"/>
        <img src="apple.png" className="gap-3" />
          <img src="google-play.png" />
      </div> */}
      </div>
      <div className="bg-[#FBDCA0] bg-hero-pattern mt-5">
        <h1 className="pt-12 text-[#CB1F13] text-center text-[60px]">Features</h1>
        <div>
          <Row>
            <Col>
                <img src="feature-1.png"/>
                <p className="text-[#CB1F13] font-bold">01.</p>
                <p className="font-bold">Explore the World</p>
            </Col>
            <Col>
                <img src="feature-2.png"/>
                <p className="text-[#CB1F13] font-bold">02.</p>
                <p className="font-bold">Explore the World</p>
            </Col>
            <Col>
                <img src="feature-3.png"/>
                <p className="text-[#CB1F13] font-bold">03.</p>
                <p className="font-bold">Explore the World</p>
            </Col>
          </Row>
        </div>
      </div>
      
 
    </>
  );
};

export default Homepage;
