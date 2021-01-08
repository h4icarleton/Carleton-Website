import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const Nav = () => {

    const location = useLocation();
    const [curLocation, setLocation] = useState({
        location: location.pathname
    });

    useEffect(()=> {
        setLocation(location.pathname);
    }, [location.pathname]);

    

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light" style={{position: "fixed", top: 0, left: 0, zIndex : 1, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
        <Link className="navbar-brand" style={{padding: '8px'}} to="/">
            <img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" />
            <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
        </Link>

        <ul className="navbar-nav" >
            <li className="nav-item">
                <Link className="nav-link" to="/"  style={ curLocation === '/' ? {fontWeight: 'bold'} : { fontWeight: 'normal' }}>home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/getinvolved"  style={ curLocation === '/getinvolved' ? {fontWeight: 'bold'} : { fontWeight: 'normal' }}>get involved</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about"  style={ curLocation === '/about' ? {fontWeight: 'bold'} : { fontWeight: 'normal' }}>about</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ourteam"  style={ curLocation === '/ourteam' ? {fontWeight: 'bold'} : { fontWeight: 'normal' }}>our team</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav;
