import React from 'react';
import './App.css';
import Pages from './pages';
import Footer from './components/ContactUs';



function App() {
  return (
    <div className="App" style={{position : "absolute"}}>
      <body style={{textAlign: "center"}}><Pages /></body>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
