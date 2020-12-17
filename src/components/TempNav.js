import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-light" style={{position: "fixed", top: 0, left: 0, zIndex : 1, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
        <Link class="navbar-brand" to="/">
            <img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" />
            <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
        </Link>

        <ul class="navbar-nav" style= {{position : 'absolute', right: '0px'}}>
            <li class="nav-item">
                <Link class="nav-link" to="/">home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/getinvolved">get involved</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/about">about</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/ourteam">our team</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav;
