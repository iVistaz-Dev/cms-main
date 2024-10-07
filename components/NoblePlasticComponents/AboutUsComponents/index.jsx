"use client";
import React, { useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./Banner";
import AboutUsContent from "./AboutUsContent";

const index = () => {
  const section1Ref = useRef(null);
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header onClick={scrollToSection1} />
      <Banner />
      <AboutUsContent />
      <Footer ref={section1Ref} />
    </div>
  );
};

export default index;
