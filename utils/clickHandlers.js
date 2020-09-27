import { createPoem } from './poemPublisher.js';

// THESE ARE INPUTS
const noun1 = document.getElementById("noun1");
const noun2 = document.getElementById("noun2");
const noun3 = document.getElementById("noun3");
const verb1 = document.getElementById("verb1");
const number1 = document.getElementById("number1");
const adjective1 = document.getElementById("adjective1");
const number2 = document.getElementById("number2");
const adjective3 = document.getElementById("adjective3");


// issues: injecting the first number into the first noun;
// though the second repeat noun accurately repeats in the third slot


export function validateInput() {
  if (noun1.value === 'test'){
    createPoem();
  }  
  else if (noun1.value === "" ||
      noun2.value === "" ||
      noun3.value === "" ||
      verb1.value === "" ||
      number1.value === "" ||
      adjective1.value === "" ||
      number2.value === "" ||
      adjective3.value === ""
    ){
      alert("You left one blank!")
    } else {
      createPoem();
    }
  }

  