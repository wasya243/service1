const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const axios = require('axios').default;
const app = express();

const {PORT, HOST, SERVICE_2, SERVICE_3} = process.env;

app.get('/sum', async (req, res) => {
    try {
        // const responseA = await axios.get(`${SERVICE_2_HOST}:${SERVICE_2_PORT}/a`);
        // const responseB = await axios.get(`${SERVICE_3_HOST}:${SERVICE_3_PORT}/b`);

        const responseA = await axios.get(`${SERVICE_2}/a`);
        const responseB = await axios.get(`${SERVICE_3}/b`);

        const sum = responseA.data + responseB.data;

        res.send(sum.toString());
    } catch (e) {
        console.error(e);

        res.status(500).send('something is broken((')
    }
});

app.listen(PORT, () => console.log(`service1 listening at ${HOST}:${PORT}`));