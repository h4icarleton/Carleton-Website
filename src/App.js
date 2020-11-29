import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <func1></func1>
      </header>
    </div>
  );
}

const Nav = () => {
  return (
    <ul id="nav">
      <li><img id="h4iLogo" src="https://hack4impact.org/svg/logo.svg" alt="Hack4Impact Logo" /><img id="ccLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carleton_College_logo.svg/1280px-Carleton_College_logo.svg.png" alt="Carleton College"/></li>
      <li><a href="#nav">home</a></li>
      <li><a href="#nav">get involved</a></li>
      <li><a href="#nav">about</a></li>
      <li><a href="#nav">our team</a></li>
    </ul>
  )
}


export default App;