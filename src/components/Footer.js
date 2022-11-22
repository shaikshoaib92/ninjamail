import React from 'react'
import mailLogo from '../images/mail.png'

function Footer() {
  return (
    <footer>
        <div className="footer-details">
             <div className="logo-wrapper">
               <img src={mailLogo} alt="Mail Logo" />
               <h1>NinjaMail</h1>
             </div>
           <ul>
               <li>Features</li>
               <li>Pricing</li>
               <li>Sercives</li>
               <li>Partners</li>
           </ul>
           <ul>
               <li>About us</li>
               <li>Tutorials</li>
               <li>Resources</li>
               <li>Help Center</li>
               <li>Templates</li>
               <li>Case Studies</li>
           </ul>
           <ul>
               <li>Medium</li>
               <li>Facebook</li>
               <li>Instagram</li>
               <li>Twitter</li>
               <li>LinkedIn</li>
           </ul>
           <ul>
               <li>Contact Us</li>
               <li>Slack</li>
               <li>Jobs</li>
           </ul>
        </div>
        <div className="footer-bottom">
            <p>NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </footer>
  )
}

export default Footer