const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


generateJoke();

function generateJoke() {
  fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      jokeEl.innerHTML = data.value;
    });
}

jokeBtn.addEventListener("click", generateJoke);
