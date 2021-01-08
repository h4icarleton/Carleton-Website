import ReactDOM from "react-dom";
import React, { useState } from 'react';
import './pages.css';
import ReactCardFlip from 'react-card-flip';
import {CardFront, CardBack} from '../components/Card';

const About = () => {
  const [isFlipped, setIsFlipped] = useState({
    diligence: false,
    diversity: false,
    collaboration: false
  })
  const handleClick = (e, identifier) => {
    console.log("hello")
    e.preventDefault()
    const prevState = isFlipped
    switch(identifier){
      case 'diligence':
        console.log("1")
        setIsFlipped({
          ...prevState,
          diligence: !prevState.diligence
        })
        break;
      case 'diversity':
        console.log("2")
        setIsFlipped({
          ...prevState,
          diversity: !prevState.diversity
        })
        break;
      case 'collaboration':
        console.log("3")
        setIsFlipped({
          ...prevState,
          collaboration: !prevState.collaboration
        })
        break;
      default:
        console.log("4")
        return prevState;
    }
  };


  return (
    <div>
      <h1>
      <div className = "flexing" id="Mission-Statement">
        <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '50%'}}>
            <p style = {{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'left'}}>
              Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
            </p>
        </div>
       </div>
      </h1>


      <div className = "flexing">
        <ReactCardFlip isFlipped={isFlipped.diligence} flipDirection="horizontal"> 
          <div className = "containerf startf">
            <CardFront handleClick={(e) => handleClick(e, 'diligence')}>Diligence</CardFront>
          </div> 
          <div className = "containerf startf">
            <div className = 't-container' id="Diligence-Back">
              <CardBack handleClick={(e) => handleClick(e, 'diligence')}>
              Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
              </CardBack>
            </div>
          </div>
        </ReactCardFlip> 

        <ReactCardFlip isFlipped={isFlipped.diversity} flipDirection="horizontal"> 
          <div className = "containerf startf">
            <CardFront handleClick={(e) => handleClick(e, 'diversity')}>Diversity</CardFront>
          </div> 
          <div className = "containerf startf">
            <div className = 't-container' id="Diligence-Back">
              <CardBack handleClick={(e) => handleClick(e, 'diversity')}>
              Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
              </CardBack>
            </div>
          </div>
        </ReactCardFlip> 

        <ReactCardFlip isFlipped={isFlipped.collaboration} flipDirection="horizontal"> 
          <div className = "containerf startf">
            <CardFront handleClick={(e) => handleClick(e, 'collaboration')}>Collaboration</CardFront>
          </div> 
          <div className = "containerf startf">
            <div className = 't-container' id="Diligence-Back">
              <CardBack handleClick={(e) => handleClick(e, 'collaboration')}>
              Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
              </CardBack>
            </div>
          </div>
        </ReactCardFlip> 

        
      </div>
    </div>
  );
};

export default About;
