const express = require("express");

const app = express();

const randomWords = require("random-words");

app.use("/app.js", express.static(__dirname + "/static/app.js"));

app.use("/styles.css", express.static(__dirname + "/static/styles.css"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/API/maoritranslations", (req, res) => {
  const arrayOfWords = [
    { maoriWord: "Ma", englishWord: randomWords() },
    { maoriWord: "Whero", englishWord: "Red" },
    { maoriWord: "Kiaora", englishWord: "Hello" }
  ];

  const randomObject = arrayOfWords[Math.floor(Math.random() * 3)];

  res.send(randomObject);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
