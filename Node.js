const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database (in-memory for example - use MongoDB/MySQL in production)
let players = [];
let adminPassword = "aau2580FVT";

// API Endpoints
app.post('/api/register', (req, res) => {
    const playerData = req.body;
    playerData.id = players.length + 1;
    playerData.verified = false;
    players.push(playerData);
    res.json({ success: true, message: 'Registration successful' });
});

app.get('/api/players', (req, res) => {
    res.json(players);
});

app.post('/api/admin/login', (req, res) => {
    if (req.body.password === adminPassword) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
});

app.put('/api/players/:id/verify', (req, res) => {
    const player = players.find(p => p.id === parseInt(req.params.id));
    if (player) {
        player.verified = true;
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: 'Player not found' });
    }
});

app.delete('/api/players/:id', (req, res) => {
    players = players.filter(p => p.id !== parseInt(req.params.id));
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
node server.js
