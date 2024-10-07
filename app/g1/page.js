'use client'
import React, { useRef, useEffect } from 'react'
import Header from '../../components/G1Components/Header'
import Footer from '../../components/G1Components/Footer'
import Banner from '../../components/G1Components/Banner'
import Content from '../../components/G1Components/G1Content'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Page() {
  const title =
    'One-Stop Solution for Social Healthcare Enterprises | Saarthi Health Platform'
  const desc =
    'Saarthi Health Platform offers an integrated solution for social healthcare enterprises to access non-clinical services like financing, procurement, maintenance, technology etc.'
  const image =
    'https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/health-care.png'

  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease',
    })
  })

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    console.log('hello')
    section1Ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://cms.org.in/business-catalyst/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://cms.org.in/business-catalyst/"
        />
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
      <Content ref={section1Ref} />
      <Footer />
    </>
  )
}
