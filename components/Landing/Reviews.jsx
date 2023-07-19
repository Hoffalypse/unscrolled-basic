import {Image, Row, Col } from "react-bootstrap";
import { kids, parents } from "@/constants";

const Reviews = () => {
  return (
    <>
    <div className="mt-12">
      <h1 className="pt-12 text-[#CB1F13] pl-40 mb-5 text-[60px]">What Kids Say About Unscrolled:</h1>
      </div>
      <div>
        <Row className="h-32">
        {kids.map((kid) => (
          <Col className="flex justify-center place-content-evenly h-32 ">
        
          <div className="bg-[#FEB119] rounded-lg w-3/5">
          <div className="flex justify-center mt-[-20px]">
            <img src={kid.photo} className="w-12 h-12"/>
            </div>
            <p className="text-center mt-8">"{kid.comment}"</p>
          </div>
          </Col>
        ))}
        </Row>
      </div>
      <div className="mt-12">
      <h1 className="pt-12 text-[#CB1F13] pl-40 mb-5 text-[60px]">What Parents Say About Unscrolled:</h1>
      </div>
      <div>
        <Row className="h-32">
        {parents.map((parent) => (
          <Col className="flex justify-center place-content-evenly h-32 ">
        
          <div className="bg-[#FEB119] rounded-lg w-3/5">
          <div className="flex justify-center mt-[-20px]">
            <img src={parent.photo} className="w-12 h-12"/>
            </div>
            <p className="text-center mt-8">"{parent.comment}"</p>
          </div>
          </Col>
        ))}
        </Row>
      </div>
      </>
  )
}

export default Reviews
