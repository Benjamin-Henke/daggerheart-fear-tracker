import React from 'react';
import FearTracker from './components/FearTracker/FearTracker'
import PlayerStats from './components/PlayerStats/PlayerStats'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="dashboard">
        <FearTracker />
        <PlayerStats />
      </div>
    </div>
  );
}

export default App;
