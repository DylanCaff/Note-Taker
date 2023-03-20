const express = require('express');
const path = require('path');
const fs = require('fs');
const allNotes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

// app.route("/api/notes")
//     .post(function (req, res) {
        // let jsonFilePath = path.join(__dirname, "./db/db.json");
        // let newNote = req.body;
        // let highestId = 99;

        // for (let i = 0; i < database.length; i++) {
        //     let individualNote = database[i];

        //     if (individualNote.id > highestId) {

        //         highestId = individualNote.id;
        //     }
        // }
        // newNote.id = highestId + 1;
        // database.push(newNote)

        // fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log("Your note was saved!");
        // });
        // res.json(newNote);
    // });


// app.post('/api/notes', (req, res) => {
//     const newNote = createNewNote(req.body, allNotes);
//     res.json(newNote);
// });

// const createNewNote = (body, noteArr) => {
//     let jsonFilePath = path.join(__dirname, "./db/db.json");
//     let newNote = body;
//     let highestId = 99;

//     for (let i = 0; i < noteArr.length; i++) {
//         let individualNote = database[i];
//         if (individualNote.id > highestId) {

//             highestId = individualNote.id;
//         }
//     }
//     newNote.id = highestId + 1;
//     noteArr.push(newNote)

//     fs.writeFile(jsonFilePath, JSON.stringify(noteArr), function (err) {

//         if (err) {
//             return console.log(err);
//         }
//         console.log("Your note was saved!");
//     });
//     res.json(newNote);
// }

app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});