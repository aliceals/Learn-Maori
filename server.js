const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/API/maoritranslations", (req, res) => {
  res.send([
    { "maori word": "Ma", "english word": "White" },
    {
      "maori word": "Whero",
      "english word": "Red"
    },
    {
      "maori word": "Kiaora",
      "english word": "Hello"
    }
  ]);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
