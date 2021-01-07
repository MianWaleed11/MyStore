import React from 'react';
import './App.css';
import NavBar from './layout/navBar/NavBar';
import Cards from './component/shared/card/Card';
//I comment this to test

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Cards/>
    </div>
  );
}

export default App;
