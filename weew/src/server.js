const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500; 

app.use(express.json());
app.use(cors());

app.get('/getClashOfClansData/qvyuvrpup', async (req, res) => {
    const playerTag = req.params.playerTag;
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRmZDZiMWIxLTg1M2MtNDQ3Mi05OWI5LTYwMTNjMDQ3MmE2NyIsImlhdCI6MTY5NDAwODc3NCwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.Bwa4_X6dbHzhU4H8PgehoZEX-XEkfEtNtzND3eNyrv_TL1eleENDB_FwFRfFkicWq8V41pSEIJft0O8z46BTIA';
    const apiUrl = `https://api.clashofclans.com/v1/players/%23${playerTag}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer${apiKey}`
            }
        });

        res.send(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(`Error obtaining info from API: ${error.message}`);
        res.status(500).json({ error: 'Error obtaining user info' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;