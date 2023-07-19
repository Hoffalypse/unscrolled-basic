"use client";
import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import {
  CarouselOpen,
  TopText,
  Hero,
  UpToYou,
  Features,
  Reviews,
} from "./Landing";

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
      <Features />
      <Reviews />
      {/* <div className="owl mt-14">
        <div className="  ">
          <div className=" relative">
            <p className="text-white text-lg">
              Download the game and start your journey now. A vast, open world
              of endless possibility awaits. Join now and tell your story!
            </p>
          </div>
        </div>
      </div> */}
<div class="owl my-14 rounded mx-20">
  <div class="relative bg-cover bg-center owl flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 h-full flex items-center pl-10">
      <p class="text-white text-lg">
        Download the game and start your journey now. A vast, open world of endless possibility awaits. Join now and tell your story!
      </p>
    </div>
    <div class="w-full md:w-1/2 h-full gap-3 flex flex-col md:flex-row items-center justify-end pr-10 mt-4 md:mt-0">
      <img src="apple.png" alt="apple link" class="w-48 mb-3 md:mb-0 md:mr-3"/>
      <img src="google-play.png" alt="google link" class="w-48"/>
    </div>
  </div>
</div>



    </>
  );
};

export default Homepage;
