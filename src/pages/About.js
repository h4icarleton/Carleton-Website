import ReactDOM from "react-dom";
import React, { useState } from 'react';
import './pages.css';
import ReactCardFlip from 'react-card-flip';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h1>
      <div className = "flexing">
         <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '50%'}}>
             <p style = {{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'left'}}>
               Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
             </p>
         </div>
       </div>
      </h1>
      <div className = "flexing">
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
          {/* <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '33%', margin: 'auto', height: '50%'}}>
            <div className = 't-container'>
              <h1 style = {{fontFamily: "Consolas"}}></h1>
              <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
                Diligence
              </p>
              <button onClick = {handleClick}>ignore</button>
            </div>
          </div> */}
          <div className = "containerf startf" style = {{}}>
            <div className = 't-container'>
              <h1 style = {{fontFamily: "Consolas"}}></h1>
              <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
              Carleton is a liberal arts college; unlike other schools, it focuses on providing its students (Carls) with a personalized, well-rounded education. Therefore, Carls are unique. Here at Hack4Impact Carleton we focus on using our diverse skillset to create innovative technological solutions that help our community.
              </p>
              <button onClick = {handleClick}>ignore</button>
            </div>
          </div>
        {/* </ReactCardFlip> */}

        {/* <ReactCardFlip isFlipped = {isFlipped} flipDirection = "horizontal"> */}
          {/* <div className = "containerf">
            <div className = 't-container'>
              <h1 style = {{fontFamily: "Consolas"}}></h1>
              <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
              Diversity
              </p>
              <button onClick = {handleClick}>ignore</button>
            </div>
          </div> */}
          <div className = "containerf">
            <div className = 't-container'>
              <h1 style = {{fontFamily: "Consolas"}}></h1>
              <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
              Carls are not only diligent, but also politically progressive and socially active. At H4I Carleton, we’re committed to promoting diversity in CS. People of color and women are already underrepresented in the field, thus it is our mission to diversify the narrative by providing opportunities for these communities to get real-world software experience.
              </p>
              <button onClick = {handleClick}>ignore</button>
            </div>
          </div>
        {/* </ReactCardFlip> */}

        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
        {/* <div className = "containerf">
          <div className = 't-container'>
            <h1 style = {{fontFamily: "Consolas"}}>
            </h1>
            <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
            Collaboration 
            </p>
            <button onClick = {handleClick}>ignore</button>
          </div>
        </div> */}
        <div className = "containerf">
          <div className = 't-container'>
            <h1 style = {{fontFamily: "Consolas"}}>
            </h1>
            <p style = {{paddingLeft: '47px', paddingRight: '47px'}}>
            Carleton is a small college with only 1,500 students. In other words, we tend to be extremely close-knit. At a time like this, social connection is increasingly difficult, making it hard to maintain solid relationships. However, this won’t deter us-- although we’re working remotely, our team is persistent, engaged, and community-driven.
            </p>
            <button onClick = {handleClick}>ignore</button>
          </div>
        </div>
      {/* </ReactCardFlip> */}
      </div>
    </div>
    // <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    //   <div className = "flexing">
    //     <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '20%'}}>
    //         <p style={{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'left'}}>
    //           Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
    //         </p>
    //       <button onClick = {handleClick}>ignore</button>
    //     </div>
    //   </div>
 
    //   <div className = "flexing">
    //     <div className = "containerf startf" style = {{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '95%', margin: 'auto', height: '20%'}}>
    //       <p style={{paddingLeft: '47px', paddingRight: '47px', paddingTop: '15px', paddingBottom: '15px', fontFamily: 'Arial', fontSize: '23px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '0em', textAlign: 'left'}}>
    //         Technology is changing the world, one line of code at a time. Students at Carleton recognize that nonprofits have their hands tied-- they’re invested in creating social impact. We’re here to help them realize their vision and create a tangible, technological solution that solves their problems.
    //       </p>
    //       <button onClick = {handleClick}>ignore</button>
    //     </div>
    //   </div>
    // </ReactCardFlip>
  );
};
ReactDOM.render(<About/>,document.querySelector("#root"))

export default About;
