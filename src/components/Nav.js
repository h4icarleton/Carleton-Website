import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import './NavBar.css';

let ScrollLink = Scroll.Link;

const Nav = () => {
    let location = useLocation();
    let locationRef = useRef(location.pathname);

    const [curLocation, setLocation] = useState({
        location: location.pathname
    });

    useEffect(()=> {
        setLocation(location.pathname);
        locationRef.current = location.pathname;
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

    const [isNavbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            const isPassYOffSeyt = window.pageYOffset >= window.innerHeight - (1/10 * window.innerHeight);
            if(!isPassYOffSeyt && locationRef.current==='/'){
                setNavbarVisible(false);
            } else{
                setNavbarVisible(true);
            }
        }

        document.addEventListener('scroll', handelScroll);

    }, []);

    
  return (
    <>
    <nav className={"navbar navbar-expand-sm navbar-light" + `${isNavbarVisible ? ' transition' : ''}`} style={{position: "fixed", top: 0, left: 0, zIndex : 1, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)", opacity:`${isNavbarVisible ? '1' : '0'}`}}>
        <ScrollLink
            activeClass="active"
            to="home-scroll" 
            spy={true} 
            smooth={true} 
            duration={500}
        >
            <Link className="navbar-brand" style={{padding: '8px'}} to="/">
                <div id="h4i"><img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" /></div>
                <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
            </Link>
        </ScrollLink>
        <span className="toggle-icon" onClick={displayNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </span>
        <ul className="navbar-nav" style={ windowSize.width > 650 || display ? {display: 'flex'} : {display: 'none'}}>
            <li className="nav-item">
                <ScrollLink
                    activeClass="active"
                    to="home-scroll" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >   
                    <Link className={ curLocation === '/' ? "nav-link on-page" : "nav-link"} to="/" >Home</Link>
                </ScrollLink> 
            </li>
            <li className="nav-item">
                <ScrollLink
                    activeClass="active"
                    to="getinvolved-scroll" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >    
                    <Link className={ curLocation === '/getinvolved' ? "nav-link on-page" : "nav-link"} to="/">Get Involved</Link>
                </ScrollLink> 
            </li>
            <li className="nav-item">
                <ScrollLink
                    activeClass="active"
                    className="test3" 
                    to="about-scroll" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >    
                    <Link className={ curLocation === '/getinvolved' ? "nav-link on-page" : "nav-link"} to="/">About</Link>
                </ScrollLink> 
            </li>
            <li className="nav-item">
                <ScrollLink>    
                    <Link className={ curLocation === '/ourteam' ? "nav-link on-page" : "nav-link"} to="/ourteam">Our Team</Link>
                </ScrollLink> 
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav;
