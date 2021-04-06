const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ 42: 'The meaning of life, the universe, and everything.'});
});

app.get('/hello', (req, res) => {
    res.send({ hello: 'world'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
