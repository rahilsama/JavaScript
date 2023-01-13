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

const val = Math.floor(Math.random() * 21);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "NO Number!")
    );
  } else if (guess === val) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = val;
    document.querySelector(".highscore").textContent = score;
  } else {
    if (score > 1) {
      document.querySelector(".score").textContent = --score;
      if (guess > val) {
        document.querySelector(".message").textContent = "Too high 📈";
      } else {
        document.querySelector(".message").textContent = "Too low 📉";
      }
    } else {
      document.querySelector(".message").textContent = "Game Over 💀";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {});
