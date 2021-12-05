import React from 'react';
import Logo from '../Images/Rentoro.svg';
import {HiMenu} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {useAuth} from "../Auth/AuthProvider";
import "./NavBar.css"
const NavBar = () => {
    const {currentUser} = useAuth();

    let button;
    if(currentUser === ""){
        button = (            <div className="header-btn">
        <Link to="/SignUp" className="sign-up">Sign up</Link>
        <Link to="/SignIn" className="sign-in">Sign in</Link>
    </div>);
    }
    else{
        button = (<div className="header-btn">
            <Link to="/Dashboard" className="sign-in">Dashboard</Link>
        </div>)
    }

    return (
        <div id="main">
            <img src={Logo} alt="Logo" className="logo" width="80px"></img>

            <HiMenu id="menu-icon"/>
            <ul className="navbar">
                <li><Link to="/Home"><span>Home</span></Link></li>  
                <li><Link to="/Cars">Cars</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Reviews">Reviews</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
            {button}
        </div>
    )
}

export default NavBar
