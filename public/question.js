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


//Get user name and send to server then display user name on next page
document.addEventListener('DOMContentLoaded', function () {
    // Get the user's name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');

    // Update the content of the 'userName' element
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = `Welcome, ${userName || 'Guest'}!`;
    }

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

function displayResults() {
    // Hide the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.style.display = 'none';
    }

    // Display selected answers
    const selectedAnswers = getSelectedAnswers();
    const selectedAnswersList = document.getElementById('selectedAnswers');
    if (selectedAnswersList) {
        selectedAnswersList.innerHTML = '';

        selectedAnswers.forEach(answer => {
            const listItem = document.createElement('li');
            listItem.textContent = answer;
            selectedAnswersList.appendChild(listItem);
        });
    }

    // Calculate the final score
    const finalScore = calculateTotalScore();
    console.log('Final Score:', finalScore); // Log the final score

    // Display the final score
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        finalScoreElement.textContent = `Your Score: ${finalScore}`;

        // Show the pass/fail message
        const passOrFailMessage = document.getElementById('passOrFailMessage');
        if (passOrFailMessage) {
            passOrFailMessage.textContent = finalScore >= 4 ? 'Congratulations! You Passed!' : 'Sorry, You Didn\'t Pass.';
        }
    }

    // Show the result section
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.style.display = 'block';
    }
}



// Event listener for question buttons
const questionButtons = document.querySelectorAll('.container button');

questionButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove 'selected' class from all buttons
        questionButtons.forEach(otherButton => {
            otherButton.classList.remove('selected');
            otherButton.style.backgroundColor = ''; // Reset background color for other buttons
        });

        // Add 'selected' class and change background color to the clicked button
        button.classList.add('selected');
        button.style.backgroundColor = '#7ebaff'; // Change this color to your preferred darker color
    });
});



function calculateTotalScore() {
    // Get the correct buttons
    const correctButtons = document.querySelectorAll('.correct');
    console.log('Correct Buttons:', correctButtons);

    // Count how many of the selected answers are correct
    const selectedAnswers = getSelectedAnswers();
    console.log('Selected Answers:', selectedAnswers);

    let score = 0;

    selectedAnswers.forEach(selectedAnswer => {
        if (Array.from(correctButtons).some(correctButton => correctButton.textContent.trim() === selectedAnswer.trim())) {
            score++;
        }
    });

    console.log('Score:', score); // Log the score to check if it's calculated correctly

    return score;
}






function getSelectedAnswers() {
    // Get the text content of selected answer buttons
    const selectedButtons = document.querySelectorAll('.container button.selected');
    console.log('Selected Buttons:', selectedButtons);
    
    return Array.from(selectedButtons).map(button => button.textContent);
}


function showTryAgainButton() {
    // Show the try-again button
    const tryAgainButton = document.getElementById('tryAgainButton');
    if (tryAgainButton) {
        tryAgainButton.style.display = 'block';
    }
}

function resetQuiz() {
    // Reset the quiz by clearing selected answers and showing the submit button
    const selectedButtons = document.querySelectorAll('.selected');
    selectedButtons.forEach(button => button.classList.remove('selected'));

    // Show the submit button
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.style.display = 'block';
    }

    // Hide the result section and try-again button
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.style.display = 'none';
    }

    const tryAgainButton = document.getElementById('tryAgainButton');
    if (tryAgainButton) {
        tryAgainButton.style.display = 'none';
    }
}
