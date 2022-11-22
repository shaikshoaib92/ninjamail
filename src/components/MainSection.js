import React, { Component } from 'react'
import Card from './Card'
import CaseStudy from './CaseStudy'
//Images
import thumb1 from '../images/thumb1.png'
import thumb2 from '../images/thumb2.png'
import caseImg1 from '../images/case-study-pic1.png'
import caseImg2 from '../images/case-study-pic2.png'
import caseImg3 from '../images/case-study-pic3.png'
import lastKnight from '../images/last-knight.png'
import dragonEye from '../images/dragon-eye.png'
import questAi from '../images/quest-ai.png'
import radioTree from '../images/radio-tree.png'
import gameCommerce from '../images/game-commerce.png'
import Footer from './Footer'
import whiteSlashs from '../images/white-slashs.png'




/*This section contins the remaining components, this was done to make the app.js more clean from importing 
diffrent Component*/


function Main() {
  return (
      <section className='third-section'>
        <div className="floating-elements2">
          <img src={whiteSlashs} alt="" />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/*Features Section */}
        <div className="cards-wrapper" id='FEATURES'>
        <Card img={thumb1} txt='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.' />
        <Card
        img={thumb2}
        txt='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.' />
        <div className='cards-info'>
            <h1>
            The source for proven, engaging email campaigns
            </h1>
            <p>
            Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business. 
            </p>
        </div>
        </div>

        
          {/*Testimonial Section */}
        <div className='testimonial'>
        <div className="case-study">
       <CaseStudy img={caseImg1} name='Frankie' date='Member since 2016' />
       <CaseStudy img={caseImg2} name='Camile' date='Member since 2012' />
       <CaseStudy img={caseImg3} name='Elayne' date='Member since 2018' />
        </div>
        <div className='test2'>
        <h2 className='testimonial2'>Learn how others are reaching their audience easier then ever before</h2>
        </div>
       <div>
        <input placeholder='Enter your email' className='input'></input>
        <div className='btn-div'>
        <button className='btn'>Join our list</button>
        </div>
        
       </div>
        </div>


      {/*Partners Section */}
        <h1 className='brands-heading' id='PARTNERS' >All the best brands already use us.</h1>
        <div className="brands">
          <img src={lastKnight} alt="" />
          <img src={dragonEye} alt="" />
          <img src={questAi} alt="" />
          <img src={radioTree} alt="" />
          <img src={gameCommerce} alt="" />
        </div>

          {/*Pricing Section */}
        <div className="plan" id='PRICING'>
          <h1>Get Started today!</h1>
          <button>PICK A PLAN</button>
        </div>

          {/*Footers Section */}
        <Footer />
      </section>
    )
}

export default Main