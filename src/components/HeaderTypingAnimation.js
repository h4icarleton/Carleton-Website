import React from 'react';
import './HeaderTypingAnimation.css';
import '../pages/pages.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;

function HeaderTypingAnimation() {
    return(
        <>
          <div className='header-wrapper' id="home-scroll">
            <div className='background-image'></div>
            <div className='header-container'>
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
                ><Link className='butn' to="/">get involved</Link></ScrollLink>
            </div>
          </div>  
        </>
    )
}

export default HeaderTypingAnimation;