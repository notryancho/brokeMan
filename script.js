const word = "javascript";
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const balance = document.getElementById("balance");
const bankBalance = 100;

submit.addEventListener("click", function(e) {
  e.preventDefault();
  if (word.indexOf(guess.value) === -1) {
    bankBalance -= 10;
    balance.innerHTML = "Bank Balance: $" + bankBalance;
  }
});


