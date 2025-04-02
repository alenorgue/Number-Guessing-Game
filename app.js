// ¡Buena suerte!
const form = document.getElementById('formNumber');
const correctNumber = Math.floor(Math.random() * 100) + 1;
const previousGuessed = [];
const previousGuess = document.getElementById('previous-guesses');
const remainingGuess = document.getElementById('remaining-guesses');
const message = document.getElementById('message');
let attemptsLeft = 10;



function checkGuess() {
    const input = document.getElementById('guessField').value;
    const userGuess = Number(input)
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Enter a valid number between 1 and 100.';
        return;
    }
    
    if (previousGuessed.includes(userGuess)) {
        message.textContent = 'You already tried that number';
        return;
    }
    previousGuessed.push(userGuess);
    previousGuess.textContent = previousGuessed.join(', ');
    attemptsLeft--;
    remainingGuess.textContent = `${attemptsLeft}`;
    if (userGuess > correctNumber) {
        message.textContent = 'Too high, try again.';
        return;
    }
    if (userGuess < correctNumber) {
        message.textContent = 'Too low, try again.';
        return;
    }
    if (userGuess === correctNumber) {
        message.textContent = 'Congrats!!';
        disableInput();
        return;
    }
    else if (attemptsLeft === 0 && userGuess !== correctNumber) {
        message.textContent = `Game over! The correct number was ${correctNumber}.`;
        disableInput();
        return;}

}
function disableInput() {
    document.getElementById('guessField').disabled = true;
    document.getElementById('subt').disabled = true;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess();

});