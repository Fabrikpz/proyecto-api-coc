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

  const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcxOGU1YjhlLTM4ODAtNGVkMy1hNDRlLTc1NzA3NDhjODRjMiIsImlhdCI6MTY5NDYwOTkxOCwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC45Ni4xMjAuMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.DmXzvWcVhhv8kj2AZpcx8o5ppxfF97jPE9YsD1wfN_HiEoQIPAChODX3IQJfi5HPwL4mmSiDVYWPReXvR-Ko4g";

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3500/getClashOfClansData/%23${input}`, {
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
    <div id="rectangulo">
      <h1 class="tex">CLASH OF CLANS STATS #QVYUVRPUP</h1>
      <p>INGRESE SU ID:</p>
      <input class="mimi" onChange={handleInput} value={input} placeholder="Ingrese su ID"></input>
      <p></p>
      <Link to="/calculadora">
        <button onClick={fetchData} href="calculadora">Obtener Datos</button>
      </Link>
    </div>
  );
}

export default App;