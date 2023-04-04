"use strict";

let name = prompt("What is your name: ");

let age = prompt("Am I 20? yes or no").toLowerCase();
if (age === "yes") {
  alert("Correct");
  //console.log("Correct");
} else if (age === "no") {
  alert("Wrong");
  //console.log("Wrong");
} else {
  prompt("Please answer yes or no");
}

let living = prompt("Do I live in Florida? yes or no").toLowerCase();
if (living === "no") {
  alert("Correct");
  //console.log("Correct");
} else if (living === "yes") {
  alert("Wrong");
  //console.log("Wrong");
} else {
  prompt("Please answer yes or no");
}

let education = prompt("Highest education an AA? yes or no").toLowerCase();
if (education === "yes") {
  alert("Correct");
  //console.log("Correct");
} else if (education === "no") {
  alert("Wrong");
  //console.log("Wrong");
} else {
  prompt("Please answer yes or no");
}

let work = prompt("I worked as a courier? yes or no").toLocaleLowerCase();
if (work === "yes") {
  alert("Correct");
  //console.log("Correct");
} else if (work === "no") {
  alert("Wrong");
  //console.log("Wrong");
} else {
  prompt("Please answer yes or no");
}

let goal = prompt("I want to work as a teacher? yes or no").toLowerCase();
if (goal === "no") {
  alert("Correct");
  //console.log("Correct");
} else if (goal === "yes") {
  alert("Wrong");
  //console.log("Wrong");
} else {
  prompt("Please answer yes or no");
}

alert(`Welcome to my page ${name}`);
