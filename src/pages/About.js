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
        <div className="heading-container about">
            <span className="our-values">Our Values</span><div className="abScroll" id="about-scroll"></div>
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
                        <p>Carls are not only diligent, but also politically progressive and socially active. At H4I Carleton, we’re committed to promoting diversity in CS. People of color and women are already underrepresented in the field, thus it is our mission to diversify the narrative by providing opportunities for these communities to get real-world software experience.

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
                        <p>Carleton is a small college with only 1,500 students. In other words, we tend to be extremely close-knit. At a time like this, social connection is increasingly difficult, making it hard to maintain solid relationships. However, this won’t deter us-- although we’re working remotely, our team is persistent, engaged, and community-driven.

                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </>
  );
};

export default About;
