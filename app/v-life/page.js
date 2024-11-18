import React from 'react'
import Vlife from "../../components/VLifeComponents/vlife"
import Footer from "../../components/VLifeComponents/Footer"

export function generateMetadata() {
  return {
    title: "V-Life: Empowering Rural India with Tailored Financial Solutions",
    description:
      "V-Life works to provide farmers and Farmer Producer Organisations (FPOs) with access to finance and livelihood support, fostering sustainable growth and resilience.",
    metadataBase: new URL("https://www.cms.org.in/v-life"),
    openGraph: {
      url: "https://www.cms.org.in/v-life",
      title: "V-Life: Empowering Rural India with Tailored Financial Solutions",
      description:
        "V-Life works to provide farmers and Farmer Producer Organisations (FPOs) with access to finance and livelihood support, fostering sustainable growth and resilience.",
      images: [
        {
          url: "",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

export default function page() {
  return (
    <>
      <Vlife />
      <Footer />
    </>
  )
}