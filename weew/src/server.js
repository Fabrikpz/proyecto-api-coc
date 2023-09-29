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


const cookies = new Cookies(req, res);

cookies.set('saveuserid', 'idinput', {
    path: '/calculadora.js',
    expires: new Date('2025-12-31'), // Expira en "fecha"
    //maxAge: 3600, // Expires in 1 hour
    //secure: true, // Only send over HTTPS
    //httpOnly: true, // Inaccessible to client-side JavaScript
    //sameSite: 'Strict', // Enforce strict same-site policy
  });
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});