const express = require('express')
const getmovies = require('./getmovies');
const app = express();
const port = 3002;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/rest/shows', (req, res) => res.send(getmovies()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))