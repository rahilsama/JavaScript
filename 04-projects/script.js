"use strict";

//for class we use '.' before the class name
//for ID we use '#' before the ID name.

// console.log(document.querySelector(".message").textContent);

//DOM manipulation
//DOM stands for document object model is structured representation of HTML documents
//DOM allows JS to access HTML elements and styles to manipulate them.
//DOM !== JavaScript

// document.querySelector(".message").textContent = "Correct Number!";

// console.log(document.querySelector(".message").textContent);

// //We do the same for the Score

// document.querySelector(".number").textContent = 12;

// document.querySelector(".score").textContent = 25;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//lets make our code react to the clicks made on the dom: EVENT handlers

let val = Math.floor(Math.random() * 21);

let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //If no number is inserted
  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "NO Number!")
    );
  }
  //Correct number is entered
  else if (guess === val) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = val;

    //Highscore checker.
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //changing the CSS style as the game is won
    document.querySelector("body").style.backgroundColor = "#60b347";

    //increasing width of the correct number
    document.querySelector(".number").style.width = "30rem";
  }
  //Number is entered but is not correct
  else {
    //Execute only if the score is more than 0.
    if (score > 0) {
      document.querySelector(".score").textContent = --score;
      //If the guess was higher than the number
      if (guess > val) {
        document.querySelector(".message").textContent = "Too high 📈";
      }
      //If the guess was lower than the number
      else {
        document.querySelector(".message").textContent = "Too low 📉";
      }
    }
    //Game over since the score is 0
    else {
      document.querySelector(".message").textContent = "Game Over 💀";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //Reseting the message to initial one
  document.querySelector(".message").textContent = "Start guessing...";

  //changing the CSS style as the game is resetted and make it go back to the black
  document.querySelector("body").style.backgroundColor = "#222";

  //decreasing width of the number back to initial value
  document.querySelector(".number").style.width = "15rem";
  //changing the value of number back to '?'
  document.querySelector(".number").textContent = "?";

  //Resetting score values
  score = 20;
  document.querySelector(".score").textContent = score;

  //getting a new random number
  val = Math.floor(Math.random() * 21);

  //resetting the guess value
  document.querySelector(".guess").value = "";
});
