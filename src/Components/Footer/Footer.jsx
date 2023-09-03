import React from 'react'
import './Footer.css'
import FooterLogo from '../../images/footer-logo.svg'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'
import Youtube from '../../images/youtube.svg'

const Footer = () => {
  return (
    <div className='container'>
      <div className="footer-container">

        <div className='col first'>
          <img src={FooterLogo} alt="Nike Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum nesciunt reiciendis corrupti quaerat nostrum esse, doloribus temporibus.</p>
        </div>

        <div className='col second'>

          <h4>Socials</h4>

            <div className='icons'>
              <a href="index.html"><img src={Facebook} alt="Facebook" /></a>
              <a href="index.html"><img src={Twitter} alt="Twitter" /></a>
              <a href="index.html"><img src={Instagram} alt="Instagram" /></a>
              <a href="index.html"><img src={Youtube} alt="Youtube" /></a>
            </div>
            
        </div>


        <div className='col third'>
          <h4>Join Us!</h4>

          <div className='links'>
            <a href="index.html">Nike Application</a>
            <a href="index.html">Nike Run Club</a>
            <a href="index.html">Nike Training Club</a>
            <a href="index.html">SNKRS</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer