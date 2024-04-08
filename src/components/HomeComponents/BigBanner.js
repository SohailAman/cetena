import image from "../../assets/img/8b.png";
import React from "react";

const BigBanner = () => {
  return (
    <div className="mg__sec--tab">
      <img src={image} alt="" className="bg-banner" loading="lazy" />
    </div>
  );
};

export default BigBanner;
