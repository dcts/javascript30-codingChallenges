// SAY HI
console.log("JS TRIGGERED: buttons.js");

// BACK BUTTON
const bttnBack = document.getElementById("bttn-back");
bttnBack.onclick = (e) => {
  console.log("CLICKED!");
  // SPECIAL CASE FOR HOSTING ON GITHUB PAGES!
  if (window.origin.includes("github")) {
    window.location = window.origin + "/javascript30-codingChallenges/";
  // WHEN RUNNING LOCALLY!
  } else {
    window.location = window.origin;
    console.log("else");
  }
};
