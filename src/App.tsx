import React from 'react';
import './App.css';

import ErrorBoundary from './component/errors/ErrorBoundary';
import IndexPage from './pages/IndexPage';

import NavBar from './layout/navBar/NavBar';
import Cards from './component/shared/card/Card';
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
