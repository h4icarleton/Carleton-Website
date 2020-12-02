import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderTypingAnimation from './components/HeaderTypingAnimation';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <HeaderTypingAnimation/>
    </div>
  );
}

export default App;
