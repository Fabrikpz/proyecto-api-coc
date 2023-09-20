import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trophie from './cocimgs/trophie.png';
//aldea
import xp from "./cocimgs/xp.png";
import th1 from "./cocimgs/aldea/th1.png";
import th2 from "./cocimgs/aldea/th2.png";
import th3 from "./cocimgs/aldea/th3.png";
import th4 from "./cocimgs/aldea/th4.png";
import th5 from "./cocimgs/aldea/th5.png";
import th6 from "./cocimgs/aldea/th6.png";
import th7 from "./cocimgs/aldea/th7.png";
import th8 from "./cocimgs/aldea/th8.png";
import th9 from "./cocimgs/aldea/th9.png";
import th10 from "./cocimgs/aldea/th10.png";
import th11 from "./cocimgs/aldea/th11.png";
import th12 from "./cocimgs/aldea/th12.png";
import th13 from "./cocimgs/aldea/th13.png";
import th14 from "./cocimgs/aldea/th14.png";
import th15 from "./cocimgs/aldea/th15.png";
//aldea nocturna
import al1 from "./cocimgs/aldea_nocturna/al1.png";
import al2 from "./cocimgs/aldea_nocturna/al2.png";
import al3 from "./cocimgs/aldea_nocturna/al3.png";
import al4 from "./cocimgs/aldea_nocturna/al4.png";
import al5 from "./cocimgs/aldea_nocturna/al5.png";
import al6 from "./cocimgs/aldea_nocturna/al6.png";
import al7 from "./cocimgs/aldea_nocturna/al7.png";
import al8 from "./cocimgs/aldea_nocturna/al8.png";
import al9 from "./cocimgs/aldea_nocturna/al9.png";
import al10 from "./cocimgs/aldea_nocturna/al10.png";
import highestTrophies from "./cocimgs/besttrophie.png";
import attackBarbarian from "./cocimgs/attackbarbarian.png";
import shield from "./cocimgs/shield.png";

function Calculadora() {
  const [dataProfile, setDataProfile] = useState({});
  let { input } = useParams();
  let thlvl = dataProfile.townHallLevel;
  let allvl = dataProfile.builderHallLevel;
  const thImages = {
    1: th1, 2: th2, 3: th3, 4: th4, 5: th5, 6: th6, 7: th7, 8: th8, 9: th9, 10: th10, 11: th11, 12: th12, 13: th13, 14: th14, 15: th15
  };
  const alImages = {
    1: al1, 2: al2, 3: al3, 4: al4, 5: al5, 6: al6, 7: al7, 8: al8, 9: al9, 10: al10
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
    <div id="rectangulo2">
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
              {dataProfile.clan && <img alt="xp" src={xp} />}
              {dataProfile.clan && <img alt="trofeos" className="trofeos" src={trophie} style={{ width: "35px", height: "35px" }} />}
              {dataProfile.clan && <img alt="clan" src={dataProfile.clan.badge.url} style={{ width: "55px", height: "55px" }} />}
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
              <div style={{ position: "relative", top: "-16px" }}>{thlvl >= 1 && thlvl <= 15 && <img alt="ayuntamiento" src={thImages[thlvl]} style={{ width: "55px", height: "55px" }} />}</div>
              <div style={{ position: "relative", top: "-12px" }}>{dataProfile.trophies && <img src={highestTrophies} style={{ width: "50px", height: "50px" }} />}</div>
              <div style={{ position: "relative", top: "-7px" }}>{dataProfile.trophies && <img src={attackBarbarian} style={{ width: "50px", height: "50px" }} />}</div>
              <div style={{ position: "relative", top: "-2px", right:"-9px" }}>{dataProfile.trophies && <img src={shield} style={{ width: "50px", height: "50px" }} />}</div>
            </div>
            <div className='margin'>
              <div style={{ position: "relative", top: "-12px" }}>{dataProfile.townHallLevel && <p>Nivel de ayunt: {dataProfile.townHallLevel}</p>}</div>
              <div style={{ position: "relative", top: "6px" }}>{dataProfile.bestTrophies && <p>Record de trofeos: {dataProfile.bestTrophies}</p>}</div>
              <div style={{ position: "relative", top: "30px" }}>{dataProfile.trophies && <p>Victorias totales: {dataProfile.achievements[12].value}</p>}</div>
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-aldea-nocturna'>Aldea nocturna</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>
              <div style={{position:"relative", right:"5px"}}>{allvl >= 1 && allvl <= 15 && <img alt="ayuntamiento" src={alImages[allvl]} style={{ width: "60px", height: "60px" }} />}</div>
              <div style={{ position: "relative", top: "2px" }}>{dataProfile.trophies && <img src={highestTrophies} style={{ width: "50px", height: "50px" }} />}</div>
            </div>
            <div>
              {dataProfile.builderHallLevel && <p>Nivel de ayunt.: {dataProfile.builderHallLevel}</p>}
              <div style={{position:"relative", top:"25px"}}>{dataProfile.builderHallLevel && <p>Record de trofeos: {dataProfile.bestBuilderBaseTrophies}</p>}</div>
            </div>

          </div>
        </div>
      </div>
      <div>

      <div className='jugador'>
          <div className='header'>
            <h1 className='h1-clan'>Participacion en clan</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>
            
            </div>
            <div className='margin'>
              {dataProfile.role && <p>Rol: {dataProfile.role}</p>}
              {dataProfile.achievements[14].value && <p>Tropas donadas: {dataProfile.achievements[14].value}</p>}
            </div>
          </div>
        </div>
        <h1>skill de temporada ={Math.round((6000/dataProfile.trophies) / dataProfile.attackWins * dataProfile.townHallLevel)}</h1>
        <h2>skill general ={Math.round(dataProfile.trophies / dataProfile.achievements[12].value * dataProfile.townHallLevel)/0.75}</h2>
       <h3> skill de choro = </h3>
        
      </div>
    </div>
  );
}

export default Calculadora;
//QJL8G2PRL 
//dataProfile.achievements[14].value tropas donadas
//dataProfiel.achievements[13].value unbrekeable
/* calculadora de gallo
 <p>compañerismo mensual={dataProfile.clan.donations / dataProfile.clan.donationsReceived}</p>

 <h1>skill de temporada ={Math.round((6000/dataProfile.trophies) / dataProfile.attackWins * dataProfile.townHallLevel)}</h1>
  <h2>ranking del jugador={dataProfile.seasonRankedPlayer}</h2>


        <h3>ranking del jugador={dataProfile.seasonRankedPlayer}</h3>
      </div>
      <div>
        {dataProfile.trophies >= 799 ? ( //muestra las ligas
          <img src="bronze.png" />
        ) : dataProfile.trophies >= 1399 ? (
          <img src="silver.png" />
        )
         : dataProfile.trophies >= 1999 ?
        (
          <img src="gold.png" />
        )
       : dataProfile.trophies >= 2599 ? (
          <img src="cristal.png" />
        )
       : dataProfile.trophies >= 3199 ? (
          <img src="master.png" />
        ) : dataProfile.trophies >= 4099 ? (
          <img src="champs.png" />
        ) : dataProfile.trophies >= 4999 ? (
          <img src="titan.png" />
        ) : dataProfile.trophies >= 5000 ? (
          <img src="legend.png" />
        )
      }
      </div>*/