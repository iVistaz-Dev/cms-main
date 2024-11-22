"use client"

import { useRef, useState, useEffect } from "react"

import { FaArrowUp } from "react-icons/fa"
import Header from "../Header/Header"
import StartWithShoonya from "../StartWithShoonya/StartWithShoonya"
import WhoCanJoinUs from "../WhoCanJoinUs/WhoCanJoinUs"
import GrowEngageFacilitate from "../GrowEngageFacilitate/GrowEngageFacilitate"
import WhoDoWeAim from "../WhoDoWeAim/WhoDoWeAim"
import Power from "../Power/Power"
import GetInvolved from "../GetInvolved/GetInvolved"
import Support from "../Support/Support"
import Footer from "../Footer/Footer"
import OurWork from "../OurWork/OurWork"
import Seo from "@/components/Seo/Seo"

const HomePage = () => {
  const scrollToRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const seoField = {
    title: "Shoonya's Roots of Change-Native Tree Growth initiative",
    description:
      "Be part of Shoonya's tree growth initiative focused on native tree growth and reforestation in fragile eco-zones for long-term environmental impact.",
    path: "shoonya-roots-of-change",
    metaImage: "/social.png",
    pageType: "WebSite",
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Seo {...seoField} />
      <Header scrollToRef={scrollToRef} />
      <StartWithShoonya />
      <OurWork />
      <WhoCanJoinUs scrollToRef={scrollToRef} />
      <GrowEngageFacilitate />
      <WhoDoWeAim />
      <Power />
      <div ref={scrollToRef}>
        <GetInvolved />
      </div>
      <Support />
      <Footer />

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#00ac8d] text-white p-3 rounded-full shadow-md hover:bg-[#3b5601] transition duration-300"
        >
          {<FaArrowUp />}
        </button>
      )}
    </>
  )
}

export default HomePage
