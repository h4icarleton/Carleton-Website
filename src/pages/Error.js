import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const Error = () => {
    return (
      <div className="background">
          <div className="container">
            <h1><strong>Error:</strong> This is not a valid page.</h1>
            <Link className='butn' to="/" style={{textDecoration : "none", color: "rgba(238, 177, 17, 1)" }}>Return Home</Link>
          </div>
          
      </div>
    )
  }



export default Error;
