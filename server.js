const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const passingScore = 4;

app.use(express.static(".public"));
app.get("/", function (req,res){
    res.sendFile(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/style.css");
});
app.post("/" , function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(process.env.PORT || 10000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});

app.post('/submitQuiz', (req, res) => {
    const userName = req.body.name;
    const userScore = req.body.score;
    const passed = userScore >= passingScore;
    res.json({ passed: passed });
});
