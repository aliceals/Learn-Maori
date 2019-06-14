const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/API/maoritranslations", (req, res) => {
  res.send([{ maoriWord: "Ma", englishWord: "White" }]);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
