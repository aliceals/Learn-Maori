//select maori word from DOM
const maoriWord = document.getElementById("maoriWord");
const englishWord = document.getElementById("englishWord");

window.onload = function() {
  const btn = document.getElementById("btn");

  console.log(btn);

  function apiFetch() {
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
  }

  apiFetch();

  btn.addEventListener("click", apiFetch);
};
