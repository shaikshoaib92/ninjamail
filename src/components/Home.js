import React from 'react'
import FloatingElements from './FloatingElements'
import heroImage from '../images/photo-hero.png'
import '../css/hero.css'

//This is the starting section of the website

// Updated source code

function Home() {
  return (
    <section className='hero-section'>
        <FloatingElements />
        <div className="hero-content">
                <h1>
                Create Stunning 
                Email Campaigns
                </h1>
            <img className='mobile-img' src={heroImage} alt="" />
                <p>
                Create and launch email campaigns that captivate
                your customers in just a few clicks.
                </p>
                <div className="button-wrapper">
                <button className='button-1'>TRY NOW</button>
                <button className='button-2'>GET A DEMO</button>
                </div>
        </div>
            <img src={heroImage} alt="" />
    </section>
  )
}

export default Home