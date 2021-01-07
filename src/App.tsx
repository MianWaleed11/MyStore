import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './layout/navBar/NavBar';
import Cards from './component/shared/card/Card';


function App() {
  return (
    <div className="App">
      <NavBar/>
     <Cards/>
    </div>
  );
}

export default App;
