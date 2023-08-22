// IMPORT REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// REQUIRE DATABASE CONFIGURATION
require("./config/db_connect");

// IMPORT MODEL OBJECTS FROM 'model.js'
const { saveMovieReviewDirector } = require('./movieService.js');

// CREATE AN INSTANCE OF THE EXPRESS APPLICATION
const app = express();

// DEFINE THE PORT NUMBER
const PORT = 4000;

// SET UP MIDDLEWARE TO HANDLE INCOMING JSON BODY REQUESTS
app.use(bodyParser.json());

// SERVE STATIC FILES FROM THE 'public' DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));

// HANDLE GET REQUESTS TO THE ROOT URL
app.get('/', (req, res) => {

    // SEND THE 'index.html' FILE AS A RESPONSE
    res.sendFile(__dirname + '/index.html');
});

app.get('/movies', async (req, res) => {
    try {

        // RETRIEVE MOVIES FROM THE DATABASE, POPULATING THE 'review' AND 'director' FIELDS
        const movies = await Movie.find()
            .populate('review') // Populate the review field
            .populate('director'); // Populate the director field

        res.json(movies);
    } catch (error) {
        console.error('Error retrieving movies:', error);
        res.status(500).send('An error occurred while retrieving movies.');
    }
});

// HANDLE POST REQUESTS TO THE '/addMovie' ENDPOINT
app.post('/addMovie', async (req, res) => {

    // EXTRACT DATA FROM THE REQUEST BODY
    const { name, category, review, director } = req.body;

    // IF newMovie WAS SAVED SUCCESSFULLY
    try {

        // CALL THE saveMovieReviewDirector FUNCTION TO SAVE MOVIE, REVIEW, AND DIRECTOR
        const resultMessage = await saveMovieReviewDirector(name, category, review, director);
        res.status(200).send(resultMessage);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
});

// START THE EXPRESS SERVER AND LISTEN ON THE SPECIFIED PORT
app.listen(PORT, () => {
    console.log(`Port is up and running on http://localhost:${PORT}`);
});
