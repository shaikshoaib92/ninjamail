import React from 'react'


/*Testimonial section*/


function CaseStudy(props) {
  return (
    <div className="case-card">
        <img src={props.img} alt="" />
        <div className="overlay">
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        </div>
    </div>
  )
}

export default CaseStudy