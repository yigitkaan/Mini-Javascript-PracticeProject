let scoreHome = 0,
  scoreGuest = 0;

let scrHomeBoard = document.getElementById("brd-one");
let scrGuestBoard = document.getElementById("brd-two");

function increseScrHome(value) {
  scoreHome += value;
  scrHomeBoard.innerText = scoreHome;
}

function increseScrGuest(value) {
  scoreGuest += value;
  scrGuestBoard.innerText = scoreGuest;
}
