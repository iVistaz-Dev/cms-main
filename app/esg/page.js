"use client"
import React, { useRef, useEffect } from "react"
import Header from "../../components/Esg/Header"
import Banner from "../../components/Esg/Banner"
import Footer from "../../components/Esg/Footer"
import GlobalImpact from "../../components/Esg/GlobalImpact"
import Outcome from "../../components/Esg/Outcome"
import DifferentSectors from "../../components/Esg/DifferentSectors"
import Vision from "../../components/Esg/Vision"
import ContactUs from "../../components/Esg/Contact"
import OurTeam from "../../components/Esg/OurTeam"
import Seo from "../../components/Seo/Seo"
import AOS from "aos"
import "aos/dist/aos.css"
const seoField = {
  title: "Catalysing Net-Positive Value Chains for Sustainability",
    description:
      "Embrace holistic sustainability by integrating responsible practices throughout the value chain, focusing on people, planet, and lasting sustainable outcomes.",
  path: "esg",
  metaImage: "/social.png",
  pageType: "WebSite",
}
export default function Home() {

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  return (
    <>
      <Seo {...seoField}/>
      <Header onClick={scrollToSection1} />
      <Banner />
      <GlobalImpact />
      <Outcome onClick={scrollToSection1} />
      <DifferentSectors />
      <Vision />
      <OurTeam />
      <ContactUs ref={section1Ref} />
      <Footer />
    </>
  )
}
