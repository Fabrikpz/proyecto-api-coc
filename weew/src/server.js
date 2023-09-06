const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500;
const clashApi = require('clash-of-clans-api');

app.use(express.json());
app.use(cors());

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmYzdmYzRkLTgzYTEtNDhlMy1iYzllLWUzOGE0NjRiMjBjNCIsImlhdCI6MTY5NDAzNDAxMiwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4yMjkuMTMxLjIzNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.s05si08BH54hogrZ0lAK59VU7OmklM7yR_hHmr7O4qLpxMXWK5khD31ZPdKkn5I9uz2DLZSun_w51ea_jzUlfQ";
let client = clashApi({
    token: token,
});

app.get('/getClashOfClansData/%23qvyuvrpup', async (req, res) => {

    const playerTag = '#QVYUVRPUP';
    try {
        const player = await client.playerByTag(playerTag);
        res.json(player);
    } catch (error) {
        console.error(`Error getting info from API: ${error.message}`);
        res.status(404).json({ reason: 'notFound', message: 'Not found with tag' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});