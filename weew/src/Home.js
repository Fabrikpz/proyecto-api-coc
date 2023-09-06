import './App.css';
import React, { useState, useEffect } from 'react';
import camavinga from "./camavinga.jpg";

function App() {
  const [input, setInput] = useState('');
  const [dataProfile, setDataProfile] = useState({});

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmYzdmYzRkLTgzYTEtNDhlMy1iYzllLWUzOGE0NjRiMjBjNCIsImlhdCI6MTY5NDAzNDAxMiwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4yMjkuMTMxLjIzNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.s05si08BH54hogrZ0lAK59VU7OmklM7yR_hHmr7O4qLpxMXWK5khD31ZPdKkn5I9uz2DLZSun_w51ea_jzUlfQ";

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3500/getClashOfClansData/%23qvyuvrpup`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`
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
    <div>
      <h1>CLASH OF CLANS STATS #QVYUVRPUP</h1>
      <p>INGRESE SU ID:</p>
      <input onChange={handleInput} value={input} placeholder="Ingrese su ID"></input>
      <button onClick={fetchData}>Obtener Datos</button>
      {dataProfile.name && <h1>Usuario: {dataProfile.name}</h1>}
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