const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


