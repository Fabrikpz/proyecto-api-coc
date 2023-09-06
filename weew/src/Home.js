import './App.css';
import React, { useState, useEffect } from 'react';
import camavinga from "./camavinga.jpg";
import axios from 'axios';
//#qvyuvrpup
function App() {
  const [input, setInput] = useState('');
  const [dataProfile, setDataProfile] = useState({});

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/getClashOfClansData/9ry99pruq`);
      setDataProfile(response.data); // Aquí asignas los datos a tu estado
    } catch (error) {
      console.error(`Error obteniendo data: ${error}`);
    }
  };
//#qvyuvrpup
  return (
    <div>
      <h1>9ry99pruq </h1>
      <h1>CLASH OF CLANS STATS</h1>
      <p>INGRESE SU ID:</p>
      <input onChange={handleInput} value={input}></input>
      <button onClick={fetchData}>Get Data</button>
      {dataProfile.name && <h1>La skill de {dataProfile.name}</h1>}
      <img src={camavinga} alt="Camavinga" />
      

    </div>
  );
}

export default App;

/* <div class="contenedor-botones">
    //     <a href="#" class="boton1">
    //         <img src="./global/bs.jpg" alt="Imagen 1"/>
    //     </a>
    //     <a href="clash-of-clans.html" class="boton2">
    //         <img src="./global/coc2.jpg" alt="Imagen 2"/>
    //     </a>
    //     <a href="#" class="boton3">
    //         <img src="./global/cr.jpg" alt="Imagen 3"/>
    //     </a>
    // </div>*/