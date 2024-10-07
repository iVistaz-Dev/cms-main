'use client'
import React, { useRef } from 'react'
import Header from '../Header'
import Banner from './Banner'
import OurApproach from './OurApproach'
import Footer from '../Footer'

const index = () => {
    const section1Ref = useRef(null);
    const scrollToSection1 = () => {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Header onClick={scrollToSection1}/>
            <Banner />
            <OurApproach />
            <Footer ref={section1Ref}/>
        </div>
    )
}

export default index
