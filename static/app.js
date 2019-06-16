//select maori word from DOM
const maoriWord = document.getElementById("maoriWord");
const englishWord = document.getElementById("englishWord");

window.onload = function() {
  const btn = document.getElementById("btn");

  console.log(btn);

  fetch("/API/maoritranslations")
    .then(response => {
      return response.json();
    })
    .then(json => {
      var jsonMaori = json.maoriWord;
      maoriWord.innerHTML = jsonMaori;
      var jsonEnglish = json.englishWord;
      englishWord.innerHTML = jsonEnglish;
    });

  btn.addEventListener("click", () => {
    fetch("/API/maoritranslations")
      .then(response => {
        return response.json();
      })
      .then(json => {
        var jsonMaori = json.maoriWord;
        maoriWord.innerHTML = jsonMaori;
        var jsonEnglish = json.englishWord;
        englishWord.innerHTML = jsonEnglish;
      });
  });
};
