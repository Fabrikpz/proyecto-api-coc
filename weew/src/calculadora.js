import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Calculadora(props) {
  const [dataProfile, setDataProfile] = useState({});
  let { input } = useParams();

  useEffect(() => {

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

    fetchData();
  }, [input]);

  return (
    <div id="rectangulo">
      <h1> Calculadora de skills </h1>
      {dataProfile.name && <p>Nombre: {dataProfile.name}</p>}
      {dataProfile.townHallLevel && <p>Nivel de ayuntamiento: {dataProfile.townHallLevel}</p>}
      {dataProfile.clan && <p>Clan: {dataProfile.clan.name}</p>}
      <div>
        <img src="../public/cocimgs/trophie.png" />
        {dataProfile.trophies && <p>Trofeos: {dataProfile.trophies}</p>}
      </div>
      <div>
        <h2>skill general ={Math.round(dataProfile.trophies / dataProfile.attackWins * dataProfile.townHallLevel)}</h2>
        <h3>ranking del jugador={dataProfile.seasonRankedPlayer}</h3>
      </div>
      <div>
        {dataProfile.trophies <= 799 ? ( //muestra las ligas
          <img src="bronze.png" />
        ) : dataProfile.trophies <= 1399 ? (
          <img src="silver.png" />
        ) : (
          <img src="gold.png" />
        )}
      </div>
    </div>
  );
}

export default Calculadora;