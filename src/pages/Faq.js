import React from "react";
import Faqs from "../components/FaqComponents/Faq";
import Top from "../components/Top";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const Faq = () => {
  return (
    <div className=" ">
      <Top />
      <Header />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Faq;
