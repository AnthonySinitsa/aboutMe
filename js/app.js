"use strict";

let score = 0;

let name = prompt("What is your name: ");

let questions = [
  {
    question: "Am I 20?",
    answer: "yes",
  },
  {
    question: "Do I live in Florida?",
    answer: "no",
  },
  {
    question: "Highest education an AA?",
    answer: "yes",
  },
  {
    question: "I worked as a courier?",
    answer: "yes",
  },
  {
    question: "I want to work as a teacher?",
    answer: "no",
  },
];

for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i].question).toLowerCase();

  if (response === questions[i].answer) {
    alert("Correct");
    score++;
  } else if (response !== "yes" && response !== "no") {
    prompt("Please answer yes or no");
    i--; //decrement i so the current question is asked again
  } else {
    alert("Wrong");
  }
}

alert(`Welcome to my page ${name}`);

function guessGame() {
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

    attempts--;
  }

  if (attempts === 0) {
    alert(`You ran out of guesses, The correct answer was ${correctAnswer}.`);
  }
}

guessGame();

function guessColor() {
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
