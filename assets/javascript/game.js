$(document).ready(function(){

	var randomNum;
	var theirScore;
	var wins = 0;
	var losses = 0;
	var button1Value;
	var button2Value;
	var button3Value;
	var button4Value;

	function initialize(){
		randomNum = Math.floor(Math.random() * 102) + 19;
		button1Value = getButtonValue();
		button2Value = getButtonValue();
		button3Value = getButtonValue();
		button4Value = getButtonValue();
		theirScore = 0;
		$("#randomNum").html(randomNum);
		$("#theirScore").html(theirScore);

	}

	function getButtonValue(){
		return Math.floor(Math.random() * 12) + 1;
	}

	function playGame(theirScore){
		$("#theirScore").html(theirScore);
		if(theirScore < randomNum){
			return
		}
		if(theirScore > randomNum){
			var over = theirScore - randomNum
			$("#result").html("You went over by " + over + " points! You lose!");
			losses++;
			$("#losses").html(losses);
		}
		else if(theirScore === randomNum){
			$("#result").html("You win!");
			wins++;
			$("#wins").html(wins);
		}
		initialize();
	}

	$("#button1").on("click", function(){
		theirScore += button1Value;
		playGame(theirScore);
	});

	$("#button2").on("click", function(){
		theirScore += button2Value;
		playGame(theirScore);
	});

	$("#button3").on("click", function(){
		theirScore += button3Value;
		playGame(theirScore);
	});

	$("#button4").on("click", function(){
		theirScore += button4Value;
		playGame(theirScore);
	});

	initialize();
});