import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 400 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);

  }
  
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='catalogue' duration='500' smooth='true' offset={-260}>Catalogue</Link></li>
            <li><Link>Software</Link> </li>            
            <li><Link to='contact' duration='500' smooth='true' offset={-260}>Contact Us</Link></li>
            <li><Link to='about' duration='500' smooth='true' offset={-200}>About Us</Link></li>
            <li><Link className="btn">Sign In</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar