"use strict";

let score = 0;

let name = prompt('What is your name: ');

function ageFun(){
  let age = prompt("Am I 20? yes or no").toLowerCase();
  if (age === "yes") {
    alert("Correct");
    score++;
    //console.log("Correct");
  } else if (age === "no") {
    alert("Wrong");
    //console.log("Wrong");
  } else {
    prompt("Please answer yes or no");
  }
}
ageFun();

function livingFun(){
  let living = prompt("Do I live in Florida? yes or no").toLowerCase();
  if (living === "no") {
    alert("Correct");
    score++;
    //console.log("Correct");
  } else if (living === "yes") {
    alert("Wrong");
    //console.log("Wrong");
  } else {
    prompt("Please answer yes or no");
  }
}

livingFun();

function educationFun(){
  let education = prompt("Highest education an AA? yes or no").toLowerCase();
  if (education === "yes") {
    alert("Correct");
    score++;
    //console.log("Correct");
  } else if (education === "no") {
    alert("Wrong");
    //console.log("Wrong");
  } else {
    prompt("Please answer yes or no");
  }
}
educationFun();

function workFun(){
  let work = prompt("I worked as a courier? yes or no").toLocaleLowerCase();
  if (work === "yes") {
    alert("Correct");
    score++;
    //console.log("Correct");
  } else if (work === "no") {
    alert("Wrong");
    //console.log("Wrong");
  } else {
    prompt("Please answer yes or no");
  }
}
workFun();

function goalFun(){
  let goal = prompt("I want to work as a teacher? yes or no").toLowerCase();
  if (goal === "no") {
    alert("Correct");
    score++;
    //console.log("Correct");
  } else if (goal === "yes") {
    alert("Wrong");
    //console.log("Wrong");
  } else {
    prompt("Please answer yes or no");
  }
}
goalFun();

//welcome the user with their name
alert(`Welcome to my page ${name}`);

function guessGame(){
  //guess a number BETWEEN 1 AND 10
  let correctAnswer = Math.floor(Math.random() * 10) + 1;
  let attempts = 4;

  while (attempts > 0) {
    let answer = prompt("Guess a number between 1 and 10: ");

    if (parseInt(answer) === correctAnswer) {
      alert("Correct!");
      score++;
      break;
    } else if (parseInt(answer) > correctAnswer) {
      alert("Too high, Try again: ");
    } else {
      alert("Too low, Try again: ");
    }

    attempts--; //so that it doesn't keep reprompting
  }

  if (attempts === 0) {
    alert(`You ran our of guesses, The correct answer was ${correctAnswer}.`);
  }
}
guessGame();

function guessColor(){
  //favorite color
  let possibleAnswers = ["red", "blue", "orange"];
  let attempts2 = 6;
  let correct = false;

  while (attempts2 > 0 && !correct) {
    let answer2 = prompt("Guess a color: ");

    for (let i = 0; i < possibleAnswers.length; i++) {
      if (answer2.toLowerCase() === possibleAnswers[i]) {
        alert("Correct");
        score++;
        correct = true;
        break;
      }
    }

    if (!correct) {
      alert("Incorrect, try again: ");
      attempts2--;
    }
  }

  if (!correct) {
    alert(`You ran out of attempts.`);
  }
}
guessColor();

alert(`Your score was ${score}`);
