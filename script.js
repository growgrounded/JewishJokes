// Array of jokes
const jokes = [


    // Add more jokes here
];

// Function to display a random joke
function displayJoke() {
    const jokeElement = document.getElementById('joke');
    // Generate a random index based on the length of the jokes array
    const randomIndex = Math.floor(Math.random() * jokes.length);
    // Set the joke element's text to a random joke
    jokeElement.innerText = jokes[randomIndex];
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Initially display a random joke
    displayJoke();

    // Add click event listener to the 'new-joke' button
    document.getElementById('new-joke').addEventListener('click', function () {
        // Display a new random joke
        displayJoke();
    });
});
