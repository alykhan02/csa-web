import '../../App.css'
import HeroSection from '../hero.js'
import Cards from '../cards'
import React from 'react'
import Footer from '../footer'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;