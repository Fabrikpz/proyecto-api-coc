const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500; 

app.use(express.json());
app.use(cors());

app.get('/getClashOfClansData/:playerTag', async (req, res) => {
    const playerTag = req.params.playerTag;
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMyMTFiOTQ0LWIwZjAtNDYyYS1iMjVmLTM1NTA0NGQyMmQ3NCIsImlhdCI6MTY5Mzg1NTA1NSwic3ViIjoiZGV2ZWxvcGVyL2IxYjgyMzgyLTIxODAtNjVlNS0zZjRhLTk3N2RmNTdkNDg5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.j2ZdgsSU-V8IiwFmBXTdMOiOTr2pH5yxJjHDcPr_0w_G5LWfVJTAOl7UcPhyvHpyo9yJ4-pvTOt5xrt-zsgpxQ';
    const apiUrl = `https://api.clashofclans.com/v1/players/%23${playerTag}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        console.log(responce.data)
        res.send(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(`Error obteniendo datos de Clash of Clans: ${error.message}`);
        res.status(500).json({ error: 'Error obteniendo datos' });
    }
});

module.exports = app;





