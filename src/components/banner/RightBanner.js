import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img className="w-[500px] z-10 lgl:ml-30" src={bannerImg} alt="" />
    </div>
  );
};

export default RightBanner;
