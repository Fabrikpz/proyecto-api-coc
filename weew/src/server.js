const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500;
const clashApi = require('clash-of-clans-api');

app.use(express.json());
app.use(cors());

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcxOGU1YjhlLTM4ODAtNGVkMy1hNDRlLTc1NzA3NDhjODRjMiIsImlhdCI6MTY5NDYwOTkxOCwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC45Ni4xMjAuMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.DmXzvWcVhhv8kj2AZpcx8o5ppxfF97jPE9YsD1wfN_HiEoQIPAChODX3IQJfi5HPwL4mmSiDVYWPReXvR-Ko4g";
let client = clashApi({
    token: token,
});
//9JLGVYRJ2
app.get(`/getClashOfClansData/%23:input`, async (req, res) => {
    const input = req.params.input;
    const playerTag = `#${input}`;
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