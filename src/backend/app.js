const express = require('express')
const getmovies = require('./getmovies');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../../build')));
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../build', 'index.html'));
// });
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/rest/shows', (req, res) => res.send(getmovies()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));