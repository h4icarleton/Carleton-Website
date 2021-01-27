import React from 'react';
import './HeaderTypingAnimation.css';
import '../pages/pages.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

function HeaderTypingAnimation() {
    return(
        <>
          <div className='header-wrapper'>
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
              <Link className='butn' to="/getinvolved">get involved</Link>
            </div>
          </div>  
        </>
    )
}

export default HeaderTypingAnimation;