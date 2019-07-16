//adding variables for the crystals with wins and the total score
$(document).ready(function() {
    var magicNum;
    var totalScore;
    var wins;
    var losses;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

//creating functions -- using Math.floor(Math.random()
//using Math.ceil() function in JavaScript is used to round the number passed as parameter to its nearest integer in Upward direction of rounding i.e towards the greater value.
//to create the number randomly for the crystals and make sure they round up
function newNumbers () {
    magicNumber = Math.floor(Math.random() * 110 + 20;
    crystal1 = Math.ceil(Math.random() * 12);
    crystal2 = Math.ceil(Math.random() * 12);
    crystal3 = Math.ceil(Math.random() * 12);
    crystal4 = Math.ceil(Math.random() * 12);
}
//function for when the game starts
//attr() method sets or returns attributes and values of the selected elements. 
function newGame() {
    newNumbers();
    totalScore = 0;
    $("#magicNumber").text(magicNumber);
    $("#totalScore").text(totalScore);
    $("#crystal1").attr("data-crystalvalue", crystal1);
    $("#crystal2").attr("data-crystalvalue", crystal2);
    $("#crystal3").attr("data-crystalvalue", crystal3);
    $("#crystal4").attr("data-crystalvalue", crystal4);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#winOrLose").text("");
  console.log(crystal1, crystal2, crystal3, crystal4);
  //console log to see scores currently placed on crystals
}

