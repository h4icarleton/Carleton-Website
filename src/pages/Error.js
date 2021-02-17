import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import '../components/HeaderTypingAnimation.css';

const Error = () => {
    return (
      <div className="background-image header-wrapper">
          <div className="containerf" style={{paddingTop: '40px', marginRight: '0'}}>
            <h1 style={{marginBottom: '20px'}}><strong>Error:</strong> This is not a valid page.</h1>
            <Link className='butn aft-btn' to="/" style={{textDecoration : "none", color: "rgba(238, 177, 17, 1)" }}>Return Home</Link>
          </div>
      </div>
    )
  }



export default Error;
