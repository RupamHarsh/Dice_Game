
var d1 = Math.floor(Math.random() * 6) + 1;
var d1img = "images/dice" + d1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", d1img);


var d2 = Math.floor(Math.random() * 6) + 1;
var d2img = "images/dice" + d2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", d2img);


if (d1 > d2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (d2 > d1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
