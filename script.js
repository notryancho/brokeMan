const wordList = ["BANKRUPT", "MILLIONAIRE", "HOMELESS"];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray = alphabet.split("");
const wordArray = word.split("");
const alphabetDiv = document.getElementById("alphabet");
const balance = document.getElementById("balance");
const bankBalance = 100;
const correctLettersDiv = document.getElementById("correctLetters");

alphabetArray.forEach(function(letter) {
    let button = document.createElement("button");
    button.innerHTML = letter;
    alphabetDiv.appendChild(button);
    button.addEventListener("click", function() {
        button.setAttribute("disabled", "true");
        button.style.visibility = "hidden";
      if (wordArray.indexOf(button.innerHTML) !== -1) {
        let correctLetterSpan = document.createElement("span");
        correctLetterSpan.innerHTML = button.innerHTML;
        correctLettersDiv.appendChild(correctLetterSpan);
      } else {
        bankBalance -= 10;
        balance.innerHTML = "Bank Balance: $" + bankBalance;
      }
    });
  });
  
  
  


