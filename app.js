const resDiv = document.getElementById("red-div");
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const notesButton = document.getElementById("next");
const freeBuggon = document.getElementById("show-res");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const input = document.getElementById("fname");

let chosenMode = "";
let index = -1;

const notes = [
  "FA1",
  "FA2",
  "SOL1",
  "LA1",
  "SI1",
  "DO1",
  "RI1",
  "ME1",
  "FA2",
  "SOL2",
  "LA2",
  "SI2",
  "DO2",
  "RI2",
  "ME2",
];
const free = ["FA1", "LA", "RI", "SOL", "DO", "FA2"];
let myTimeout = null;

// playing
freeBuggon.addEventListener("click", function () {
  chosenMode = "free";
  resDiv.innerHTML = "Free cords";
});

notesButton.addEventListener("click", function () {
  resDiv.innerHTML = "Notes";
  chosenMode = "notes";
});

startButton.addEventListener("click", function () {
  console.log("start button clicked");
  const interval = document.getElementById("interval").value * 1000;
  myTimeout = setInterval(strtPlaying, interval);
});
stopButton.addEventListener("click", function () {
  console.log("stop button clicked");
  clearInterval(myTimeout);
  myTimeout = null;
});

function strtPlaying() {
  if ((chosenMode = "free")) {
    let first = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    let second = Math.floor(Math.random() * (5 - 0 + 1) + 0);

    firstDiv.innerHTML = free[first];
    secondDiv.innerHTML = free[second];
  } else {
    let first = Math.floor(Math.random() * (14 - 0 + 1) + 0);
    let second = Math.floor(Math.random() * (14 - 0 + 1) + 0);

    firstDiv.innerHTML = notes[first];
    secondDiv.innerHTML = notes[second];
  }
}
