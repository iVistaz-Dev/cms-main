"use client"

import { useRef } from "react"

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
  const scrollToRef = useRef(null)
  return (
    <>
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
