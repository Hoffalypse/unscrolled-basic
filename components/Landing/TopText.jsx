import React from "react";

const HeroText = () => {
  return (
    <div>
      <div>
        <h1 className="text-[#CB1F13] text-center pt-[96px] pb-[32px] font-alegreya">
          A Fountain Explodes... A Scroll Discovered... An Adventure Begins{" "}
        </h1>
        <p className="text-center text-lg">
          Set in Spanish Inquisition Spain, Unscrolled takes you ona journey of
          self discovery.
          <br /> You'll travel the world, play action games, and make important
          decisions.{" "}
        </p>
        <div className="ml-[55%] mt-[-65px]">
          <img src="critical-thinking.png" />
        </div>
        <div className="flex gap-10 justify-center mb-10">
          <img src="apple.png" className="gap-3" />
          <img src="google-play.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
