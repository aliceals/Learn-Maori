const express = require("express");
const fetch = require("node-fetch");

const app = express();

const randomWords = require("random-words");

app.use("/app.js", express.static(__dirname + "/static/app.js"));

app.use("/styles.css", express.static(__dirname + "/static/styles.css"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/API/maoritranslations", (req, res) => {
  const randWord = randomWords();
  fetch(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-mi&key=trnsl.1.1.20190617T084155Z.c424f51db4247778.ccfee6214ef433624454d8d8c7bad1ebb3837e17",
    {
      method: "POST",
      body: `text=${randWord}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
    .then(res => res.json())
    .then(json => {
      console.log(json.text[0]);
      res.send({ maoriWord: json.text[0], englishWord: randWord });
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
