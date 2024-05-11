import React, { useState } from 'react'
import "../navbar/Navbar.css"
import logo from "../../assets/logo.png"
import Search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"
const Navbar = () => {
        // for hover effect
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
    <img src={logo} alt='' className='logo'></img>
      <ul className='navbar-item'>
        <li onClick={()=>setMenu("home")}className={menu==='home'?"active":""} >Home</li>
        <li onClick={()=>setMenu("menu")}className={menu==='menu'?"active":""} >Menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu==='mobile-app'?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==='contact-us'?"active":""}>contact-us</li>
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
