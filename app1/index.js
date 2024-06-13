const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/api/goodbye', (req, res) => {
    res.json({ message: 'Goodbye World!' });
});

app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toLocaleTimeString() });
});

app.get('/api/date', (req, res) => {
    res.json({ date: new Date().toLocaleDateString() });
});

app.get('/api/random', (req, res) => {
    res.json({ number: Math.random() });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
