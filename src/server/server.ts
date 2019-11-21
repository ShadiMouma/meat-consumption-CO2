import express from 'express';
import path from 'path';
import World from '../js/models/World'


const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html'),
    HTML_WORLD = path.join(DIST_DIR, 'world.html');

const port = process.env.port || 8080;
const main: World = new World();


// app.use(express.json());
app.use(express.static(DIST_DIR));


app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});


app.get('/world', (req, res) => {
    res.sendFile(HTML_WORLD);
});



app.get('/api/countries', (req, res) => {
    res.send(main.countries);
});



app.get('/api/countries/:name', (req, res) => {
    const result = main.countries.find(country => country.name === req.params.name);
    result ? res.send(result) : res.send('the course was not found');
});

app.listen(port, () => console.log(`listening on port ${port}`));