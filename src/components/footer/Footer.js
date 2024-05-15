// this is footer
import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import linkdin_icon from '../../assets/linkedin_icon.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
      <div className='footer-content-left'>
      <img src={logo} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempore.
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, beatae!</p>
      <div className='footer-social-icon'>
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={linkdin_icon} alt="" />
      </div>
      </div>
      <div className='footer-content-center'>
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privecy Policy</li>
      </ul>
</div>
<div className='footer-content-right'>
<h2>GET IN TOUCH</h2>
      <ul>
        <li>+1-212-456-7890</li>
        <li>contact@tomato.com</li>
      </ul>
    </div>
      </div>
      <hr />
      <p className='footer-copy-right'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
    
  )
}

export default Footer
