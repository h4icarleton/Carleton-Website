import React from 'react';
import './App.css';
import Pages from './pages';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App" style={{position : "absolute"}}>
      <Pages />
      <ContactUs />
    </div>
  );
}

export default App;
