import React, { useState } from "react";
import "./about.css";
import "./pages.css";

const About = () => {
  const [clickedA, setClickA] = useState(false);
  const [clickedB, setClickB] = useState(false);
  const [clickedC, setClickC] = useState(false);
  return (
    <>
      <div className="background-container">
        <div className="about-background"></div>
        <div className="heading-container about">
          <span className="our-values">Our Values</span>
          <div className="abScroll" id="about-scroll"></div>
        </div>
        <div className="flexingl">
          <div className="containerl">
            <div className="l-container">
              <p>
                <span className="t-bold">
                  Technology is changing the world, one line of code at a time.{" "}
                </span>
                Students at Carleton recognize that nonprofits have their hands
                tied-- they’re invested in creating social impact. We’re here to
                help them realize their vision and create a tangible,
                technological solution that solves their problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexingl cards">
        <div className="flip-card" onClick={() => setClickA(!clickedA)}>
          <div
            className="flip-card-inner"
            style={clickedA ? { transform: "rotateY(180deg)" } : {}}
          >
            <div className="flip-card-front diligence">
              <div className="butnl">diligence</div>
            </div>
            <div className="flip-card-back">
              <p
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  textAlign: "justify",
                }}
              >
                {" "}
                We believe that having a steady, earnest, and energetic effort
                to creatively solve a problem transforms each member in our
                chapter and prepares them for a rapidly changing world.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card" onClick={() => setClickB(!clickedB)}>
          <div
            className="flip-card-inner"
            style={clickedB ? { transform: "rotateY(180deg)" } : {}}
          >
            <div className="flip-card-front diversity">
              <div className="butnl">diversity</div>
            </div>
            <div className="flip-card-back">
              <p
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  textAlign: "justify",
                }}
              >
                We believe that making space for diverse ability, culture,
                identity, and opinion makes our team stronger. Doing so equips
                each team member with the power to meaningfully encounter
                difference, live fruitfully in society, and contribute
                effectively to work they pursue here and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card" onClick={() => setClickC(!clickedC)}>
          <div
            className="flip-card-inner"
            style={clickedC ? { transform: "rotateY(180deg)" } : {}}
          >
            <div className="flip-card-front collab">
              <div className="butnl">collaboration</div>
            </div>
            <div className="flip-card-back">
              <p
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  textAlign: "justify",
                }}
              >
                We believe that trust, tolerance, and self-awarness are three
                essential components to building the synergy, also known as
                similar energies, to cultivate a community where we collectively
                achieve individual and team goals as a organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
