"use client"

import { useRef } from "react"
import GetInvolved from "../GetInvolved/GetInvolved"
import Support from "../Support/Support"
import Footer from "../Footer/Footer"
import Header from "./Header/Header"

const ContactPage = () => {
  const scrollToRef = useRef(null)
  return (
    <>
      <Header scrollToRef={scrollToRef} />
      <div ref={scrollToRef}>
        <GetInvolved />
      </div>
      <Support />

      <Footer />
    </>
  )
}

export default ContactPage
