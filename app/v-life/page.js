'use client'
import React, { useEffect } from 'react'
import Vlife from "../../components/VLifeComponents/vlife"
import CarouselVlife from "../../components/VLifeComponents/CaouselVlife"
import OurRegion from "../../components/VLifeComponents/OurRegion"
import OurCommunities from "../../components/VLifeComponents/OurCommunities"
import VlifeRoles from "../../components/VLifeComponents/VlifeRoles"
import Partners from "../../components/VLifeComponents/Partners"
import Support from "../../components/VLifeComponents/Support"
import Form from "../../components/VLifeComponents/Form"
import Footer from "../../components/VLifeComponents/Footer"
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        delay: 0,
        duration: 400,
        easing: "ease",
        disable: () => window.innerWidth < 800,
      });
    }
  }, []);

  return (
    <div>
      <Vlife />
      {/* <CarouselVlife /> */}
      {/* <OurRegion /> */}
      {/* <OurCommunities /> */}
      {/* <VlifeRoles /> */}
      {/* <Support /> */}
      {/* <Partners /> */}
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default Page;
