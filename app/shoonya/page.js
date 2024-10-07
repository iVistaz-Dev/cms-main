"use client"
import React, { useRef, useEffect } from "react"
import Banner from "../../components/ShoonyaComponents/Banner"
import Section from "../../components/ShoonyaComponents/Section1NetZero"
import Footer from "../../components/ShoonyaComponents/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

export default function page() {
  const title = "Empowering MSMEs: Net Zero Solutions for Sustainable Growth"
  const desc =
    "Explore innovative Net Zero solutions tailored for MSMEs with Shoonya. Achieve sustainability goals and economic growth with our cutting-edge solutions for small and medium enterprises"
  const image =
    "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/shoonya_banner.png"

  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://cms.org.in/shoonya" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://cms.org.in/shoonya" />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <Banner />
      <Section />
      <Footer />
    </div>
  )
}
