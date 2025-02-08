import { useState } from 'react'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {CiMenuBurger} from 'react-icons/ci'
import {MdOutlineClose} from 'react-icons/md'
import {links} from '../data'
import './Navbar.css'
import Logo from '../images/logo.png'
const Navbar = () =>{
    const [isNavShowing,setIsNavShowing] = useState(false)
    return (
        <nav>
        <div className='container nav_container'>
<Link  to='/' className='logo'>
    <img src={Logo} alt="Nav Logo" className='logo' onClick={() => setIsNavShowing(false)}/>
</Link>
<ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
    {
        links.map(({name,path}, index) =>{
            return(
                <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
            )
        })
    }
</ul>
<button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>{
    isNavShowing ? <MdOutlineClose/>: <CiMenuBurger/>
}

</button>
        </div>
        </nav>
    )
}
export default Navbar;