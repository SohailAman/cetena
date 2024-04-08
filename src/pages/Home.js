import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/HomeComponents/Banner";
import KeyPoints from "../components/HomeComponents/KeyPoints.js";
import Future from "../components/HomeComponents/Future.js";
import FlexItems from "../components/HomeComponents/FlexItems.js";
import PoweredBy from "../components/HomeComponents/PoweredBy.js";
import SocialLinks from "../components/HomeComponents/SocialLinks.js";
import BigBanner from "../components/HomeComponents/BigBanner.js";
import Top from "../components/Top.js";

const Home = () => {
  return (
    <div className=" ">
      <Top />
      <Header />
      <div className="my-[50px] my-home flex w-full justify-center px-4">
        <div className="z-10 w-full max-w-[1248px]">
          <div className="flex flex-col justify-center space-y-20">
            <Banner />
            <KeyPoints />
            <Future />
            <FlexItems />
            <PoweredBy />
            <BigBanner />
            <SocialLinks />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
