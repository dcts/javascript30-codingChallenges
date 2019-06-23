// say hi
console.log("TRIGGERED: cardsLogic.js");

// const bttnPower = document.getElementById("bttn-power");
// const radioPlayer = document.getElementById("radio-player");
// const title = document.getElementById("title");

// const currentlyPlayingLabel = document.querySelector(".currently-playing-label");
// const selectedRadio = document.querySelector(".selected-radio");

// bttnPower.addEventListener("click", () => {
//   radioPlayer.classList.toggle("closed");
//   currentlyPlayingLabel.classList.toggle("transparent");
//   selectedRadio.classList.toggle("transparent");
// });

// const closeAllCards = () => {
//   const cardExtensions = document.querySelectorAll(".card-extend");
//   cardExtensions.forEach((cardExtension) => {
//     cardExtension.classList.add("hidden")
//   });
// }

// const cards = document.querySelectorAll(".radio-card");

// cards.forEach((card) => {
//   card.children[0].addEventListener("click", (e) => {
//     // RADIO IS ALREADY SELECTED (-> close the window)
//     if (e.currentTarget.innerText.split("\n")[0] === selectedRadio.innerText) {
//       currentlyPlayingLabel.classList.add("hidden")
//       selectedRadio.classList.add("hidden")
//       selectedRadio.innerText = "";
//     // ANOTHER RADIO OR NO RADIO SELECTED
//     } else {
//       currentlyPlayingLabel.classList.remove("hidden")
//       selectedRadio.classList.remove("hidden")
//       closeAllCards();
//       selectedRadio.innerText = card.children[0].children[0].innerText;
//     }
//     card.children[1].classList.toggle("hidden");
//   })
// });
