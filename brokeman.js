const wordList = ["BANKRUPT", "MILLIONAIRE", "HOMELESS"];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray = alphabet.split("");
const wordArray = word.split("");
const alphabetDiv = document.getElementById("alphabet");
const correctLettersDiv = document.getElementById("correctLetters");
const message = document.getElementById("message");
const replayBtn = document.createElement("button");

let image = document.querySelector("img"); 

let bankBalance = 70;
const balance = document.getElementById("balance");
document.getElementById("balance").style.fontSize = "20px";
document.getElementById("balance").style.color = "green";
balance.innerHTML = "Bank Balance: $" + bankBalance;

for(let i=0; i < word.length; i++){
    let correctLetterSpan = document.createElement("span");
    correctLetterSpan.innerHTML = "_";
    correctLetterSpan.classList.add("letter-span");
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
            document.getElementById("balance").style.color = "red";
            image.src = "/Users/ryancho/ga_seir/projects/brokeMan/images/images 3/broke.png";
            for (let i = 0; i < alphabetDiv.childNodes.length; i++) {
                alphabetDiv.childNodes[i].setAttribute("disabled", "true");
            }

            replayBtn.innerHTML = "Replay";
        document.getElementById("game").appendChild(replayBtn);
        replayBtn.addEventListener("click", function() {
        location.reload();
    });
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
        replayBtn.innerHTML = "Replay";
    document.getElementById("game").appendChild(replayBtn);
    replayBtn.addEventListener("click", function() {
        location.reload();
    });
      }
    });
  });
  

  

  


