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
const page = () => {
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
      // once: true,
    });
  });
  AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
  return (
    <div>
        <Vlife/>
        <CarouselVlife />
        <OurRegion />
        <OurCommunities />
        <VlifeRoles />
        <Support/>
        <Partners/>
        <Form />
        <Footer/>
    </div>
  )
}

export default page