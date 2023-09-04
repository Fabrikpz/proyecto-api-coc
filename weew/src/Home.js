import './App.css';
import React, { useState, useEffect } from 'react';
import camavinga from "./camavinga.jpg";
import axios from "axios";

function App() {
  const [input, setInput] = useState('');
  const [dataProfile, setDataProfile] = useState({});
  const playerid ="qvyuvrpup";
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMyMTFiOTQ0LWIwZjAtNDYyYS1iMjVmLTM1NTA0NGQyMmQ3NCIsImlhdCI6MTY5Mzg1NTA1NSwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.j2ZdgsSU-V8IiwFmBXTdMOiOTr2pH5yxJjHDcPr_0w_G5LWfVJTAOl7UcPhyvHpyo9yJ4-pvTOt5xrt-zsgpxQ';
  const apiUrl = `https://api.clashofclans.com/v1/players/%23qvyuvrpup`;

  //#qvyuvrpup
  const getDataCoc = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error obteniendo data: ${error}`);
      return {};
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const fetchData = async () => {
    const fetchedData = await getDataCoc();
    if (fetchedData) {
      console.log(fetchedData);
      setDataProfile(fetchedData);
    }
  };

  return (
    <div>
      <h1>CLASH OF CLANS SKILL-CHECK</h1>
      <p>INGRESE SU ID:</p>
      <input onChange={handleInput} value={input}></input>
      <button onClick={fetchData}>Get Data</button>
      {dataProfile.name && <h1>La skill de {dataProfile.name}</h1>}
      <img src={camavinga} alt="Camavinga" />
    </div>
  );
}

export default App;

/*const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001; // Puedes cambiar el puerto según tus necesidades

app.use(express.json());

app.get('/getClashOfClansData/:playerTag', async (req, res) => {
  const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API válida
  const playerTag = req.params.playerTag;
  const apiUrl = `https://api.clashofclans.com/v1/players/%23${playerTag}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(`Error obteniendo datos de Clash of Clans: ${error.message}`);
    res.status(500).json({ error: 'Error obteniendo datos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
*/