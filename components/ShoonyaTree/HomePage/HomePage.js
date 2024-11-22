"use client"

import { useRef } from "react"
import Seo from "../../../components/Seo/Seo"
import Header from "../Header/Header"
import StartWithShoonya from "../StartWithShoonya/StartWithShoonya"
import WhoCanJoinUs from "../WhoCanJoinUs/WhoCanJoinUs"
import GrowEngageFacilitate from "../GrowEngageFacilitate/GrowEngageFacilitate"
import WhoDoWeAim from "../WhoDoWeAim/WhoDoWeAim"
import Power from "../Power/Power"
import GetInvolved from "../GetInvolved/GetInvolved"
import Support from "../Support/Support"
import Footer from "../Footer/Footer"

const HomePage = () => {
  const seoField = {
    title: "Shoonya's Roots of Change-Native Tree Growth initiative",
      description:
        "Be part of Shoonya's tree growth initiative focused on native tree growth and reforestation in fragile eco-zones for long-term environmental impact.",
    path: "shoonya-roots-of-change",
    metaImage: "/social.png",
    pageType: "WebSite",
  }
  const scrollToRef = useRef(null)
  return (
    <>
    <Seo {...seoField}/>
      <Header scrollToRef={scrollToRef} />
      <StartWithShoonya />
      <WhoCanJoinUs scrollToRef={scrollToRef} />
      <GrowEngageFacilitate />
      <WhoDoWeAim />
      <Power />
      <div ref={scrollToRef}>
        <GetInvolved />
      </div>
      <Support />

      <Footer />
    </>
  )
}

export default HomePage
