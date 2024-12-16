const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let scores = [];

app.post('/api/scores', (req, res) => {
    const { player, score } = req.body;
    scores.push({ player, score });
    res.status(201).send({ message: 'Score added!' });
});

app.get('/api/scores', (req, res) => {
    res.status(200).send(scores);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});