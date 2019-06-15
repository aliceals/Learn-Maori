//select maori word from DOM
const maoriWord = document.getElementById("maoriWord");
const englishWord = document.getElementById("englishWord");
const border = document.getElementById("border");

//Call backend API for maori word
maoriWord.addEventListener("click", () => {
  fetch("/API/maoritranslations")
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
    });
});

fetch("/API/maoritranslations")
  .then(response => {
    return response.json();
  })
  .then(json => {
    var jsonMaori = json[0].maoriWord;
    maoriWord.innerHTML = jsonMaori;
    var jsonEnglish = json[0].englishWord;
    englishWord.innerHTML = jsonEnglish;
  });
