import React from 'react';
import Logo from './Images/Rentoro.svg';
import {HiMenu} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
    return (
        <div id="main">
            <img src={Logo} alt="Logo" className="logo" width="80px"></img>

            <HiMenu id="menu-icon"/>
            <ul className="navbar">
                <li><Link to="/Home"><span>Home</span></Link></li>  
                <li><Link to="/Ride">Ride</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Reviews">Reviews</Link></li>
            </ul>
            <div className="header-btn">
                <Link to="/" className="sign-up">Sign up</Link>
                <Link to="/" className="sign-in">Sign in</Link>
            </div>
        </div>
    )
}

export default NavBar
