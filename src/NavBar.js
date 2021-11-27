import React from 'react';
import Logo from './Images/Rentoro.svg';
import {HiMenu} from 'react-icons/hi';
import "./NavBar.css"
const NavBar = () => {
    return (
        <div id="main">
            <img src={Logo} alt="Logo" className="logo" width="80px"></img>

            <HiMenu id="menu-icon"/>
            <ul className="navbar">
                <li><a href="_">Home</a></li>  
                <li><a href="_">Ride</a></li>
                <li><a href="_">Services</a></li>
                <li><a href="_">About</a></li>
                <li><a href="_">Reviews</a></li>
            </ul>
            <div className="header-btn">
                <a href="_" className="sign-up">Sign up </a>
                <a href="_" className="sign-in">Sign in </a>
            </div>
        </div>
    )
}

export default NavBar
