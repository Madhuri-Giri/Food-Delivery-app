import React, { useState } from 'react'
import "../navbar/Navbar.css"
import logo from "../../assets/logo.png"
import Search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
        // for hover effect
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
    <img src={logo} alt='' className='logo'></img>
      <ul className='navbar-item'>
        <Link to='/' onClick={()=>setMenu("home")}className={menu==='home'?"active":""} >Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==='menu'?"active":""} >Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==='mobile-app'?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==='contact-us'?"active":""}>contact-us</a>
      </ul>
        <div className='navbar-right'>
            <img src={Search_icon} alt="" />
            <div className='navbar-search-icon'> 
        <img src={basket_icon} alt="" />
        <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
