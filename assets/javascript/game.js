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
	function newNumbers() {
		magicNum = Math.floor(Math.random() * 110 + 20);
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
		$("#magicNum").text(magicNum);
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
	//show player winning
	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		win++;
		$("#wins").text(wins);
	}
	//show player losing
	function youLose() {
		$("#winOrLose").text("YOU LOSE!");
		losses++;
		$("#losses").text(losses);
	}
	//fix error how prints equal "NaN"
	//new game
	function startGame() {
		$(".crystalimg").hover(function() {
			$(this).css({
				opacity: 0.4
			});
		}, function() {
			$(this).css({
				opacity: .09
			});
		});
		//copied from a word doc that I had written on
		// The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
		// return: when a return statement is used in a function body, the execution of the function is stopped. 
		$(".crystalimg").on("click", function() {
			if (totalScore >= magicNum) {
				return;
			}
			var crystalValue = $(this).attr("data-crystalvalue");
			crystalValue = parseInt(crystalValue);
			totalScore += crystalValue;
			$("#totalScore").text(totalScore);
			console.log(crystalValue);
			//console log for the crystalvalue to see if game is running
			//if else statement for winning/losing
			//copied from word doc
			if (totalScore === magicNum) {
				youWin();
			} else if (totalScore > magicNum) {
				youLose();
			}
		});
		$(".btn").on("click", function() {
			newGame();
		});
	}
	startGame();
});