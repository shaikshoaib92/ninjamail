import React from 'react'
import videoImg from '../images/VIDEO.png'
import blackSlashs from '../images/black-slashs.png'


function Service() {
  return (
    <section className='video-section' id='SERVICES'>
        <img className='black-slashs' src={blackSlashs} alt="" />       {/* for background style */}
        <h1>Reach More Customers</h1>
        <img className='video-img' src={videoImg} alt="" />
        <button>LEARN HOW</button>
    </section>
    )
}

export default Service