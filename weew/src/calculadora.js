import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as images from './images.js';

function Calculadora(props) {
  const [dataProfile, setDataProfile] = useState({});
  let { input } = useParams();

  let thlvl = dataProfile.townHallLevel;
  let allvl = dataProfile.builderHallLevel;
  let oroRobado = dataProfile.achievements && dataProfile.achievements[5] ? dataProfile.achievements[5].value : 0;
  let elixirRobado = dataProfile.achievements && dataProfile.achievements[6] ? dataProfile.achievements[6].value : 0;
  let elixirOscuroRobado = dataProfile.achievements && dataProfile.achievements[16] ? dataProfile.achievements[16].value : 0;
  let victoriasAtaqueTotales = dataProfile.achievements && dataProfile.achievements[12] ? dataProfile.achievements[12].value : 0;
  let defensasTotales = dataProfile.achievements && dataProfile.achievements[13] ? dataProfile.achievements[13].value : 0;
  let tropasDonadasTotal = dataProfile.achievements && dataProfile.achievements[14] ? dataProfile.achievements[14].value : 0;
  let tesoreria = dataProfile.achievements && dataProfile.achievements[21] ? dataProfile.achievements[21].value : 0;
  let hechizosDonados = dataProfile.achievements && dataProfile.achievements[23] ? dataProfile.achievements[23].value : 0;
  let clanGamePoints = dataProfile.achievements && dataProfile.achievements[31] ? dataProfile.achievements[31].value : 0;
  let warLeagueStars = dataProfile.achievements && dataProfile.achievements[33] ? dataProfile.achievements[33].value : 0;
  let maquinasDonadas = dataProfile.achievements && dataProfile.achievements[40] ? dataProfile.achievements[40].value : 0;
  let oroCapital = dataProfile.achievements && dataProfile.achievements[41] ? dataProfile.achievements[41].value : 0;
  //skills
  const skillGeneral = dataProfile.achievements && (dataProfile.trophies / victoriasAtaqueTotales * dataProfile.townHallLevel) / 0.75;
  const skilltemporada = dataProfile.achievements && Math.round((6000 / dataProfile.trophies) * dataProfile.attackWins);
  const skilldechoro = ((oroRobado + elixirRobado) / (elixirOscuroRobado * 2)) / 2;
  const compañerismomensual = dataProfile.donations / dataProfile.received;
  //calificadorde skills
  const buenaskillg = skillGeneral <= 50;
  const buenaskillt = skilltemporada >= 10
  const buenaskillc = skilldechoro <= 5 //no se cuanto seria el numero aca aca
  const buenaskillco = compañerismomensual <= 5//tampoco se que poner aca
  //objets destroyed 
  let wallsdestroyed = dataProfile.achievements && dataProfile.achievements[9] ? dataProfile.achievements[9].value : 0;
  let thdestroyed = dataProfile.achievements && dataProfile.achievements[10] ? dataProfile.achievements[10].value : 0;
  let builderhutsdestroyer = dataProfile.achievements && dataProfile.achievements[11] ? dataProfile.achievements[11].value : 0;
  let mortarsdestroyer = dataProfile.achievements && dataProfile.achievements[15] ? dataProfile.achievements[15].value : 0;
  let XBowsdestroyed = dataProfile.achievements && dataProfile.achievements[18] ? dataProfile.achievements[18].value : 0;
  let InfernoTowersdestroyed = dataProfile.achievements && dataProfile.achievements[19] ? dataProfile.achievements[19].value : 0;
  let EagleArtilleriesdestroyed = dataProfile.achievements && dataProfile.achievements[22] ? dataProfile.achievements[22].value : 0;
  let BuilderHalls = dataProfile.achievements && dataProfile.achievements[27] ? dataProfile.achievements[27].value : 0;
  let Scattershotsdestroyed = dataProfile.achievements && dataProfile.achievements[36] ? dataProfile.achievements[36].value : 0;
  let SpellTowersDestroyed = dataProfile.achievements && dataProfile.achievements[43] ? dataProfile.achievements[43].value : 0;
  let TotalMonolithsDestroyed = dataProfile.achievements && dataProfile.achievements[44] ? dataProfile.achievements[44].value : 0;


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
      <h1>Estadísticas de jugador</h1>
      <p> id de ejemplo LPRJ008RU 9JLGVYRJ2 jugador maxeado: PPCRRR0 P9QJYV9PU</p>
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
            <Link to="/">
              <p></p>
              <button class="butons" style={{ marginLeft: "10px" }}>Volver al menu</button>
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
          <div style={{ display: "flex", height: "280px", }}>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='imgs'>
              {dataProfile.role === "member" && <img src={rolImages[1]} alt="Member" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {dataProfile.role === "elder" && <img src={rolImages[2]} alt="Veterano" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {dataProfile.role === "coLeader" && <img src={rolImages[3]} alt="Colider" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {dataProfile.role === "leader" && <img src={rolImages[4]} alt="Lider" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {tropasDonadasTotal && <img src={images.duende} alt="troop" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {tropasDonadasTotal && <img src={images.rayo} alt="troop" className="imgs-aldeas" style={{ width: '40px', height: '40px' }} />}
              {tropasDonadasTotal && <img src={images.lanzarocasMaq} alt="troop" className="imgs-aldeas" style={{ width: '45px', height: '45px' }} />}
            </div>
            <div className="margin">
              {dataProfile.role === "member" && <p className='txts-participacion'>Rol: miembro</p>}
              {dataProfile.role === "elder" && <p className='txts-participacion'>Rol: veterano</p>}
              {dataProfile.role === "coleader" && <p className='txts-participacion'>Rol: cólider</p>}
              {dataProfile.role === "leader" && <p className='txts-participacion'>Rol: líder</p>}
              {{ tropasDonadasTotal } && <p className='txts-participacion'>Total de tropas donadas: {tropasDonadasTotal}</p>}
              {{ hechizosDonados } && <p className='txts-participacion'>Total de hechizos donados: {hechizosDonados}</p>}
              {{ maquinasDonadas } && <p className='txts-participacion'>Total de máquinas donadas: {maquinasDonadas}</p>}
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-recursos'>Recursos saqueados</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='imgs' style={{ marginTop: "10px", marginLeft: "2px" }}>
              {oroRobado && <img alt="img" src={images.oro} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              {elixirRobado && <img alt="img" src={images.elixir} className="imgs-aldeas" style={{ width: "40px", height: "40px", position: "relative", top: "10px" }} />}
              {elixirOscuroRobado && <img alt="img" src={images.elixirOscuro} className="imgs-aldeas" style={{ width: "40px", height: "40px", position: "relative", top: "15px" }} />}
            </div>
            <div className='margin'>
              {{ oroRobado } && <p className='txts-aldeas' style={{ marginLeft: "-5px" }}>Oro robado total: {oroRobado}</p>}
              {{ elixirRobado } && <p className='txts-aldeas' style={{ marginLeft: "-5px" }}>Elixir robado total: {elixirRobado}</p>}
              {{ elixirOscuroRobado } && <p className='txts-aldeas' style={{ marginLeft: "-5px" }}>Elixir oscuro robado total: {elixirOscuroRobado}</p>}
            </div>
          </div>
        </div>

        <div className='jugador'>
          <div className='header'>
            <h1 className='h1-recursos'>Otros recursos</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div className='imgs' style={{ marginLeft: "2px" }}>
              {{ oroCapital } && <img alt="oro capital" src={images.oroCapitalImg} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              {dataProfile.warStars && <img alt="estrellas guerra" src={images.guerraClanes} className="imgs-aldeas" style={{ width: "40px", height: "40px", marginTop: "10px" }} />}
              {{ warLeagueStars } && <img alt="estrellas guerra liga" src={images.guerraClanesLiga} className="imgs-aldeas" style={{ width: "40px", height: "40px", marginTop: "5px" }} />}
              {{ clanGamePoints } && <img alt="puntos juegos clan" src={images.puntosJuegosClan} className="imgs-aldeas" style={{ width: "40px", height: "40px", marginTop: "5px" }} />}
              {{ tesoreria } && <img alt="tesoreria" src={images.tesoreriaImg} className="imgs-aldeas" style={{ width: "40px", height: "40px", marginTop: "0px" }} />}
            </div>
            <div className='margin'>
              {{ oroCapital } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Oro de Capital: {oroCapital}</p>}
              {dataProfile.warStars && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "0px", marginBottom: "30px" }}>Estrellas de Guerra: {dataProfile.warStars}</p>}
              {{ warLeagueStars } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "0px", marginBottom: "30px" }}>Estrellas de Guerra de Liga: {warLeagueStars}</p>}
              {{ clanGamePoints } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "0px", marginBottom: "30px" }}>Puntos de juegos de Clan: {clanGamePoints}</p>}
              {{ tesoreria } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginBottom: "0px" }}>Tesoreria: {tesoreria}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className='cosas-destruidas'>
          <div className='header'>
            <h1 className='h1-destruidas'>Estructuras destruidas</h1>
          </div>
          <div class="grilla-destruidas" style= {{display: "box"}}>
            <div class="fila">
              <div class="item">
              {{ wallsdestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Muros: {wallsdestroyed}</p>}
              {<img alt="img" src={images.Wall} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ thdestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Ayuntamientos: {thdestroyed}</p>}
              {<img alt="img" src={images.TownHall} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ builderhutsdestroyer } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Chozas de constructor: {builderhutsdestroyer}</p>}
              {<img alt="img" src={images.BuilderHut} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ mortarsdestroyer } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Morteros: {mortarsdestroyer}</p>}
              {<img alt="img" src={images.Mortar} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
            </div>
            <div class="fila">
              <div class="item">
              {{ XBowsdestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Ballestas: {XBowsdestroyed}</p>}
              {<img alt="img" src={images.XBow} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ InfernoTowersdestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Torres infernales: {InfernoTowersdestroyed}</p>}
              {<img alt="img" src={images.InfernoTower} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ EagleArtilleriesdestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Artilleria: {EagleArtilleriesdestroyed}</p>}
              {<img alt="img" src={images.EagleArtillery} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{BuilderHalls } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Buider Halls: {BuilderHalls}</p>}
              {<img alt="img" src={images.BuilderHall} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
            </div>
            <div class="fila">
              <div class="item">
              {{Scattershotsdestroyed} && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Scatter Shots: {Scattershotsdestroyed}</p>}
              {<img alt="img" src={images.Scattershot} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ SpellTowersDestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Torres de hechizos: {SpellTowersDestroyed}</p>}
              {<img alt="img" src={images.SpellTower} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
              <div class="item">
              {{ TotalMonolithsDestroyed } && <p className='txts-aldeas' style={{ marginLeft: "-5px", marginTop: "20px", marginBottom: "35px" }}>Monolitos: {TotalMonolithsDestroyed}</p>}
              {<img alt="img" src={images.Monolith} className="imgs-aldeas" style={{ width: "40px", height: "40px" }} />}
              </div>
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
            <button class="butons" onClick={() => mostrarContenido(1)}>Ejército aldea principal</button>
            <button class="butons" onClick={() => mostrarContenido(2)}>Ejército aldea nocturna</button>
          </div>
          {mostrarContenido1 && (
            <div className='ejercito-principal'>
              <div className='tropas-principal'>
                {dataProfile.troops[0]?.name === "Barbarian" ? <img alt="troop" src={images.barbarian} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[1]?.name === "Archer" ? <img alt="troop" src={images.arquera} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[2]?.name === "Goblin" ? <img alt="troop" src={images.duende} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[3]?.name === "Giant" ? <img alt="troop" src={images.gigante} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[4]?.name === "Wall Breaker" ? <img alt="troop" src={images.rompemuros} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[5]?.name === "Balloon" ? <img alt="troop" src={images.globito} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[6]?.name === "Wizard" ? <img alt="troop" src={images.mago} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[7]?.name === "Healer" ? <img alt="troop" src={images.sanadora} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[8]?.name === "Dragon" ? <img alt="troop" src={images.dragon} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[9]?.name === "P.E.K.K.A" ? <img alt="troop" src={images.pekka} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[10]?.name === "Minion" ? <img alt="troop" src={images.esbirro} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[11]?.name === "Hog Rider" ? <img alt="troop" src={images.monta} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[12]?.name === "Valkyrie" ? <img alt="troop" src={images.valquiria} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[13]?.name === "Golem" ? <img alt="troop" src={images.golem} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[14]?.name === "Witch" ? <img alt="troop" src={images.bruja} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[15]?.name === "Lava Hound" ? <img alt="troop" src={images.sabueso} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[16]?.name === "Bowler" ? <img alt="troop" src={images.bowler} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[17]?.name === "Baby Dragon" ? <img alt="troop" src={images.bebedragon} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[18]?.name === "Miner" ? <img alt="troop" src={images.minero} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Electro Dragon")]?.name === "Electro Dragon" ? <img alt="troop" src={images.electrodragon} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Yeti")]?.name === "Yeti" ? <img alt="troop" src={images.yeti} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Dragon Rider")]?.name === "Dragon Rider" ? <img alt="troop" src={images.montadragon} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Electro Titan")]?.name === "Electro Titan" ? <img alt="troop" src={images.electrotitan} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Ice Golem")]?.name === "Ice Golem" ? <img alt="troop" src={images.icegolem} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Electro Titan")]?.name === "Electro Titan" ? <img alt="troop" src={images.electrotitan} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Headhunter")]?.name === "Headhunter" ? <img alt="troop" src={images.headhunter} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Apprentice Warden")]?.name === "Apprentice Warden" ? <img alt="troop" src={images.aprendiz} style={{ width: "60px", height: "60px" }} /> : null}
              </div>
              <div className='hechizos'>
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Lightning Spell")]?.name === "Lightning Spell" ? <img alt="troop" src={images.rayo} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Healing Spell")]?.name === "Healing Spell" ? <img alt="troop" src={images.curacion} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Rage Spell")]?.name === "Rage Spell" ? <img alt="troop" src={images.furia} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Jump Spell")]?.name === "Jump Spell" ? <img alt="troop" src={images.salto} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Freeze Spell")]?.name === "Freeze Spell" ? <img alt="troop" src={images.hielo} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Poison Spell")]?.name === "Poison Spell" ? <img alt="troop" src={images.veneno} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Earthquake Spell")]?.name === "Earthquake Spell" ? <img alt="troop" src={images.terremoto} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Haste Spell")]?.name === "Haste Spell" ? <img alt="troop" src={images.aceleracion} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Clone Spell")]?.name === "Clone Spell" ? <img alt="troop" src={images.clon} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Skeleton Spell")]?.name === "Skeleton Spell" ? <img alt="troop" src={images.esqueleto} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Bat Spell")]?.name === "Bat Spell" ? <img alt="troop" src={images.bats} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Invisibility Spell")]?.name === "Invisibility Spell" ? <img alt="troop" src={images.invisibilidad} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.spells[dataProfile.spells.findIndex(obj => obj.name === "Recall Spell")]?.name === "Recall Spell" ? <img alt="troop" src={images.teletransportacion} style={{ width: "60px", height: "60px" }} /> : null}
              </div>
              {dataProfile.heroes &&
                <div className='heroes'>
                  <img alt="rey" src={images.reyBarbaro} style={{ width: "60px", height: "60px" }} />
                  {thlvl >= 9 && <img alt="reina" src={images.reinaArquera} style={{ width: "60px", height: "60px" }} />}
                  {thlvl >= 11 && <img alt="centi" src={images.centinela} style={{ width: "60px", height: "60px" }} />}
                  {thlvl >= 13 && <img alt="champ" src={images.campeona} style={{ width: "60px", height: "60px" }} />}
                </div>}
              <div className='mascotas'>
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "L.A.S.S.I")]?.name === "L.A.S.S.I" ? <img alt="troop" src={images.lassi} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Mighty Yak")]?.name === "Mighty Yak" ? <img alt="troop" src={images.mightyyak} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Electro Owl")]?.name === "Electro Owl" ? <img alt="troop" src={images.electroowl} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Unicorn")]?.name === "Unicorn" ? <img alt="troop" src={images.unicorn} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Phoenix")]?.name === "Phoenix" ? <img alt="troop" src={images.phoenix} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Poison Lizard")]?.name === "Poison Lizard" ? <img alt="troop" src={images.poisonlizard} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Diggy")]?.name === "Diggy" ? <img alt="troop" src={images.diggy} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Frosty")]?.name === "Frosty" ? <img alt="troop" src={images.frosty} style={{ width: "60px", height: "60px" }} /> : null}
              </div>
              <div className='maquinas'>
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Wall Wrecker")]?.name === "Wall Wrecker" ? <img alt="troop" src={images.rompemurosmaq} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Battle Blimp")]?.name === "Battle Blimp" ? <img alt="troop" src={images.dirigible} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Stone Slammer")]?.name === "Stone Slammer" ? <img alt="troop" src={images.lanzarocasMaq} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Siege Barracks")]?.name === "Siege Barracks" ? <img alt="troop" src={images.asedio} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Log Launcher")]?.name === "Log Launcher" ? <img alt="troop" src={images.lanzatroncos} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Flame Flinger")]?.name === "Flame Flinger" ? <img alt="troop" src={images.catapulta} style={{ width: "60px", height: "60px" }} /> : null}
                {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Battle Drill")]?.name === "Battle Drill" ? <img alt="troop" src={images.excavadora} style={{ width: "60px", height: "60px" }} /> : null}
              </div>
            </div>
          )}

          {mostrarContenido2 && (
            <div id="ejercito-nocturna">
              <div className='ejercito-principal'>
                <div className='tropas-principal'>
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Raged Barbarian")]?.name === "Raged Barbarian" ? <img alt="troop" src={images.ragedbarbarian} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Sneaky Archer")]?.name === "Sneaky Archer" ? <img alt="troop" src={images.sneakyarcher} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Boxer Giant")]?.name === "Boxer Giant" ? <img alt="troop" src={images.boxergiant} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Bomber")]?.name === "Bomber" ? <img alt="troop" src={images.bomber} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Cannon Cart")]?.name === "Cannon Cart" ? <img alt="troop" src={images.cannoncart} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Night Witch")]?.name === "Night Witch" ? <img alt="troop" src={images.nightwitch} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Drop Ship")]?.name === "Drop Ship" ? <img alt="troop" src={images.dropship} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Power P.E.K.K.A")]?.name === "Power P.E.K.K.A" ? <img alt="troop" src={images.powerpekka} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Hog Glider")]?.name === "Hog Glider" ? <img alt="troop" src={images.hogglider} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.troops[dataProfile.troops.findIndex(obj => obj.name === "Electrofire Wizard")]?.name === "Electrofire Wizard" ? <img alt="troop" src={images.electrofirewizard} style={{ width: "60px", height: "60px" }} /> : null}
                </div>
                <div className='heroes'>
                  {dataProfile.heroes[dataProfile.heroes.findIndex(obj => obj.name === "Battle Machine")]?.name === "Battle Machine" ? <img alt="troop" src={images.battlemachine} style={{ width: "60px", height: "60px" }} /> : null}
                  {dataProfile.heroes[dataProfile.heroes.findIndex(obj => obj.name === "Battle Copter")]?.name === "Battle Copter" ? <img alt="troop" src={images.battlecopter} style={{ width: "60px", height: "60px" }} /> : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <h2>Skill General = {Math.round(skillGeneral)}</h2>
      {buenaskillg ? (
        <p>mejor que la mayoria</p>
      ) : (
        <p>estas mas o menos</p>
      )}
      <h3>Skill Temporal = {Math.round(skilltemporada)}</h3>
      {buenaskillt ? (
        <p>sali afuera por favor</p>
      ) : (
        <p>mantenete al dia</p>
      )}
      <h4> Skill Choreal = {Math.round(skilldechoro)}</h4>
      {buenaskillc ? (
        <p>estas como para ser politico {/* bien unfunny */}</p>
      ) : (
        <p>buen ciudadano que no roba</p>
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

*/