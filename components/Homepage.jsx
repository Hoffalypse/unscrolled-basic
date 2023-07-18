"use client";
import React from "react";
import Image from "react-bootstrap";
import { CarouselOpen, HeroText } from "./Landing";

const Homepage = () => {
  return (
    <>
      <CarouselOpen />
      <HeroText />
      <div className="bg-[#FBDCA0] bg-hero-pattern ">
        <br />
        <div className="mt-5 flex justify-center">
          <img src="Hero.png" />
        </div>
        <div className="text-center">
          <h1 className="text-[#CB1F13] text-center font-alegreya mt-5 text-[60px] font-bold">
            Uncover Secrets
          </h1>
          <p className="mx-5 md:px-32">
            Frances discovers that the family he thought he knew, was never his
            at all. He finds a scroll that sets him on a path self-discovery to
            find out who he truly is and where he comes from. Armed with nothing
            but perseverance, he sets out with his trusty bird sidekick, Wiser,
            to uncover clues left by his family and find the truth.
          </p>
          <br />
          <br />
          <p className="mx-5 md:px-32">
            You will be Frances. You will go on an amazing journey meeting fun
            characters, traveling the world, and collecting hidden treasures.
          </p>
          <div className="ml-[55%] mt-[-65px]">
          <img src="positive-humor.png"/>
          </div>
          <img src="3d-mansion.png" className="w-full"/>
        </div>
      </div>
 
    </>
  );
};

export default Homepage;
