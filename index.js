var randomNumber1 =  Math.floor((Math.random() * 6) + 1);
var randomNumber2 =  Math.floor((Math.random() * 6) + 1);
var randomimage1 = "./images/dice"+ randomNumber1 + ".png"; 
var randomimage2 = "./images/dice"+ randomNumber2 + ".png"; 
var imageElement1 = document.querySelectorAll("img")[0];
const imageElement2 = document.querySelectorAll("img")[1];
imageElement1.setAttribute("src", randomimage1);
imageElement2.setAttribute("src", randomimage2);
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draws!🏳️";

}

 