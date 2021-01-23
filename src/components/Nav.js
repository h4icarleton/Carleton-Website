import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Nav = () => {
    // const [underLink, setUnderLink] = useState({
    //     home: {
    //         marginLeft: '10px'
    //     },
    //     getinvolved: {
    //         marginLeft: '10px' 
    //     },
    //     about: {
    //         marginLeft: '10px' 
    //     }, 
    //     ourteam: {
    //         marginLeft: '10px' 
    //     }
    // })

    // const location = useLocation()

    // const [curLocation, setLocation] = useState({
    //     location: location.pathname
    // })
    
    // useEffect(()=> {
    //     setLocation(location.pathname)
    //     console.log(curLocation.location)
    //     const prevState = underLink
    //     // for (const page in underLink){
    //     //     console.log(curLocation.location)
    //     //     if(curLocation.location.slice(1) === page){
    //     //         let pageName = page
    //     //         setUnderLink({
    //     //             ...prevState,
    //     //             [pageName]: {
    //     //                 marginLeft: '10px',
    //     //                 fontWeight: 'bold'
    //     //             }
    //     //         })
    //     //     }
    //     // }
    //     switch (curLocation.location){
    //         case '/':
    //             setUnderLink({
    //                 ...prevState,
    //                 home: {
    //                     marginLeft: '10px',
    //                     fontWeight: 'bold'
    //                     }
    //             })
    //             break;
    //         case '/getinvolved':
    //             setUnderLink({
    //                 ...prevState,
    //                 getinvolved: {
    //                     marginLeft: '10px',
    //                     fontWeight: 'bold'
    //                     }
    //             })
    //             break;
    //         case '/about':
    //             setUnderLink({
    //                 ...prevState,
    //                 about: {
    //                     marginLeft: '10px',
    //                     fontWeight: 'bold'
    //                     }
    //             })
    //             break;
    //         case '/ourteam':
    //             setUnderLink({
    //                 ...prevState,
    //                 ourteam: {
    //                     marginLeft: '10px',
    //                     fontWeight: 'bold'
    //                     }
    //             })
    //             break;
    //         default:
    //             setUnderLink({
    //                 ...prevState
    //             })
    //     }
    // }, [curLocation, underLink])

    // when we're at a certain location, we bold the page at that location
    // 1) we check the location using useEffect
    // 2) store the location using useState
    // 3) if we're on a location, match the style of the location to the element and change the style 
    // 4) make a style attribute of state. There's two states: one with and one without fontWeight

    // const onClickLinkHandler = (isClicked) => {
    //     if (isClicked) {
    //         setUnderLink({
    //             marginLeft: '10px',
    //             fontWeight: 'bold'
    //         })
    //     } else {
    //         setUnderLink({
    //             marginLeft: '10px'
    //         })
    //     }
    // }

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
