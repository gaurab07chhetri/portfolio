function showChoices() {
    const choicesDiv = document.getElementById('choices');
    choicesDiv.style.display = 'block';

    const chooseBtn = document.getElementById('choose-btn');
    chooseBtn.style.display = 'none';
}


// Function to get computer's move
function getComputerMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Function to play the game
function playGame(playerMove) {
    const computerMove = getComputerMove();

    // Determine the winner
    let result;
    if (playerMove === computerMove) {
        result = "It's a tie!";
        document.getElementById('status').classList.add('tie');
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'Victory';
        document.getElementById('status').classList.add('result');
    } else {
        result = 'Crusing Defeat';
        document.getElementById('status').classList.add('defeat');

    }
    {
    document.getElementById('status').textContent = result;
    }

    // Update the status and display computer's move
    const status = document.getElementById('status');
    status.innerHTML = result;

    const computerMoveDisplay = document.getElementById('computer-played');
    computerMoveDisplay.innerHTML = `Computer played ${computerMove}`;

    const playerMoveDisplay = document.getElementById('you-played');
    playerMoveDisplay.innerHTML = `You played ${playerMove}`;

    // Hide the choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.style.display = 'none';


    // Show the "play again" button
    const playAgainButton = document.getElementById('play-again');
    playAgainButton.style.display = 'inline';
}

// Function to reset the game
function resetGame() {
    const status = document.getElementById('status');
    status.innerHTML = '';

    const playerMoveDisplay = document.getElementById('you-played');
    playerMoveDisplay.innerHTML = '';

    const computerMoveDisplay = document.getElementById('computer-played');
    computerMoveDisplay.innerHTML = '';

    const choicesDiv = document.getElementById('choices');
    choicesDiv.style.display = 'none';

    const playAgainButton = document.getElementById('play-again');
    playAgainButton.style.display = 'none';

    const chooseBtn = document.getElementById('choose-btn');
    chooseBtn.style.display = 'inline';
}

