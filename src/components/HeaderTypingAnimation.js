import React from 'react';
import './HeaderTypingAnimation.css';
import '../pages/pages.css';
import Typical from 'react-typical';
import * as Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;

function HeaderTypingAnimation() {
    return(
        <>
          <div className='header-wrapper' id="home-scroll">
            <div className='background-image'></div>
            <div className='header-container'>
              <div className='logo-container'>
                 <img 
                  id="cLogo" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Carleton_College_symbol.svg/1024px-Carleton_College_symbol.svg.png" 
                  alt="Carleton College C logo"
                />
              </div>
              <div className='text-container'>
                <h1>
                  using software
                </h1>
                <p>
                  for{' '}
                  <Typical
                    steps={[
                      'good.', 2000,
                      'our community.', 2000,
                      'the planet.', 2000,
                      'humanity.', 2000
                    ]}
                    loop={Infinity}
                    wrapper='b'
                  />
                </p>
              </div>
              
              <ScrollLink
                    activeClass="active"
                    to="getinvolved-scroll" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >
                  <div className='butn home-butn'>
                    get involved
                  </div>
                </ScrollLink>
            </div>
          </div>  
        </>
    )
}

export default HeaderTypingAnimation;