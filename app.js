//
// Round Count
var roundPlayerWin = 0;
var roundComputerWin = 0;

// Compare Function
function compareChoice (choice1, choice2) {

  // Tied
  if (choice1 === choice2) {
    alert('You both tied!')
  }

  // Rock Beats Scissors
  else if (choice1 === 'Rock') {
    if (choice2 === 'Scissors'){
      alert('You win with Rock vs Scissors!')
      roundPlayerWin++;
    }
    else {
      alert('Computer wins with Paper vs Rock!')
      roundComputerWin++;
    }
  }

  // Paper Beats Rock
  else if (choice1 === 'Paper') {
    if (choice2 = 'Rock') {
      alert('You win with Paper vs Rock')
      roundPlayerWin++;
    }
    else {
      alert('Computer wins with Scissors vs Paper!')
      roundComputerWin++;
    }
  }

  // Scissors Beats Paper
  else if (choice1 === 'Scissors') {
    if (choice2 = 'Paper') {
      alert('You win with Scissors vs Paper')
      roundPlayerWin++;
    }
    else {
      alert('Computer wins with Rock vs Scissors!')
      roundComputerWin++;
    }
  }

}

// Loop to keep track of scores
while (roundPlayerWin < 3 && roundComputerWin < 3){
  // Player Choice
  var playerChoice = prompt("Are you going to choose Rock, Paper or Scissors?");

  // Computer Choice
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "Rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "Paper";
  } else {
      computerChoice = "Scissors";
  }

  //Call Function to Compare Choices
  compareChoice(playerChoice, computerChoice);

}

// When round score gets to 3
if (roundPlayerWin = 3) {
  alert('Player has won the game - ' + roundPlayerWin + ':' + roundComputerWin)
} else {
  alert('Computer has won the game - ' + roundComputerWin + ':' + roundPlayerWin)
}

// Show scores in console at end
console.log(roundPlayerWin);
console.log(roundComputerWin);
