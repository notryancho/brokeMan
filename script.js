let word = "javascript";
let wordArray = word.split("");
let guessedLetters = [];
let incorrectGuesses = 0;
let correctGuesses = 0;

let wordEl = document.getElementById("word");
let messageEl = document.getElementById("message");
let guessEl = document.getElementById("guess");
let submitEl = document.getElementById("submit");
let incorrectEl = document.getElementById("incorrect");
let hangmanEl = document.getElementById("hangman");

submitEl.addEventListener("click", function(e) {
  e.preventDefault();
  let guess = guessEl.value.toLowerCase();
  if (guessedLetters.indexOf(guess) === -1) {
    guessedLetters.push(guess);
    if (wordArray.indexOf(guess) === -1) {
      incorrectGuesses++;
      incorrectEl.innerHTML = "Incorrect guesses: " + incorrectGuesses;
      hangmanEl.src = "hangman" + incorrectGuesses + ".png";
    } else {
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === guess) {
          correctGuesses++;
          wordEl.innerHTML += guess;
        }
      }
    }
    if (incorrectGuesses === 6) {
      messageEl.innerHTML = "You lose!";
    } else if (correctGuesses === wordArray.length) {
      messageEl.innerHTML = "You win!";
    }
  } else {
    messageEl.innerHTML = "You already guessed that letter. Try again.";
  }
  guessEl.value = "";
});
