"use client";
import React from "react";
import {Image, Row, Col } from "react-bootstrap";
import { CarouselOpen, TopText, Hero } from "./Landing";

const Homepage = () => {
  return (
    <>
      <CarouselOpen />
      <TopText />
      <Hero />
      <div className="mt-10">
        <Row className="pt-10 text-center">
          <Col xs={6}>
          <div className="">
          <h2 className="text-center text-[50px] mt-5 w-4/5 ml-20">It will be up to you to decide who to trust</h2>
          <div className="flex justify-end mt-[-30px]">
          <img src="concretize-values.png" className="w-2/5"/>
          </div>
          </div>
          </Col>
          <Col>
          <div className="flex justify-center">
          <img src="gamecap-1.png"/>
          </div>
          </Col>
        </Row>
        <Row className="pt-10 text-center">
        <Col>
          <div className="flex justify-center">
          <img src="gamecap-2.png"/>
          </div>
          </Col>
          <Col >
          <div className="">
          <h2 className="text-center text-[50px] mt-5 w-4/5 ml-20">It will be up to you to decide which way to go</h2>
          <div className=" mt-[-30px]">
          <img src="build-decision.png" className="w-2/5"/>
          </div>
          </div>
          </Col>
          
        </Row>
      </div>

 
    </>
  );
};

export default Homepage;
