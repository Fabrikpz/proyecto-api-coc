import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as images from './images.js';




function Calculadora(props) {
  const [dataProfile, setDataProfile] = useState({});
  let { input } = useParams();



  let thlvl = dataProfile.townHallLevel;
  let allvl = dataProfile.builderHallLevel;
  let goldstolen=dataProfile.achievements && dataProfile.achievements[6] ? dataProfile.achievements[6].value : 0;
  let victoriasAtaqueTotales = dataProfile.achievements && dataProfile.achievements[12] ? dataProfile.achievements[12].value : 0;
  let defensasTotales = dataProfile.achievements && dataProfile.achievements[13] ? dataProfile.achievements[13].value : 0;
  let tropasDonadasTotal = dataProfile.achievements && dataProfile.achievements[14] ? dataProfile.achievements[14].value : 0;
  let hechizosDonados = dataProfile.achievements && dataProfile.achievements[23] ? dataProfile.achievements[23].value : 0;
  let maquinasDonadas = dataProfile.achievements && dataProfile.achievements[40] ? dataProfile.achievements[40].value : 0;


//skills
const skillgeneral=  dataProfile.achievements && (dataProfile.trophies / victoriasAtaqueTotales * dataProfile.townHallLevel) / 0.75;
const skilltemporada =dataProfile.achievements && Math.round((6000 / dataProfile.trophies) / dataProfile.attackWins * dataProfile.townHallLevel)
const skilldechoro = goldstolen/victoriasAtaqueTotales
const compañerismomensual= dataProfile.clan.donations / dataProfile.clan.donationsReceived
//skills


//calificadorde skills
const buenaskillg = skillGeneral <= 50;
const buenaskillt=skilltemporada >=10
const buenaskillc=skilldechoro <=5 //no se cuanto seria el numero aca aca
const buenaskillco=compañerismomensual  <=5//tampoco se que poner aca
//calificadorde skills


  const thImages = {
    1: images.th1, 2: images.th2, 3: images.th3, 4: images.th4, 5: images.th5, 6: images.th6, 7: images.th7, 8: images.th8, 9: images.th9, 10: images.th10, 11: images.th11, 12: images.th12, 13: images.th13, 14: images.th14, 15: images.th15
  };
  const alImages = {
    1: images.al1, 2: images.al2, 3: images.al3, 4: images.al4, 5: images.al5, 6: images.al6, 7: images.al7, 8: images.al8, 9: images.al9, 10: images.al10
  };
  const rolImages = {
    1: images.miembro, 2: images.veterano, 3: images.colider, 4: images.lider
  }


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

  const [mostrarContenido1, setMostrarContenido1] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);

  const mostrarContenido = (contenido) => {
    setMostrarContenido1(contenido === 1);
    setMostrarContenido2(contenido === 2);
  };

  
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
              {dataProfile.clan && <img alt="xp" src={images.xp} />}
              {dataProfile.clan && <img alt="trofeos" className="trofeos" src={images.trophy} style={{ width: "35px", height: "35px" }} />}
              {dataProfile.clan && <img alt="clan" src={dataProfile.clan.badge.url} style={{ width: "55px", height: "55px" }} />}
            </div>
            <div className="margin">
              <div >{dataProfile.expLevel && <p>Nivel de XP: {dataProfile.expLevel}</p>}</div>
              <div style={{ position: "relative", top: "10px" }}>{dataProfile.trophies && <p>Trofeos: {dataProfile.trophies}</p>}</div>
              <div style={{ position: "relative", top: "17px" }}>{dataProfile.clan && <p>Clan: {dataProfile.clan.name}</p>}</div>
            </div>
          </div>
          <div className='change-tag'>
            <p style={{ marginLeft: "10px", marginBottom: "5px" }}>Cambiar jugador:</p>
            <Link to="/">
              <button style={{ marginLeft: "10px" }}>Volver</button>
            </Link>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-aldea-main'>Aldea principal</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>
              {thlvl >= 1 && thlvl <= 15 && <img alt="ayuntamiento" src={thImages[thlvl]} className="imgs-aldeas" style={{ width: "55px", height: "55px" }} />}
              {dataProfile.trophies && <img alt="trofeos" src={images.highestTrophies} className="imgs-aldeas" style={{ width: "50px", height: "50px" }} />}
              {dataProfile.trophies && <img alt="img" src={images.attackBarbarian} className="imgs-aldeas" style={{ width: "50px", height: "50px" }} />}
              {dataProfile.trophies && <img alt="img" src={images.shield} className="imgs-aldeas" style={{ width: "50px", height: "50px", position: "relative", right: "-7px" }} />}
            </div>
            <div className='margin'>
              {dataProfile.townHallLevel && <p className='txts-aldeas'>Nivel de ayunt: {dataProfile.townHallLevel}</p>}
              {dataProfile.bestTrophies && <p className='txts-aldeas'>Record de trofeos: {dataProfile.bestTrophies}</p>}
              {dataProfile.trophies && <p className='txts-aldeas'>Victorias totales: {victoriasAtaqueTotales}</p>}
              {dataProfile.trophies && <p className='txts-aldeas'>Defensas totales: {defensasTotales}</p>}
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-aldea-nocturna'>Aldea nocturna</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>
              {allvl >= 1 && allvl <= 15 && <img alt="img" src={alImages[allvl]} className="imgs-aldeas" style={{ width: "55px", height: "55px" }} />}
              {dataProfile.trophies && <img alt="img" src={images.highestTrophies} className="imgs-aldeas" style={{ width: "50px", height: "50px" }} />}
              {dataProfile.trophies && <img alt="img" src={images.trophy} className="imgs-aldeas" style={{ width: "50px", height: "45px" }} />}
            </div>
            <div className='margin'>
              {dataProfile.builderHallLevel && <p className='txts-aldeas'>Nivel de ayunt.: {dataProfile.builderHallLevel}</p>}
              {dataProfile.builderHallLevel && <p className='txts-aldeas'>Record de trofeos: {dataProfile.bestBuilderBaseTrophies}</p>}
              {dataProfile.builderHallLevel && <p className='txts-aldeas'>Trofeos actuales: {dataProfile.builderBaseTrophies}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-clan'>Participacion en clan</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'  style={{ marginTop: '10px' }}>
              {dataProfile.role === "member" && <img src={rolImages[1]} alt="Member" style={{ width: '35px', height: '35px' }} />}
              {dataProfile.role === "veterano" && <img src={rolImages[2]} alt="Veterano" style={{ width: '35px', height: '35px' }} />}
              {dataProfile.role === "colider" && <img src={rolImages[3]} alt="Colider" style={{ width: '35px', height: '35px' }} />}
              {dataProfile.role === "lider" && <img src={rolImages[4]} alt="Lider" style={{ width: '35px', height: '35px' }} />}
              {/* otros iconos
              {tropasDonadasTotal && <img src={images.tropas} alt="tropas donadas" style={{ width: '35px', height: '35px' }}/>}
              {hechizosDonados && <img src={images.hechizos} alt="hechizos donados" style={{ width: '35px', height: '35px' }}/>}
              {maquinasDonadas && <img src={images.maquinas} alt="maquinas donadas" style={{ width: '35px', height: '35px' }}/>}
              */}
            </div>
            <div className="margin" style={{ top: "10px"}}>
              {dataProfile.role && <p>Rol: {dataProfile.role}</p>}
              {{tropasDonadasTotal} && <p style={{ marginTop: '30px' }}>Total de tropas donadas: {tropasDonadasTotal}</p>}
              {{hechizosDonados} && <p style={{ marginTop: '30px' }}>Total de hechizos donados: {hechizosDonados}</p>}
              {{maquinasDonadas} && <p style={{ marginTop: '30px' }}>Total de máquinas donadas: {maquinasDonadas}</p>}
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-recursos'>Recursos saqueados</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>

            </div>
            <div className='margin'>
              <p>oro, elixir, elixir oscuro</p>
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-recursos'>Otros recursos</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs'>
              
            </div>
            <div className='margin'>
              <p>Oro de Capital, War Stars, Clan War League Stars, Puntos juegos del clan, tesoreria, gemas x quitar obstaculos</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className='cosas-destruidas'>
          <div className='header'>
            <h1 className='h1-destruidas'>Estructuras destruidas</h1>
          </div>
          <div class="grilla-destruidas">
            <div class="fila">
              <div class="item">Elemento 1</div>
              <div class="item">Elemento 2</div>
              <div class="item">Elemento 3</div>
              <div class="item">Elemento 4</div>
            </div>
            <div class="fila">
              <div class="item">Elemento 5</div>
              <div class="item">Elemento 6</div>
              <div class="item">Elemento 7</div>
              <div class="item">Elemento 8</div>
            </div>
            <div class="fila">
              <div class="item">Elemento 9</div>
              <div class="item">Elemento 10</div>
              <div class="item">Elemento 11</div>
            </div>
          </div>
        </div>
      </div>

      <div className='container4'>
        <div className='ejercito'>
          <div className='header'>
            <h1 className='h1-tropas'>Ejército</h1>
          </div>
          <div className='btns'>
          <button onClick={() => mostrarContenido(1)}>Ejército aldea principal</button>
          <button onClick={() => mostrarContenido(2)}>Ejército aldea nocturna</button>
          </div>
          {mostrarContenido1 && (
            <div id="ejercito-principal">
              Contenido del botón 1
            </div>
          )}

          {mostrarContenido2 && (
            <div id="ejercito-nocturna">
              Contenido del botón 2
            </div>
          )}
        </div>
      </div>



      <h2>skill general = {Math.round(skillGeneral)}</h2>
      {buenaskillg ? (
        <p>mejor que la mayoria</p>
      ) : (
        <p>estas mas o menos</p>
      )}
<h3>skill temporal = {Math.round(skilltemporada)}</h3>
      {buenaskillt ? (
        <p>sali afuera por favor</p>
      ) : (
        <p>mantenete al dia</p>
      )}
<h4> skill choreal = {Math.round(skilldechoro)}</h4>
      {buenaskillc ? (
        <p>estas como para ser politico</p>
      ) : (
        <p>buen ciudadano!</p>
      )}
<h4> compañerismo = {Math.round(compañerismomensual)}</h4>
      {buenaskillco ? (
        <p>buen compañero de clan</p>
      ) : (
        <p>mala persona</p>
      )}

      
     
    </div>
  );
}

export default Calculadora;
//QJL8G2PRL
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

      /*
        if(dataProfile.role = "member"){
          <img src="rolImages[1]/>
        } else if(dataProfile.role = "veterano"){
          <img src="rolImages[2]/>
         } else if(dataProfile.role = "colider"){
          <img src="rolImages[3]/>
         } else if(dataProfile.role = "lider"){
          <img src="rolImages[3]/>
        
      */