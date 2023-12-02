// Replace this with an array of words for the game
const words = ["apple", "banana", "orange", "grape", "kiwi"];

let selectedWord = getRandomWord();
let guessedWord = Array(selectedWord.length).fill('_');

document.getElementById('word-display').innerText = guessedWord.join(' ');

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = guessInput.value.toLowerCase();

    if (guess.length === selectedWord.length && /^[a-z]+$/.test(guess)) {
        updateGuess(guess);
    } else {
        alert('Please enter a valid guess.');
    }

    guessInput.value = '';
}

function updateGuess(guess) {
    const feedbackContainer = document.getElementById('feedback');
    const correctIndexes = [];

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guess[i]) {
            correctIndexes.push(i);
        }
    }

    if (correctIndexes.length === selectedWord.length) {
        feedbackContainer.innerText = 'Congratulations! You guessed the word!';
    } else {
        feedbackContainer.innerText = `Correct letters at positions ${correctIndexes.join(', ')}`;
        updateGuessedWord(guess, correctIndexes);
    }
}

function updateGuessedWord(guess, correctIndexes) {
    for (let i = 0; i < selectedWord.length; i++) {
        if (correctIndexes.includes(i)) {
            guessedWord[i] = guess[i];
        }
    }

    document.getElementById('word-display').innerText = guessedWord.join(' ');
}
