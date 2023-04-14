const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/movies', (req, res)=>{
    res.send([1,2,3]);
});

// Running server
const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});