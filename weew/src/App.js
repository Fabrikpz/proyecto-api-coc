import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Calculadora from './calculadora';

function App() {
  const [input, setInput] = useState('');
  //const [dataProfile, setDataProfile] = useState({});
  
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <div id="rectangulo">
      <h1 class="tex">CLASH OF CLANS STATS #QVYUVRPUP</h1>
      <p>INGRESE SU ID:</p>
      <input class="mimi" onChange={handleInput} value={input} placeholder="Ingrese su ID"></input><p></p>
      <Link  to={`/calculadora/${input}`}>
        <button>Obtener Datos</button>
      </Link>
    </div>
  );
}

export default App;