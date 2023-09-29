const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const clashApi = require('clash-of-clans-api');
const { Client } = require('clashofclans.js');
const client = new Client();
const Cookies=require('Cookies')
/*const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });*/
app.use(express.json());
app.use(cors());

/*const mail = process.env.EMAIL;
const pass = process.env.PASSWORD;*/

(async function () {
    await client.login({ email: "fabrisilveyra@gmail.com", password: "fortheemperor"});
})();


let idinput=' '
//LPRJ008RU 9JLGVYRJ2 jugador maxeado: PPCRRR0 P9QJYV9PU
app.get(`/getClashOfClansData/%23:input`, async (req, res) => {
    const input = req.params.input;
    const playerTag = `#${input}`;
    idinput=`${input}`
    try {
        const player = await client.getPlayer(playerTag);
        res.json(player);
    } catch (error) {
        console.error(`Error getting info from API: ${error.message}`);
        res.status(404).json({ reason: 'notFound', message: 'Not found with tag' });
   
    }   
});
var visito=false

const cookies = new Cookies(req, res);  

const lastid=cookies.get('saveuserid', { signed: true }) //setea la cookie

cookies.set('saveuserid', idinput.toString(), {
    expires: new Date('2025-12-31'), // Expira en "fecha"
    path: '/App.js',
    signed: true 

})//guarda el valor de la cookie


if (!saveuserid) {
    res.end(visito==false)
  } else {
    
    res.end(visito==true && saveuserid)
  }


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});