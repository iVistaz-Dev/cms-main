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

import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  const title = "Catalysing Net-Positive Value Chains for Sustainability"
  const desc =
    "Embrace holistic sustainability by integrating responsible practices throughout the value chain, focusing on people, planet, and lasting sustainable outcomes."
  const image =
    "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/blogs/1.png"

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
      <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://www.cms.org.in/esg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://cms.org.in/esg" />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
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
