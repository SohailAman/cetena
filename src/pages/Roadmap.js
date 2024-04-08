import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Top from "../components/Top.js";
import RoadMap from "../components/RoadMapComponents/RoadMap.js";

const Roadmap = () => {
  return (
    <div className=" ">
      <Top />
      <Header />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default Roadmap;
