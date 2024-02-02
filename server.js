const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const passingScore = 4;

app.use(bodyParser.json());
app.use(express.static("./public"));

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/submitQuiz', (req, res) => {
    const userName = req.body.name;
    const userScore = req.body.score;
    const passed = userScore >= passingScore;
    res.json({ passed: passed });
});
