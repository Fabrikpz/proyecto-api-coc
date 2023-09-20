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
      <h1 class="titulo">CLASH OF CLANS STATS #QVYUVRPUP</h1>
      <div class="texto">
        <div class="bienvenida">
          <p>
            ¡Bienvenido a nuestra plataforma para Clash of Clans! Ingresa tu ID y descubre tus estadísticas y habilidad al instante. ¡Mejora tu juego y domina el campo de batalla!
          </p>
        </div>
      <p>INGRESE SU ID:</p>
      <input class="mimi" onChange={handleInput} value={input} placeholder="Ingrese su ID"></input><p></p>
      <Link  to={`/calculadora/${input}`}>
        <button>Obtener Datos</button>
      </Link>
      </div>
    </div>
  );
}

export default App;