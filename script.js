const word = "javascript";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray = alphabet.split("");
const wordArray = word.split("");
const alphabetDiv = document.getElementById("alphabet");
const balance = document.getElementById("balance");
const bankBalance = 100;

alphabetArray.forEach(function(letter) {
    let button = document.createElement("button");
    button.innerHTML = letter;
    alphabetDiv.appendChild(button);
    button.addEventListener("click", function() {
      if (wordArray.indexOf(button.innerHTML) !== -1) {
        alert("Correct letter!");
      } else {
        bankBalance -= 10;
        balance.innerHTML = "Bank Balance: $" + bankBalance;
      }
    });
  });
  
  
  


