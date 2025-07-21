import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo4.png' 
import logo1 from '../assets/images/logo/shopkartlogo.png'

const NavItems = () => {
    const[socialToggle, setSocialToggle] = useState(false);
    const[menuToggle,setMenuToggle]= useState(false);
    const[headerFixed,setHeaderFixed]= useState(false);

    //adding event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY >200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });
    
  return (
   <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp": ""}`}>
    {/*header top*/}
    <div className={`header-top d-md-none ${socialToggle ? "open" :""}`}>
        <div className='container'>
            <div className='header-top-area'>
                <Link to="/signup" className='lab-btn me-3 '><span>Create Account</span></Link>
                <Link to="/login">Log in</Link>
            </div>
        </div>
    </div>

    {/*heder bottom*/}
    <div className='header-bottom'>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo-search-acte'>
                    <div className='logo'>
                <Link to="/">
                   <img src={logo} alt="logo" /> 
                </Link> 
                </div>
                </div>    

                {/*Menu area*/} 
                <div className='menu-area'>
                    <div className='menu'>
                        <ul className={`lab-ul ${menuToggle?"active":""}`}>
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/shop'>Shop</Link></li>
                              <li><Link to='/blog'>Blog</Link></li>
                              <li><Link to='/about'>About</Link></li>
                              <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    {/*Sign in area*/}
                    <Link className='lab-btn me-3 d-none d-md-block'><span>Create Account</span></Link>
                        <Link className=' d-none d-md-block'>Log in</Link>
                        {/*Menu toggler*/}
                        <div onClick={()=>setMenuToggle(!menuToggle)}className={`header-bar d-lg-none ${menuToggle?"active":""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* Social Toggl */}
                        <div className='ellepsis-bar d-md-none'
                        onClick={()=>setSocialToggle(!socialToggle)}>
                            <i class="icofont-info"></i>
                        </div>
                    </div>     
            </div>
        </div>
        </div>
   </header>
  )
}

export default NavItems
