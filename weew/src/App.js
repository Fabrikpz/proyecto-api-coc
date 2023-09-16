import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Calculadora from './calculadora';

function App() {
  const [input, setInput] = useState('');
  const [dataProfile, setDataProfile] = useState({});
  
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3500/getClashOfClansData/%23${input}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setDataProfile(data);
      } else {
        console.error(`Error obteniendo data: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error obteniendo data: ${error}`);
    }
  };

  return (
    <div id="rectangulo">
      <h1 class="tex">CLASH OF CLANS STATS #QVYUVRPUP</h1>
      <p>INGRESE SU ID:</p>
      <input class="mimi" onChange={handleInput} value={input} placeholder="Ingrese su ID"></input><p></p>
      <button onClick={fetchData} href="calculadora">Obtener Datos</button>
      {dataProfile.name && <p>Nombre: {dataProfile.name}</p>}
      {dataProfile.clan && <p>Clan: {dataProfile.clan.name}</p>}
    </div>
  );
}

export default App;