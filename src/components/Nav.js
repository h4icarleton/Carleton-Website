import React from 'react';

const Nav = () => {
  return (
    <>
      <div class="fluid-container">
        <header>
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
              <img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" />
              <img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collaspe" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collaspe navbar-collapse" id="navbarNav">
              <ul class="navbar-nav" style= {{position : 'absolute', right: '0px'}} >
                <li class="nav-item active">
                  <a class="nav-link" href="#" >home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">get invloved</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">our team</a>
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
