const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500; 

app.use(express.json());
app.use(cors());

app.get('/getClashOfClansData/9ry99pruq', async (req, res) => {
    const playerTag = req.params.playerTag;
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEzNWI1NDFiLTQ1OTAtNDk1OC1hZTdiLWQ5ZmEwOWE2MGViZiIsImlhdCI6MTY5NDAwOTI3Niwic3ViIjoiZGV2ZWxvcGVyLzJhYWViMmU1LTJkMWYtZWMyZC01MTVlLTFhNmI4MjAzNTk1MiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.TiT6rPdMtJNlRXI7JmcJi42_6MK4WDJBBjuoxTxbNDhVWRMalBXWMpQoz_8jEVDYQC2SnC--gF1hu5XL_Dm3Vg';
    const apiUrl = `https://api.brawlstars.com/v1/players/%239ry99pruq`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.send(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(`Error obteniendo datos de Clash of Clans: ${error.message}`);
        res.status(500).json({ error: 'Error obteniendo datos' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;