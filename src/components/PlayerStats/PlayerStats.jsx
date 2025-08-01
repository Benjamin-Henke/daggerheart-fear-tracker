import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import './PlayerStats.css'

function PlayerStats() {
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    const newPlayer = {
      id: Date.now(), // Simple ID generation
      name: `Player ${players.length + 1}`,
      hp: 12,
      maxHp: 12,
      armor: 12,
      maxArmor: 12,
      stress: 0, // Stress starts at 0
      maxStress: 12,
      agility: 0
    };
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="player-stats ">
      <h3>Player Statistics</h3>
    </div>
  );
}

export default PlayerStats;
