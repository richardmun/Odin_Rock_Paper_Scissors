//const prompt = require('prompt-sync')({sigint: true});



function getComputerChoice() {
	const a = "rock";
	const b = "paper";
	const c = "scissors";

	const choices = [a, b, c];
	const randomIndex = Math.floor(Math.random() * choices.length);

	return choices[randomIndex];
}



function playRound(playerSelection, computerSelection) {


	if ( playerSelection === computerSelection) {
		return ("Its a tie");
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You lose");
		} else {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You win");
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "scissors") {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You lose");
		} else {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You win");
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You lose");
		} else {
			return ("You chose " + playerSelection + ", \n" + "Computer chose " + computerSelection + ", \n" + "You win");
		}
	} else {
		return ("Invalid selection");
	}

}



function game() {
	for (let i = 0; i < 5; i++){
		const computerSelection = getComputerChoice();
		const playerSelection = prompt("Enter rock, paper, or scissors: ");
		console.log(playRound(playerSelection, computerSelection));

	}
}

console.log(game());