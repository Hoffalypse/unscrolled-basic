
import {Image, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <div className="bg-[#FBDCA0] bg-hero-pattern mt-5">
    <h1 className="pt-12 text-[#CB1F13] text-center text-[60px]">Features</h1>
    <div className="flex place-content-around flex-wrap">
      <Row className="py-10 ">
        <Col className="flex flex-col justify-center">
            <img src="feature-1.png" width={400}/>
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
  )
}

export default Features
