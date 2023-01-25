const wordList = ["BANKRUPT", "MILLIONAIRE", "HOMELESS"];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray = alphabet.split("");
const wordArray = word.split("");
const alphabetDiv = document.getElementById("alphabet");
// const balance = document.getElementById("balance");
// const bankBalance = 100;
const correctLettersDiv = document.getElementById("correctLetters");
const message = document.getElementById("message");

let bankBalance = 50;
const balance = document.getElementById("balance");
balance.innerHTML = "Bank Balance: $" + bankBalance;

for(let i=0; i < word.length; i++){
    let correctLetterSpan = document.createElement("span");
    correctLetterSpan.innerHTML = "_";
    correctLettersDiv.appendChild(correctLetterSpan);
}

alphabetArray.forEach(function(letter) {
    let button = document.createElement("button");
    button.innerHTML = letter;
    alphabetDiv.appendChild(button);
    button.addEventListener("click", function() {
        button.setAttribute("disabled", "true");
      if (wordArray.indexOf(button.innerHTML) === -1) {
        bankBalance -= 10;
        balance.innerHTML = "Bank Balance: $" + bankBalance;
        if(bankBalance <= 0){
            message.innerHTML = "Game Over";
            for (let i = 0; i < alphabetDiv.childNodes.length; i++) {
                alphabetDiv.childNodes[i].setAttribute("disabled", "true");
            }
        }
      } else {
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === button.innerHTML){
                let correctLetterSpan = correctLettersDiv.childNodes[i];
                if (correctLetterSpan.innerHTML === "_"){
                    correctLetterSpan.innerHTML = button.innerHTML;
                }
            }
        }
      }
      let correctLetters = "";
      for (let i = 0; i < correctLettersDiv.childNodes.length; i++) {
        correctLetters += correctLettersDiv.childNodes[i].innerHTML;
      }
      if (correctLetters === word) {
        message.innerHTML = "NICE, YOU'RE STILL RICH!"
      }
    });
  });



// for(let i=0; i < word.length; i++){
//     let correctLetterSpan = document.createElement("span");
//     correctLetterSpan.innerHTML = "_";
//     correctLettersDiv.appendChild(correctLetterSpan);
// }
// alphabetArray.forEach(function(letter) {
//     let button = document.createElement("button");
//     button.innerHTML = letter;
//     alphabetDiv.appendChild(button);
//     button.addEventListener("click", function() {
//         button.setAttribute("disabled", "true");
//         button.style.visibility = "hidden";
//       if (wordArray.indexOf(button.innerHTML) !== -1) {
//         for (let i = 0; i < wordArray.length; i++) {
//             if (wordArray[i] === button.innerHTML){
//                 let correctLetterSpan = correctLettersDiv.childNodes[i];
//                 correctLetterSpan.innerHTML = button.innerHTML;
//             }
//         }
//       } else {
//         bankBalance -= 10;
//         balance.innerHTML = "Bank Balance: $" + bankBalance;
//       }
//       let correctLetters = "";
//       for (let i = 0; i < correctLettersDiv.childNodes.length; i++) {
//         correctLetters += correctLettersDiv.childNodes[i].innerHTML;
//       }
//       if (correctLetters === word) {
//         message.innerHTML = "NICE, YOU'RE STILL RICH!"
//       }
//     });
//   });
  
  
  


