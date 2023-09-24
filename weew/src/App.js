import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Calculadora from './calculadora';
import * as images from './images.js';

const developers = {
  1: images.pocho, 2: images.sicc, 3: images.pat, 4: images.medran
};

function App() {
  const [input, setInput] = useState('');
  //const [dataProfile, setDataProfile] = useState({});
  
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <div id="rectangulo">
      <h1 class="titulo">🏹CLASH OF CLANS STATS🏹#QVYUVRPUP</h1>
      <div class="texto">
        <div class="bienvenida">
          <p>
            ¡Bienvenido a nuestra plataforma para Clash of Clans! Ingresa tu ID y descubre tus estadísticas y habilidad al instante. ¡Mejora tu juego y domina el campo de batalla!
          </p>
        </div>
      <p>INGRESE SU ID:</p>
      <input class="mimi" onChange={handleInput} value={input} placeholder="Ingrese su ID"></input><p></p>
      <Link  to={`/calculadora/${input}`}>
        <button class="butons">Obtener Datos</button>
      </Link>
      <p>🔥desarroladores🔥</p>
      <div class = "desarolladores">
      <img alt="trofeos" src={images.pocho} style={{ width: "50px", height: "50px" }}></img><p>silveyra🚗</p>
      <img alt="Developers" src={images.sicc} style={{ width: "50px", height: "50px" }}></img><p>Masante🐱‍🐉</p>
      <img alt="Developers" src={images.pat} className="imgs-aldeas" style={{ width: "50px", height: "50px" }}></img><p>Gallo</p>
      <img alt="Developers" src={images.medran} className="imgs-aldeas" style={{ width: "50px", height: "50px" }}></img><p>Medrano🐧</p>
      </div>
      </div>
    </div>
  );
}

export default App;