import React from "react";
import { Row, Col } from "react-bootstrap";

const UpToYou = () => {
  return (
    <div>
      <div className="mt-10">
        <Row className="pt-10 text-center">
          <Col xs={6}>
            <div className="">
              <h2 className="text-center text-[50px] mt-20 w-4/5 ml-20">
                It will be up to you to decide who to trust
              </h2>
              <div className="flex justify-end mt-[-5%]">
                <img src="concretize-values.png" className="w-2/5" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center">
              <img src="gamecap-1.png" />
            </div>
          </Col>
        </Row>
        <Row className="pt-10 text-center">
          <Col>
            <div className="flex justify-center">
              <img src="gamecap-2.png" />
            </div>
          </Col>
          <Col>
            <div className="">
              <h2 className="text-center text-[50px] mt-20 w-4/5 ml-20">
                It will be up to you to decide which way to go
              </h2>
              <div className=" mt-[-30px]">
                <img src="build-decision.png" className="w-2/5" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-10 text-center">
          <Col xs={6}>
            <div className="">
              <h2 className="text-center text-[50px] mt-20 w-4/5 ml-20">
                It will be up to you to discover the treasure
              </h2>
              <div className="flex justify-end mt-[-30px]">
                <img src="problem-solving.png" className="w-2/5" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center">
              <img src="gamecap-3.png" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UpToYou;
