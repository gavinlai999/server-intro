const score = 0;
document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('correctButton1');
    startButton.addEventListener('click', function () {
        score++;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('correctButton2');
    startButton.addEventListener('click', function () {
        score++;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('correctButton3');
    startButton.addEventListener('click', function () {
        score++;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('correctButton4');
    startButton.addEventListener('click', function () {
        score++;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('correctButton5');
    startButton.addEventListener('click', function () {
        score++;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('submittButton');
    startButton.addEventListener('click', function () {
        alert("Nice you got a score of " + score);
    });
});