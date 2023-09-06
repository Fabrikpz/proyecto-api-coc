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
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEzNWI1NDFiLTQ1OTAtNDk1OC1hZTdiLWQ5ZmEwOWE2MGViZiIsImlhdCI6MTY5NDAwOTI3Niwic3ViIjoiZGV2ZWxvcGVyLzJhYWViMmU1LTJkMWYtZWMyZC01MTVlLTFhNmI4MjAzNTk1MiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.TiT6rPdMtJNlRXI7JmcJi42_6MK4WDJBBjuoxTxbNDhVWRMalBXWMpQoz_8jEVDYQC2SnC--gF1hu5XL_Dm3Vg';
  /*const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/getClashOfClansData/9ry99pruq`);
      setDataProfile(response.data); // Aquí asignas los datos a tu estado
    } catch (error) {
      console.error(`Error obteniendo data: ${error}`);
    }
  };*/
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3500/getClashOfClansData/${input}`, {
        method: 'GET',
        headers: {
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
//#qvyuvrpup
  return (
    <div>
      <h1>qvyuvrpup</h1>
      <h1>CLASH OF CLANS STATS</h1>
      <p>INGRESE SU ID:</p>
      <input onChange={handleInput} value={input} placeholder="enter your id"></input>
      <button onClick={fetchData}>Get Data</button>
      {dataProfile.name && <h1>Username: {dataProfile.name}</h1>}
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