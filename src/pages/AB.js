import ReactDOM from "react-dom";
import React, { useState } from 'react';
import './about.css';
import ReactCardFlip from 'react-card-flip';
import {CardFront, CardBack} from '../components/Card';

const About = () => {
    const [clickedA, setClickA] = useState(false);
    const [clickedB, setClickB] = useState(false);
    const [clickedC, setClickC] = useState(false);
  return (
    <>
        <div className = "flexingl">
            <div className="containerl">
                <div className='l-container'>
                    <p>Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.</p>
                </div>
            </div>
        </div>  
        <div className = "flexingl cards">
            <div className="flip-card" onClick={() => setClickA(!clickedA)}>
                <div className="flip-card-inner" style={ clickedA ? {transform: 'rotateY(180deg)'} : {}}>
                    <div className="flip-card-front">
                        <div className="butnl">
                            Diligence
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p> Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flip-card" onClick={() => setClickB(!clickedB)}>
                <div className="flip-card-inner" style={ clickedB ? {transform: 'rotateY(180deg)'} : {}}>
                    <div className="flip-card-front">
                        <div className="butnl">
                            Diversity
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p>Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flip-card" onClick={() => setClickC(!clickedC)}>
                <div className="flip-card-inner" style={ clickedC ? {transform: 'rotateY(180deg)'} : {}}>
                    <div className="flip-card-front">
                        <div className="butnl">
                            Collaboration
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p>Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized,
              well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to 
              create innovative technological solutions that help our community.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </>
  );
};

export default About;
