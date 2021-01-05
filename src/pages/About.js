import React, { useState } from 'react';
import './pages.css';
import ReactCardFlip from 'react-card-flip';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className = "flexing">
        <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '20%'}}>
            <p style={{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'center'}}>
              Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
              </p>
          <button onClick = {handleClick}>Flip</button>
      </div>
    </div>
 
    <div className = "flexing">
        <div className = "containerf startf">
        <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '20%'}}>
            <p style={{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'center'}}>
              Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
              </p>
            <button onClick={handleClick}>Flip</button>
        </div>
      </div>
    </div>
      </ReactCardFlip>
  )
}


export default About;
