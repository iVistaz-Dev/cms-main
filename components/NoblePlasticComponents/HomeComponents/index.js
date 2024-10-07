'use client'
import React, { useRef, useEffect } from 'react'
import Header from '../Header'
import Banner from './Banner'
import NoblePlastics from './NoblePlastics'
import Footer from '../Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const index = () => {
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease',
    })
  })

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Header onClick={scrollToSection1} />
      <Banner />
      <NoblePlastics onClick={scrollToSection1} />
      <Footer ref={section1Ref} />
    </div>
  )
}

export default index
