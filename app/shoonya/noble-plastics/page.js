"use client"
import React, { useEffect } from "react"
import Home from "../../../components/NoblePlasticComponents/HomeComponents"
import AOS from "aos"
import "aos/dist/aos.css"

export default function page() {
  const title =
    "Eco-social initiative promoting sustainable management of plastic"
  const desc =
    "Noble Plastic champions the effective use of plastic waste and plastic recycling while promoting the well-being of the people and the planet. Learn more"
  const image =
    "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/home-banner.png"

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
        <link
          rel="canonical"
          href="https://cms.org.in/shoonya/noble-plastics/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://cms.org.in/shoonya/noble-plastics/"
        />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <Home />
    </>
  )
}
