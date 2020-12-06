import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const GetInvolved = () => {
  return (
    <div className="background">
      <div className="container" style={{width: "45%"}}>
        <div className='t-container'>
          <h1>
            <span style={{color: "#5f0f85"}}>for</span> students
          </h1>
          <p>
          Looking for a way to apply your CS skills that you’ve learned in class to help solve real-world problems that benefit the community? Looking to connect with a group of CS enthusiasts who believe in the power of coding to do good? 
          <br />
          <br />
          Join our cool team
          </p>
        </div>
        <a className="butn aft-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdy1IwVayC4PrCBWkLeIXTKSbPeYIZdzGjzK_olB9ffOiAHLA/viewform?usp=sf_link" style={{textDecoration : "none", color: "rgba(238, 177, 17, 1)" }}>Apply</a>
      </div>
      <div className="container" style={{width: "45%"}}>
        <div className='t-container'>
          <h1>
            <span style={{color: "#5f0f85"}}>for</span> nonprofits
          </h1>
          <p>
          Are you a nonprofit struggling without certain software? Are you in a niched field and you have a clear idea of your problem and think tech can help you? Hack4Impact @ Carleton is a group of diligent, motivated, and socially active cs-students that are committed to helping you achieve your goals.
          <br />
          <br />
          Submit a project proposal and we’ll make your dreams come true.
          </p>
        </div>
        <a className="butn aft-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSd6afL14jPtALWlvHL_GlgFMo828jGXGcMQMAZfe5ZzcM9ULA/viewform?usp=sf_link" style={{textDecoration : "none", color: "rgba(238, 177, 17, 1)" }}>Apply</a>
      </div>
    </div>
  )
}


export default GetInvolved;
