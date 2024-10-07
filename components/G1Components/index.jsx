import React from 'react'
import Header from './Header'
import Banner from './Banner'
import G1Content from './G1Content'
import Footer from './Footer'
import G1Form from '@/utils/G1Form'

const index = () => {
    return (
        <>
            <Header />
            <Banner />
            <G1Content />
            <G1Form />
            <Footer />
        </>
    )
}

export default index
