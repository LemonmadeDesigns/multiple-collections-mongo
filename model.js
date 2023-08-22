// REQUIRE MONGOOSE MODULE
const mongoose = require('mongoose');

// DEFINE THE SCHEMA FOR MOVIES COLLECTIONS
// const movieSchema = new mongoose.Schema({
//     name: String,
//     category: String
// });

const movieSchema = new mongoose.Schema({
    name: String,
    category: String,
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieReview'
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieDirector'
    }
});

// DEFINE THE SCHEMA FOR MOVIE REVIEWS COLLECTIONS
const movieReviewSchema = new mongoose.Schema({
    review: String,
    review_id: Number,
    reviewId: Number
});

// DEFINE THE SCHEMA FOR MOVIE DIRECTORS COLLECTIONS
const movieDirectorSchema = new mongoose.Schema({
    director: String,
    director_id: Number,
    directorId: Number
});

// CREATE MONGOOSE MODELS USING THE DEFINED SCHEMAS COLLECTIONS
const Movie = mongoose.model('Movies', movieSchema);
const MovieReview = mongoose.model('MovieReview', movieReviewSchema);
const MovieDirector = mongoose.model('MovieDirector', movieDirectorSchema);

// EXPORT THE MODELS TO BE USED IN OTHER FILES
module.exports = {
    Movie, MovieReview, MovieDirector
};
