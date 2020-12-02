import React from 'react';
import Nav from './components/Nav';

function About() {
  return (
    <div className="App">
      <Nav></Nav>
      <Test></Test>
    </div>
  );
}

const Test = () => {
  return (
    <h1> About Page... to be implemented</h1>
  )
}



export default About;
