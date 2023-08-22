// GET ELEMENTS BY THEIR IDs
const form = document.getElementById('movieForm');
const responseMessage = document.getElementById('responseMessage');

// ADD EVENT LISTENER TO FORM SUBMISSION
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // EXTRACT VALUES FROM INPUT FIELDS
    const movieName = document.getElementById('movieName').value;
    const movieCategory = document.getElementById('movieCategory').value;

    const movieReview = document.getElementById('movieReview').value;
    const movieDirector = document.getElementById('movieDirector').value;

    // SEND A POST REQUEST TO THE SERVER
    const response = await fetch('/addMovie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // CONVERT INPUT VALUES TO JSON AND SEND IN THE REQUEST BODY
        body: JSON.stringify({ name: movieName, category: movieCategory, review: movieReview, director: movieDirector })
    });

    // HANDLE SERVER RESPONSE
    if (response.ok) {
        console.log('Movie data added successfully.');

        // EXTRACT RESPONSE TEXT
        const responseText = await response.text();
        console.log('Response data:', responseText);

        // DISPLAY RESPONSE MESSAGE
        responseMessage.textContent = responseText;
    } else {
        // DISPLAY ERROR MESSAGE ON FAILURE
        responseMessage.textContent = 'Failed to add movie data.';
        console.error('Failed to add movie data.');
    }
});
