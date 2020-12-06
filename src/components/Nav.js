import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div class="fluid-container">
        <header>
          <nav class="navbar navbar-expand-lg">
            <Link to="/">
              <img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" />
              <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collaspe" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collaspe navbar-collapse" id="navbarNav">
              <ul class="navbar-nav" style= {{position : 'absolute', right: '0px'}} >
                <li class="nav-item active">
                  <Link class="nav-link" to="/" >home<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/getinvolved">get invloved</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">about</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="ourteam">our team</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Nav;
