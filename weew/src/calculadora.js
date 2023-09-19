import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trophie from './cocimgs/trophie.png';
import xp from "./cocimgs/xp.png";

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
      <div className='container'>
        <div className="jugador">
          <div className='header'>
            <h1 className='h1'>Jugador</h1>
          </div>
          <div className="nombre-jugador">
            {dataProfile.name && <p>{dataProfile.name}</p>}
          </div>
          <div style={{ display: "flex" }}>
            <div className="imgs">
              <img src={xp} />
              <img className="trofeos" src={trophie} style={{ width: "35px", height: "35px" }} />
              {dataProfile.clan && <img className="clan" src={dataProfile.clan.badge.url} style={{ width: "55px", height: "55px" }} />}
            </div>
            <div className="margin">
              <div >{dataProfile.expLevel && <p>Nivel de XP: {dataProfile.expLevel}</p>}</div>
              <div style={{ position: "relative", top: "13px" }}>{dataProfile.trophies && <p>Trofeos: {dataProfile.trophies}</p>}</div>
              <div style={{ position: "relative", top: "20px" }}>{dataProfile.clan && <p>Clan: {dataProfile.clan.name}</p>}</div>
            </div>
          </div>
        </div>
        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-aldea-main'>Aldea principal</h1>
          </div>
          {dataProfile.townHallLevel && <p>Nivel de ayuntamiento: {dataProfile.townHallLevel}</p>}
        </div>
        <div className='jugador'>
          {dataProfile.townHallLevel && <p>Nivel de ayuntamiento: {dataProfile.townHallLevel}</p>}
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
/* calculadora de gallo
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
      </div>*/