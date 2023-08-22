// IMPORT REQUIRED MODULES
const { Movie, MovieReview, MovieDirector } = require('./model.js');

// ASYNCHRONOUS FUNCTION TO SAVE MOVIE, REVIEW, AND DIRECTOR DATA
async function saveMovieReviewDirector(name, category, review, director) {

    // CREATE NEW INSTANCE OF MovieReview MODEL
    const newReview = new MovieReview({
        review,
    });

    // CREATE NEW INSTANCE OF MovieDirector MODEL
    const newDirector = new MovieDirector({
        director,
    });

    // CREATE NEW INSTANCE OF Movie MODEL
    const newMovie = new Movie({
        name,
        category,
    });

    try {
        // SAVE newMovie INSTANCE
        await newMovie.save();

        try {
            // SAVING newReview
            await newReview.save();

            try {
                // SAVE newDirector INSTANCE
                await newDirector.save();

                // RETURN SUCCESS MESSAGE
                return 'Movie data, review, and director added successfully.';
            } catch (error) {

                // HANDLE ERRORS DURING SAVING newDirector
                console.error('Failed to add director data:', error);
                throw new Error('An error occurred while adding director data.');
            }
        } catch (error) {

            // HANDLE ERRORS DURING SAVING newReview
            console.error('Failed to add review data:', error);
            throw new Error('An error occurred while adding review data.');
        }
    } catch (error) {

        // HANDLE ERRORS DURING SAVING newMovie
        console.error('Failed to add movie data:', error);
        throw new Error('An error occurred while adding movie data.');
    }
}

// EXPORT THE saveMovieReviewDirector FUNCTION
module.exports = {
    saveMovieReviewDirector,
};
