import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trophie from './cocimgs/trophie.png';
import xp from "./cocimgs/xp.png";
import th1 from "./cocimgs/th1.png";
import th2 from "./cocimgs/th2.png";
import th3 from "./cocimgs/th3.png";
import th4 from "./cocimgs/th4.png";
import th5 from "./cocimgs/th5.png";
import th6 from "./cocimgs/th6.png";
import th7 from "./cocimgs/th7.png";
import th8 from "./cocimgs/th8.png";
import th9 from "./cocimgs/th9.png";
import th10 from "./cocimgs/th10.png";
import th11 from "./cocimgs/th11.png";
import th12 from "./cocimgs/th12.png";
import th13 from "./cocimgs/th13.png";
import th14 from "./cocimgs/th14.png";
import th15 from "./cocimgs/th15.png";

function Calculadora() {
  const [dataProfile, setDataProfile] = useState({});
  let { input } = useParams();
  let thlvl = dataProfile.townHallLevel;
  let trofeos = dataProfile.trophies;
  const thImages = {
    1: th1, 2: th2, 3: th3, 4: th4, 5: th5, 6: th6, 7: th7, 8: th8, 9: th9, 10: th10, 11: th11, 12: th12, 13: th13, 14: th14, 15: th15
  };

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
              {dataProfile.clan && <img src={xp} />}
              {dataProfile.clan && <img className="trofeos" src={trophie} style={{ width: "35px", height: "35px" }} />}
              {dataProfile.clan && <img src={dataProfile.clan.badge.url} style={{ width: "55px", height: "55px" }} />}
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
          <div style={{ display: "flex" }}>
            <div className='imgs'>
              {thlvl >= 1 && thlvl <= 15 && <img src={thImages[thlvl]} style={{ width: "55px", height: "55px" }} />}
            </div>
            <div className='margin'>
              {dataProfile.townHallLevel && <p>Nivel de th: {dataProfile.townHallLevel}</p>}
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-aldea-nocturna'>Aldea nocturna</h1>
          </div>
          <div className='imgs'>
          </div>
          <div>
            {dataProfile.townHallLevel && <p>Nivel de ayuntamiento: {dataProfile.townHallLevel}</p>}
          </div>
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