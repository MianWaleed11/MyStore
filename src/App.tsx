import React from 'react';
import './App.css';
import ErrorBoundary from './component/errors/ErrorBoundary';
import IndexPage from './pages/IndexPage';


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
