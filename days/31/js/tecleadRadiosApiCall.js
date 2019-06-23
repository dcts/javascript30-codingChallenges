// say hi
console.log("TRIGGERED: tecleadRadiosApiCall.js");

// load DOM elements
const radioCards = document.querySelector(".raido-cards");
const bttnPower = document.getElementById("bttn-power");
const radioPlayer = document.getElementById("radio-player");
const title = document.getElementById("title");
const currentlyPlayingLabel = document.querySelector(".currently-playing-label");
const selectedRadio = document.querySelector(".selected-radio");

const buildCard = (radio) => {
  return `
    <div class="radio-card">
      <div class="card-top flex justify-space-between">
        <p class="radio-title card-text">${radio.name}</p>
        <p class="radio-fq card-text">${radio.frequency}</p>
      </div>
      <div class="card-extend flex justify-space-between hidden">
        <img class="minus" src="img/minus.svg">
        <img class="radio-avatar" src="${radio.image}">
        <img class="plus" src="img/plus.svg">
      </div>
    </div>
    <hr>
  `
};

const injectCard = (radioCard) => {
  radioCards.innerHTML += (radioCard);
};

bttnPower.addEventListener("click", () => {
  radioPlayer.classList.toggle("closed");
  currentlyPlayingLabel.classList.toggle("transparent");
  selectedRadio.classList.toggle("transparent");
});

// RADIO CARDS CLICK LOGIC
const applyCardListeners = () => {
  const cards = document.querySelectorAll(".radio-card");
  const cardExtensions = document.querySelectorAll(".card-extend");

  const closeAllCards = () => {
    cardExtensions.forEach((cardExtension) => {
      cardExtension.classList.add("hidden")
    });
  }

  cards.forEach((card) => {
    card.children[0].addEventListener("click", (e) => {
      // radio is already selected -> close clicked radio
      console.log(e);
      console.log(e.currentTarget.innerText.split("\n")[0] === selectedRadio.innerText);
      if (e.currentTarget.innerText.split("\n")[0] === selectedRadio.innerText) {
        currentlyPlayingLabel.classList.add("hidden")
        selectedRadio.classList.add("hidden")
        selectedRadio.innerText = "";
      // another radio or no radio selected -> open clicked radio
      } else {
        currentlyPlayingLabel.classList.remove("hidden")
        selectedRadio.classList.remove("hidden")
        selectedRadio.innerText = card.children[0].children[0].innerText;
        closeAllCards();
      }
      card.children[1].classList.toggle("hidden");
    })
  });
}

// START SCRIPT HERE!
// fetch Data from API
fetch("https://teclead.de/recruiting/radios")
.then(resp => resp.json())
.then(data => {
  data.radios.forEach((radio) => {
    injectCard(buildCard(radio));
  });
  applyCardListeners();
})
