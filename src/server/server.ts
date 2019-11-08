import express from 'express';
import path from 'path';
import Meat from '../js/models/Meat'


const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html');

const port = process.env.port || 8080;
const meat: Meat = new Meat();


app.use(express.json());
app.use(express.static(DIST_DIR));


app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});


app.get('/api/courses', (req, res) => {
    res.send(meat.courses);
});


app.get('/api/courses/:id', (req, res) => {
    const result = meat.courses.find(course => course.id === parseInt(req.params.id));
    result ? res.send(result) : res.send('the course was not found');
});

app.listen(port, () => console.log(`listening on port ${port}`));