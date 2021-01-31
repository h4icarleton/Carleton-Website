import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Nav = () => {
    let location = useLocation();
    const [curLocation, setLocation] = useState({
        location: location.pathname
    });

    useEffect(()=> {
        setLocation(location.pathname);
    }, [location.pathname]);

    const [display, setDisplay] = useState(false);

    function displayNav() {
        if (display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }

        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          
          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();

        }, []);

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light" style={{position: "fixed", top: 0, left: 0, zIndex : 1, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
        <Link className="navbar-brand" style={{padding: '8px'}} to="/">
            <div id="h4i"><img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" /></div>
            <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
        </Link>
        <span className="toggle-icon" onClick={displayNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </span>
        <ul className="navbar-nav" style={ windowSize.width > 650 || display ? {display: 'flex'} : {display: 'none'}}>
            <li className="nav-item">
                <Link className={ curLocation === '/' ? "nav-link on-page" : "nav-link"} to="/" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className={ curLocation === '/getinvolved' ? "nav-link on-page" : "nav-link"} to="/getinvolved">Get Involved</Link>
            </li>
            <li className="nav-item">
                <Link className={curLocation === '/about' ? "nav-link on-page" : "nav-link"} to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className={ curLocation === '/ourteam' ? "nav-link on-page" : "nav-link"} to="/ourteam">Our Team</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav;
