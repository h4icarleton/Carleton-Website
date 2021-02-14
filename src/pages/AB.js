import React, { useState } from 'react';
import './about.css';
import './pages.css';

const About = () => {
    const [clickedA, setClickA] = useState(false);
    const [clickedB, setClickB] = useState(false);
    const [clickedC, setClickC] = useState(false);
  return (
    <>
        <div className="background-container">
        <div className="about-background"></div>
        <div className="heading-container about" id="about-scroll">
            <span className="our-values">Our Values</span>
        </div>
        <div className = "flexingl">
            <div className="containerl">
                <div className='l-container'>
                    <p><span className = "t-bold">Technology is changing the world, one line of code at a time. </span>Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.</p>
                </div>
            </div>
        </div>
        </div>  
        <div className = "flexingl cards">
            <div className="flip-card" onClick={() => setClickA(!clickedA)}>
                <div className="flip-card-inner" style={ clickedA ? {transform: 'rotateY(180deg)'} : {}}>
                    <div className="flip-card-front">
                        <div className="butnl">
                            diligence
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
                            diversity
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
                            collaboration
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
