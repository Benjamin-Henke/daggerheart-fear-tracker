import React from 'react';
import FearTracker from './components/FearTracker/FearTracker'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="dashboard">
        <FearTracker />
        {/* Add your next component here */}
        {/* <YourNextComponent /> */}
      </div>
    </div>
  );
}

export default App;
