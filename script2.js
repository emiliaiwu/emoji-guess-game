'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

// document.querySelector(".number").textContent = secretNumber;

const displayImage = (img) => {
    document.getElementById("emoji").src = img;
};

const displayMessage = (message) => {
    document.querySelector(".message").textContent =
        message;
};

const displayScore = (score) => {
    document.querySelector(".score").textContent =
        score;
};

const guessBgColor = (bgColor) => {
    document.querySelector(".guess").style.backgroundColor =
        bgColor;
};

document.querySelector('.check').addEventListener
    ('click', function () {
        let guess = Number(document.querySelector('.guess').value);

        let diff = Math.abs(guess - secretNumber);

        if (score > 1) { 
            if (!guess || guess < 0) {
                displayImage("img/28.png");
                displayMessage("Not Allowed!");
                // Guess is correct
            } else if (guess === secretNumber) {
                displayImage("img/25.png");
                displayMessage("You Got It!");
                document.querySelector(
                    ".h1"
                ).textContent = `My Secret Number is ${secretNumber}`;
                guessBgColor("#04AA6D");
                document.querySelector(".reset").style.backgroundColor = "#04AA6D";
                //    High Score
                if (score > highScore) {
                    highScore = score * 2;
                    document.querySelector('.highScore').textContent = highScore;
                }
                // Guess is less than 3 && guess is less than or equal to 20
            } else if (diff < 3 && guess <= 20) {
                displayImage("img/1.png");
                displayMessage("Almost There!");
                score--;
                displayScore(score);

            } else if ((diff > 2) && (diff < 5) && (guess <= 20)) {
                displayImage("img/7.png");
                displayMessage("You're Closer");
                score--;
                displayScore(score);
                
            } else if ((diff > 4) && (diff < 7) && (guess <= 20)) {
                displayImage("img/8.png");
                displayMessage("A Bit Close");
                score--;
                displayScore(score);
        
            } else if (diff > 6 && diff < 9 && guess <= 20) {
                displayImage("img/18.png");
                displayMessage("A Bit Far");
                score--;
                displayScore(score);
    
            } else if (diff > 8 && diff < 11 && guess <= 20) {
                displayImage("img/32.png");
                displayMessage("You Can Do Better!");
                score--;
                displayScore(score);
        
            } else if (diff > 10 && diff < 13 && guess <= 20) {
                displayImage("img/33.png");
                displayMessage("Not Even Close!");
                score--;
                displayScore(score);
     
            } else if (diff > 12 && diff < 15 && guess <= 20) {
                displayImage("img/10.png");
                displayMessage("Keep Trying");
                score--;
                displayScore(score);
               
            } else if (diff > 14 && diff < 17 && guess <= 20) {
                displayImage("img/23.png");
                displayMessage("Not Close!");
                score--;
                displayScore(score);
                
            } else if (diff > 16 && diff < 19 && guess <= 20) {
                displayImage("img/15.png");
                displayMessage("Very Far!");
                score--;
                displayScore(score);

            } else if ((diff > 18) && (diff <= 20) && (guess <= 20)) {
                displayImage("img/9.png");
                displayMessage("Toooo Far!");
                score--;
                displayScore(score);
                
            } else if (guess >= 21) {
                displayImage("img/4.png");
                displayMessage("Choose 1 ... 20");
            }


        } else {
            displayImage("img/3.png");
            displayMessage("Game Over!");
            displayScore("0");
            guessBgColor("red");
            document.querySelector(".reset").textContent = "Again!";
        }
})

document.querySelector('.reset').addEventListener
    ('click', function () {

        score = 10;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayImage("img/21.png");
        displayMessage("Start Guessing . . .");
        displayScore(score);
        document.querySelector(".h1").textContent = "Guess My Secret Number ❓"; 
        guessBgColor("");
        document.querySelector(".guess").value = '';
        document.querySelector(".reset").textContent = "Reset";
        document.querySelector(".reset").style.backgroundColor = "";

})

      

   