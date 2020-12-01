import React from 'react';
import './HeaderTypingAnimation.css';
import Typical from 'react-typical';

function HeaderTypingAnimation() {
    return(
        <>
          <div className='header-wrapper'>
            <div className='header-container'>
              <div className='text-container'>
                <h1>
                  Using Software
                </h1>
                <p>
                  for{' '}
                  <Typical
                    steps={[
                      'AAAAA\.', 1200,
                      'BBBBB\.', 1200,
                      'CCCCC\.', 1200,
                      'DDDDD\.', 1200
                    ]}
                    loop={Infinity}
                    wrapper='b'
                  />
                </p>
              </div>
              <div className='button-container'>
                <div className='dummyButton'>Dummy Get Involved Button</div>
              </div>
            </div>
          </div>  
        </>
    )
}

export default HeaderTypingAnimation