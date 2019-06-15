//select maori word from DOM
maoriWord = document.getElementById("maoriWord");

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
