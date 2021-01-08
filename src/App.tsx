import React from 'react';
import './App.css';


import ErrorBoundary from './component/errors/ErrorBoundary';
import IndexPage from './pages/IndexPage';

import Cards from './component/shared/cards/Cards';

import NavBar from './layout/navBar/NavBar';

//I comment this to test

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <IndexPage/>
    </ErrorBoundary>
    </div>
  );
}

export default App;
