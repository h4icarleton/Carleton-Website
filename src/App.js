import React from 'react';
import './App.css';
import Pages from './pages';



function App() {
  //disable error messages for finished website
  console.warn = console.error = () => {};
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
