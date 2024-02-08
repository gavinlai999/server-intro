document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');

    // Check if the startButton element exists in the DOM
    if (startButton) {
        startButton.addEventListener('click', function () {
            var userName = document.getElementById('name').value.trim();

            // Check if the user entered a name
            if (userName !== '') {
                // Redirect to the quiz page with the user's name as a query parameter
                window.location.href = `questions.html?name=${encodeURIComponent(userName)}`;
            } else {
                alert('Please enter your name before starting the quiz.');
            }
        });
    } else {
        console.error("Start button not found in the DOM.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the user's name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');

    // Update the content of the 'userName' element
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = `Welcome, ${userName || 'Guest'}!`;
    }

    // ... (existing code)

    // Event listener for the submit button
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            // Display results and try-again button
            displayResults();
            showTryAgainButton();
        });
    }
    
    // Event listener for try-again button
const tryAgainButton = document.getElementById('tryAgainButton');
if (tryAgainButton) {
    tryAgainButton.addEventListener('click', function () {
        resetQuiz();
    });
}

});

document.addEventListener('DOMContentLoaded', function () {
    const questionButtons = document.querySelectorAll('.container button');

    // Event listener for question buttons
    questionButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Deselect all buttons
            questionButtons.forEach(btn => {
                btn.classList.remove('selected');
                btn.style.backgroundColor = 'lightblue'; // Reset color to original
            });

            // Select the clicked button
            button.classList.add('selected');
            button.style.backgroundColor = '#7ebaff'; // Change to a darker color

            // Additional logic for other actions when a button is clicked
            // ...
        });
    });

    // Event listener for the submit button
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            // Display results and try-again button
            displayResults();
            showTryAgainButton();
        });
    }
});

function displayResults() {
    // Hide the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.style.display = 'none';
    }

    // Display selected answers
    const selectedAnswers = getSelectedAnswers();
    console.log('Selected Answers:', selectedAnswers);

    // Calculate and display the final score
    const finalScore = calculateTotalScore(selectedAnswers);

    // Display the final score and pass/fail message
    const passOrFailMessage = document.getElementById('passOrFailMessage');
    if (passOrFailMessage) {
        passOrFailMessage.textContent = finalScore >= 4 ? 'Congratulations! You Passed!' : 'Sorry, You Didn\'t Pass.';
    }

    // Display the final score
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        finalScoreElement.textContent = `Your Score: ${finalScore}`;
    }

    // Show the result section
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.style.display = 'block';
    }
}

function calculateTotalScore(selectedAnswers) {
    const correctButtons = document.querySelectorAll('.container button.correct');
    console.log('Correct Buttons:', correctButtons);

    let score = 0;

    selectedAnswers.forEach(selectedAnswer => {
        console.log('Selected Answer:', selectedAnswer);
        Array.from(correctButtons).forEach(correctButton => {
            console.log('Correct Button Text:', correctButton.textContent.trim());
            if (correctButton.textContent.trim() === selectedAnswer.trim()) {
                score++;
                console.log('Score Increased:', score);
            }
        });
    });

    console.log('Final Score:', score);

    return score;
}

function getSelectedAnswers() {
    // Get the text content of selected answer buttons
    const selectedButtons = document.querySelectorAll('.container button.selected');
    console.log('Selected Buttons:', selectedButtons);
    
    return Array.from(selectedButtons).map(button => button.textContent.trim());
}

function showTryAgainButton() {
    // Show the try-again button
    const tryAgainButton = document.getElementById('tryAgainButton');
    if (tryAgainButton) {
        tryAgainButton.style.display = 'block';
    }
}

function resetQuiz() {
    // Reload the page to reset the quiz
    window.location.reload();

    window.scrollTo(0, 0);
}

